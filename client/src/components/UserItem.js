import React from "react";

export default class UserItem extends React.Component {
    render() {

        return (
            <li className="clearfix">
                <div className="about">
                    <div className="name">{this.props.userName}</div>
                    <div className="status">
                        <i className="fa fa-circle online"></i> online
                    </div>
                </div>
            </li>
        )
    }
}
