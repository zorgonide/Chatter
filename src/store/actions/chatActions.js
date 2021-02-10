import * as AuthActions from "../../store/actions/authActions";

export const setupSocket = () => {
    return dispatch => {
        const socket = new WebSocket('ws://localhost:8080');
        socket.onopen = () => {
            dispatch({
                type: 'SETUP_SOCKET',
                payload: socket
            });
        }

        socket.onmessage = (message) => {
            console.log(JSON.parse(message.data))
            let data = JSON.parse(message.data);
            switch(data.type) {
                case 'LOGGEDIN':
                    dispatch(AuthActions.loggedIn(data))
                default:
                    //nothing
            }
        }
    }
}