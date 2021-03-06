import constants from "../constants/index";

const messagesReducer = (state = [], action) => {
    console.log(action);

    switch (action.type) {
        case constants.RECEIVE_NEW_MESSAGE:
            return state.concat({
                author: action.author,
                text: action.text,
                time: action.time,
                color: action.color
            })
        default:
            return state
    }
}

export default messagesReducer