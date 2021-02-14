import React from 'react'
import { connect } from 'react-redux';

function Message(props) {
    return (
        <div className={`message-item ${props.message.userId === props.user.id ? 'msg-right' : 'msg-left'}`}>
            <i className="zmdi zmdi-account-circle"></i>
            <div className="chat-bubble">
                {props.msg.content}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.auth,
    ...state.chat
})
const mapDispatchToProps = dispatch => ({

})
export default connect(
    mapStateToProps,
    mapDispatchToProps  
)(Message)
