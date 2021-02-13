const defaultState = {
    socket: null,
    message: '',
    threads: [],
    currentThread: '',
    users: []
}

const chat = (state = defaultState, action) => {
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
        case 'ADD_THREAD':
            return {
                ...state,
                threads:  state.threads.filter(t => t.id === action.payload.id).length === 0 ? 
                state.threads.concat(action.payload) :
                state.threads
            }
        case 'INITIAL_THREADS':
            return {
                ...state,
                threads: action.payload
            }
        default:
            return state
    }
}

export default chat;