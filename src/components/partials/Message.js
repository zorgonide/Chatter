import React from 'react'
import { connect } from 'react-redux';

function Message(props) {
    console.log(props.msg.userId === props.user.id ? 'msg-right' : 'msg-left')
    let alignment = props.msg.userId === props.user.id ? 'msg-right' : 'msg-left';
    return (
        <div className={`message-item ${alignment}`}>
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
