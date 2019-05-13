import constants from "../constants/index";

const newUserConnected = (userID, userName) => {
    return {
        type: constants.NEW_USER_CONNECTED,
        userID,
        userName
    }
}

export default newUserConnected