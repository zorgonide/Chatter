import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ChatActions from './store/actions/chatActions'
import { useEffect } from 'react';
function App(props) {
    useEffect(() => {
        props.setupSocket();
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route 
                        path="/login"
                        render={props => {
                            return (
                                <h1>Login</h1>
                            )
                        }}
                    />
                    <Route 
                        path="/"
                        render={props => {
                            return (
                                <h1>Root</h1>
                            )
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
        dispatch(ChatActions.setupSocket())
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps  
)
(App);
