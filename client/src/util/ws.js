export default ((wsUrl) => {
    let ws = new WebSocket(wsUrl)
    ws.onopen = () => {
        console.log("WS Open")
    }

    ws.onmessage = (message) => {
        console.log(message.data);

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