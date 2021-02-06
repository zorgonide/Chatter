import React, {useState} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-wrapper">
                        <h3>Log In</h3>
                        <form 
                            onSubmit={e => {
                                e.preventDefault();
                                if(props.socket) {
                                    props.socket.send(JSON.stringify({
                                        type: 'LOGIN',
                                        data: {
                                            email: email,
                                            password: password 
                                        }
                                    }))
                                }
                            }}
                        > 
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                            <button className="btn btn-primary" type="submit">
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
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
)(Login);