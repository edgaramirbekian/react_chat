import constants from "../constants/index";

const peopleReducer = (state = [], action) => {
    if (action.type === constants.NEW_USER_CONNECTED) {
        return state.concat({
            userName: action.userName,
            id: action.userID
        })
    }
    return state
}

export default peopleReducer