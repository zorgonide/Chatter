import { BrowserRouter, useHistory ,Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ChatActions from './store/actions/chatActions'
import * as AuthActions from './store/actions/authActions'
import { useEffect, useState } from 'react';
import Auth from "./components/pages/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/swag.css"
import Messenger from './components/pages/Messenger';
function App(props) {
    useEffect(() => {
        props.setupSocket(props.token, props.user.id);
    }, [])
    let token = props.token;
    return (
        <div className="App">
            <button
                className="btn btn-danger"
                onClick={e => 
                {
                    e.preventDefault();
                    props.logout();
                }
            }>
                Log Out
            </button>
            <BrowserRouter>
                <Switch>
                    <Route 
                        path="/login"
                        render={props=> {
                            if (token){
                                return(
                                    <Redirect to="/"/>
                                )
                            }
                            else {
                                return(
                                    <Auth/>
                                )
                            }
                        }}
                    />
                    <Route 
                        path="/signup"
                        render={props=> {
                            if (token){
                                return(
                                    <Redirect to="/"/>
                                )
                            }
                            else {
                                return(
                                    <Auth/>
                                )
                            }
                        }}
                    />
                    {/* <Route 
                        path="/:threadId"
                        render={props=> {
                            if (!token){
                                return(
                                    <Redirect to="/login"/>
                                )
                            }
                            else {
                                return(
                                    (routerParams) => <Messenger {...routerParams} />
                                    <Messenger/>
                                )
                            }
                        }}
                    /> */}
                    <Route
                        exact
                        path="/:threadId"
                        component={(routerParams) => <Messenger {...routerParams} />}
                    />
                    <Route 
                        path="/"
                        render={props => {
                            if (!token) {
                                return (
                                    <Redirect to="/login"></Redirect>
                                )
                            }
                            else {
                                return (
                                    <Messenger/>
                                )
                            }
                        }}
                    />
                </Switch> 
            </BrowserRouter>
        </div>
    );
}
const mapStateToProps = state => ({
    ...state.auth,
    ...state.chat
})
const mapDispatchToProps = dispatch => ({
    setupSocket: (token, userId) => {
        dispatch(ChatActions.setupSocket(token, userId));
    },
    logout: () => {
        dispatch(AuthActions.logout());
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps  
)(App);