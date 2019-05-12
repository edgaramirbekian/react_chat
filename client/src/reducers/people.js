const initialState = [
    'Alex',
    'Bob',
    'Metro',
    'Boomin',
    'Shrimp',
    'Lil Nigga'
]

const peopleReducer = (state = initialState, action) => {
    if (action.type === "ADD_NEW_USER") {
        return state.concat('Martin' + Date.now())
    }
    return state
}

export default peopleReducer