((wsUrl) => {
    let ws = new WebSocket(wsUrl)
    ws.onopen = () => {
        console.log("WS Open")
    }
    return ws
})('ws://localhost:4000')