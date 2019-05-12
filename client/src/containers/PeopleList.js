import React from "react";
import { connect } from "react-redux";

class PeopleList extends React.Component {
    render() {
        console.log(this.props);
        return (

            <div className="people-list" id="people-list">
                <div className="search">
                    <input type="text" placeholder="search" />
                    <i className="fa fa-search"></i>
                </div>
                <ul className="list">
                    {this.props.people_state.map(person => {
                        return (
                            <li className="clearfix" key={person}>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
                                <div className="about">
                                    <div className="name">{person}</div>
                                    <div className="status">
                                        <i className="fa fa-circle online"></i> online
                                </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        people_state: state.peopleReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList) 