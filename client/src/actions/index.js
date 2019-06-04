import constants from "../constants/index";

export const newUserConnected = (userID, userName) => {
    return {
        type: constants.NEW_USER_CONNECTED,
        userID,
        userName
    }
}

export const disconnectedUser = (userID) => {
    return {
        type: constants.DISCONNECTED_USER,
        userID
    }
}

export const receiveNewMessage = (author, text, time, color) => {
    return {
        type: constants.RECEIVE_NEW_MESSAGE,
        author, text, time, color
    }
}
