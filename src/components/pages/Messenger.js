import React from 'react'
import { BrowserRouter, useHistory ,Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from '../partials/Sidebar';
import ThreadView from '../partials/ThreadView';
import ChatInput from '../partials/ChatInput';

function Messenger(props) {
    return (
        <div className="messenger-container">
            <Sidebar match={props.match}/>
            <ThreadView match={props.match}/>
            <ChatInput match={props.match}/>
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
)(Messenger);