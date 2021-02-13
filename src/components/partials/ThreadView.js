import React, {useState,useEffect, Component} from 'react'
import { BrowserRouter, useHistory ,Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ThreadView extends Component {
    componentDidMount(){
        this.init();
    }
    componentDidUpdate(props){
        if (this.props.match)
            if(props.match.params.threadId !== this.props.match.params.threadId) {
                this.init();
            }
    }
    init = () => {
        if (this.props.match){
            let currentThread = this.props.threads.filter(t => t.id === this.props.match.params.threadId)[0];
            if (currentThread && this.props.socket.readyState){
                let skip = currentThread.Messages || 0;
                this.props.socket.send(JSON.stringify({
                    type: "THREAD_LOAD",
                    data: {
                        threadId:this.props.match.params.threadId,
                        skip: skip,
                    }
                }))
            }
        }
    }

    render() {
        return (
            <div className="main-view">
                thello
            </div>
        )
    }
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