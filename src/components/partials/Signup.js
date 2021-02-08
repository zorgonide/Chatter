import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Signup(props) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [name, setName] = useState('');
    // const [username, setUsername] = useState('');
    // const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');
    let userObj = {
        email:'',
        password:'',
        name:'',
        username:'',
        password2:'',
    }
    const [user, setUser] = useState(userObj)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-wrapper">
                        <h3>Sign Up</h3>
                        <hr/>
                        <form 
                            onSubmit={ e => {
                                e.preventDefault();
                                if(props.socket) {
                                    let empty = 0;
                                    Object.keys(user).forEach(key => {
                                        if (user[key] === '') {
                                            empty += 1;
                                        }
                                    })
                                    if (empty > 0) {
                                        return setError('All fields required')
                                    }
                                    else if (user.password !== user.password2) {
                                        return setError('Passwords must match')
                                    }
                                    else {
                                        setError('')
                                    }
                                    try {
                                        props.socket.send(JSON.stringify({
                                            type: 'SIGNUP',
                                            data: {
                                                email: user.email,
                                                password: user.password,
                                                name: user.name,
                                                username: user.username
                                            }
                                        }))
                                    }
                                    catch(err) {
                                        setError('Network Error')
                                    }
                                    
                                }
                            }}
                        > 
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            value={user.name}
                                            // onChange={e => setUser(e.target.value)}
                                            onChange={(event) => { 
                                                setUser(prevStyle => ({
                                                    ...prevStyle,
                                                    name: event.target.value
                                                }));
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                            value={user.username}
                                            onChange={(event) => { 
                                                setUser(prevStyle => ({
                                                    ...prevStyle,
                                                    username: event.target.value
                                                }));
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
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
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
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
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Re-type password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            value={user.password2}
                                            onChange={(event) => { 
                                                setUser(prevStyle => ({
                                                    ...prevStyle,
                                                    password2: event.target.value
                                                }));
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p>Already have an account? <Link to="/login">Log in</Link></p>
                            {
                                error ? 
                                <p className="text-danger">{error}</p> :
                                <p></p>
                            }
                            <div className="text-center">
                                <button className="btn btn-primary" type="submit">
                                    Sign Up
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
)(Signup);