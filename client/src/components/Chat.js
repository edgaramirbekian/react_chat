import React from "react";
import PeopleList from "../containers/PeopleList";
import MessagesList from "../containers/MessagesList";

export default class Chat extends React.Component {
    render() {
        return (
            <div className="container clearfix">
                <PeopleList />
                <MessagesList />
            </div>
        )
    }
}