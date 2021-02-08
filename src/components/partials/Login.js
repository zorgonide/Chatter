import React, {useState} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let userObj = {
        email:'',
        password:'',
    }
    const [user, setUser] = useState(userObj)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-wrapper">
                        <h3>Log In</h3>
                        <hr/>
                        <form 
                            onSubmit={e => {
                                e.preventDefault();
                                if(props.socket) {
                                    props.socket.send(JSON.stringify({
                                        type: 'LOGIN',
                                        data: {
                                            email: user.email,
                                            password: user.password 
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
                                    value={user.email}
                                    onChange={(event) => { 
                                        setUser(prevStyle => ({
                                            ...prevStyle,
                                            email: event.target.value
                                        }));
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={(event) => { 
                                        setUser(prevStyle => ({
                                            ...prevStyle,
                                            password: event.target.value
                                        }));
                                    }}
                                />
                            </div>
                            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                            <div className="text-center">
                                <button className="btn btn-primary" type="submit">
                                    Log In
                                </button>
                            </div>
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