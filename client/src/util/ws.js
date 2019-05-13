import newUserConnected from "../actions/index";
import Store from "../store/index"

export default ((wsUrl) => {
    let ws = new WebSocket(wsUrl)
    ws.onopen = () => {
        console.log("WS Open")
    }

    ws.onmessage = (message) => {
        const messageObj = JSON.parse(message.data)
        const { dispatch } = Store
        switch (messageObj.type) {
            case "new_user_connected":
                const { userID, userName } = messageObj
                dispatch(newUserConnected(userID, userName))
                break
            default:
                console.log("default case worked");
        }
    }

    let countReconnect = 0
    const emit = (message) => {
        if (countReconnect > 5) return
        if (ws.readyState === ws.CONNECTING) {
            setTimeout(() => {
                emit(message)
                countReconnect++
            }, 500)
            return
        }
        ws.send(message)
        countReconnect = 0
    }
    return { emit }
})('ws://localhost:4000')