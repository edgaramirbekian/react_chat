import { combineReducers } from "redux";
import peopleReducer from "./people";
import messagesReducer from "./messages";

const chatReducer = combineReducers({
    peopleReducer,
    messagesReducer
})

export default chatReducer