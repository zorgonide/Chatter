const defaultState = {
    token: null,
    user: {}
}

const auth = (state = defaultState, action) => {
    switch(action.type){
        case 'LOGGEDIN':
            return {
                ...state,
                token: action.payload.data.session.id,
                user: action.payload.data.user
            }
        case 'LOGGEDOUT':
            return {
                ...state,
                ...defaultState
            }
        default:
            return state;
    }
}

export default auth;