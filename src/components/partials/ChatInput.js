import React, {useState} from 'react'
import { BrowserRouter, useHistory ,Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function ChatInput(props) {
    const [content, setContent] = useState('')
    const sendMessage = (e) => {
        if (content) {
            e.preventDefault();
            const msg = {
                threadId: props.match.params.threadId,
                userId: props.user.id,
                content: content,
                date: new Date()
            }
            props.socket.send(JSON.stringify({
                type: 'ADD_MESSAGE',
                threadId: msg.threadId,
                message: msg,
            }))
            setContent('');
        }
    }
    return (
        <form className="input-view" onSubmit={e => sendMessage(e)}>
            <div className="input-group">
                <input 
                    type="text" 
                    placeholder="Write your message"
                    className="form-control"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <div class="input-group-append">
                    <button className="btn btn-send input-group-append"><i className="zmdi zmdi-mail-send"></i></button>
                </div>
            </div>
        </form>
    )
}

const mapStateToProps = state => ({
    ...state.auth,
    ...state.chat
})
const mapDispatchToProps = dispatch => ({
    // setupSocket: () => {
    //     dispatch(ChatActions.setupSocket());
    // },
    // logout: () => {
    //     dispatch(AuthActions.logout());
    // }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps  
)(ChatInput);