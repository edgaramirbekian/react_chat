import React from "react";
import { connect } from "react-redux";
import UserSearch from "../components/UserSearch";
import UserItem from "../components/UserItem";

class PeopleList extends React.Component {
    render() {
        return (
            <div className="people-list" id="people-list">
                <UserSearch />
                <ul className="list">
                    {this.props.people_state.map(user => {
                        return (
                            <UserItem key={user.id} userName={user.userName} />
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