import constants from "../constants/index";

const peopleReducer = (state = [], action) => {
    switch (action.type) {
        case constants.NEW_USER_CONNECTED:
            return state.concat({
                userName: action.userName,
                id: action.userID
            })
        case constants.DISCONNECTED_USER:
            return state.filter((user) => {
                return user.id !== action.userID
            })
        default:
            return state
    }
}

export default peopleReducer