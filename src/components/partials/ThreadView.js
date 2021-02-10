import React from 'react'
import { BrowserRouter, useHistory ,Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function ThreadView() {
    return (
        <div className="main-view">
            thello
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
)(ThreadView);