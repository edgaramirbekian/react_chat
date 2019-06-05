import React from 'react';
import ws from '../util/ws'

export default class ChatControl extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            msg_text: ''
        }
    }
    render() {
        return (
            <div className="chat-message clearfix">
                <textarea placeholder="Type your message" rows="4" ref={this.setRef} onChange={this.handle_text_change}/>
                <button onClick={() => this.send_callback(this.state.msg_text)}>Send</button>
            </div>
        )
    }

    setRef = (msg) => {
        this.msg = msg
    }

    send_callback = (data) => {
        ws.send_msg(data)
    }

    handle_text_change = (ev) => {
        this.setState({
            msg_text: this.msg.value
        })
    }
}
