import React from 'react';
import { connect } from "react-redux";
import ChatHeader from "../components/ChatHeader";
import MessageItem from "../components/MessageItem";
import ChatControl from "../components/ChatControl";

class MessagesList extends React.Component {

    constructor(props) {
        super(props)

        this.ul = null
        this.chatWrap = null
    }

    componentDidUpdate() {
        this.chatWrap.scrollTop = this.ul.scrollHeight
    }
    render() {
        return (
            <div className="chat" >
                <ChatHeader />
                <div className="chat-history" ref={chatWrap => this.chatWrap = chatWrap}>
                    <ul ref={ul => this.ul = ul}>
                        {this.props.messages.map((m) => {
                            return <MessageItem key={m.time} {...m} />
                        })}
                    </ul>
                </div>
                <ChatControl />
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messagesReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList)