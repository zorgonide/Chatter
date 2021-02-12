const defaultState = {
    socket: null,
    message: '',
    threads: [],
    currentThread: '',
    users: []
}

const chat = (state = defaultState, action) => {
    console.log(action)
    switch(action.type){
        case 'SETUP_SOCKET':
            return {
                ...state,
                socket: action.payload
            }
        case 'GOT_USERS':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default chat;