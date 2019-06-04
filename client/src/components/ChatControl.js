import React from 'react';
import { receiveNewMessage } from "../actions/index";
import Store from "../store/index"

export default class ChatControl extends React.Component {

    constructor(props) {
        super(props)
        this.msg = null
    }
    render() {
        return (
            <div className="chat-message clearfix">
                <textarea placeholder="Type your message" rows="4" ref={msg => this.msg = msg} />
                <button onClick={this.send_msg(this.msg.value)}>Send</button>
            </div>
        )
    }

    send_msg (msg_text) {
        Store.dispatch(receiveNewMessage(author_id, author))
    }
}
