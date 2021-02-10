import React from 'react'
import { BrowserRouter, useHistory ,Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="thread-list">
                <label>Messages</label>
                <li>
                    <Link to="/thread">
                        <i className="zmdi zmdi-account-circle"></i>
                        <h5>Name</h5>
                        <p>Test message</p>
                    </Link>
                </li>
                <li>
                    <Link to="/thread">
                        <i className="zmdi zmdi-account-circle"></i>
                        <h5>Name</h5>
                        <p>Test message</p>
                    </Link>
                </li>
                <li>
                    <Link to="/thread">
                        <i className="zmdi zmdi-account-circle"></i>
                        <h5>Name</h5>
                        <p>Test message</p>
                    </Link>
                </li>
                <li>
                    <Link to="/thread">
                        <i className="zmdi zmdi-account-circle"></i>
                        <h5>Name</h5>
                        <p>Test message</p>
                    </Link>
                </li>
            </ul>
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
)(Sidebar);