import React from 'react'

export default class MessageItem extends React.Component {
    render() {
        console.log(this.props);

        return (
            <li className="clearfix">
                <div className="message-data align-right">
                    <span className="message-data-time">{this.props.time}</span> &nbsp; &nbsp;
                    <span className="message-data-name">{this.props.author}</span> <i className="fa fa-circle me"></i>

                </div>
                <div style={{ background: this.props.color }} className="message other-message float-right">
                    {this.props.text}
                </div>
            </li>
        )
    }
}
