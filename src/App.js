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
        props.setupSocket();
    }, [])
    let token = props.token;
    const [logOut, setLogOut] = useState(false);
    let history = useHistory();
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
                    <Route 
                        path="/:threadId"
                        render={props=> {
                            if (token){
                                return(
                                    <Redirect to="/"/>
                                )
                            }
                            else {
                                return(
                                    <Messenger/>
                                )
                            }
                        }}
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
    setupSocket: () => {
        dispatch(ChatActions.setupSocket());
    },
    logout: () => {
        dispatch(AuthActions.logout());
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps  
)(App);