import { newUserConnected, disconnectedUser, receiveNewMessage } from "../actions/index";
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
            case "disconnected_user":
                dispatch(disconnectedUser(messageObj.userID))
                break
            case "message":
                const { author, text, time, color } = messageObj.data
                dispatch(receiveNewMessage(author, text, time, color))
                break

            default:
                console.log("default case worked")
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

    const send_msg = (text) => {
        ws.send(text)
    }

    return { emit, send_msg }
})('ws://localhost:4000')