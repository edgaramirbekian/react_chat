import React from "react";
import PeopleList from "../containers/PeopleList";
import MessagesList from "../containers/MessagesList";
import authHOC from "../decorators/authHOC"

class Chat extends React.Component {
    render() {
        return (
            <div className="container clearfix">
                <PeopleList />
                <MessagesList />
            </div>
        )
    }
}

export default authHOC(Chat)