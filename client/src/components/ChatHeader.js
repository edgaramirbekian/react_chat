import React from 'react'

export default class ChatHeader extends React.Component {
    render() {
        return (
            <div className="chat-header clearfix">
                <div className="chat-about">
                    <div className="chat-with">Main Hall</div>
                </div>
                <i className="fa fa-star"></i>
            </div>
        )
    }
}
