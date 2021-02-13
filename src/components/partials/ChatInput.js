import React, {useState} from 'react'
import { BrowserRouter, useHistory ,Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function ChatInput() {
    const [content, setContent] = useState('')

    return (
        <div className="input-view">
            <input 
                type="text" 
                placeholder="Write your message"
                className="form-control"
                value={content}
                onChange={e => setContent(e.target.value)}
            />
        </div>
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