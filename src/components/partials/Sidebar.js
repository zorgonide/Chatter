import React, {useState} from 'react'
import { BrowserRouter, useHistory ,Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function Sidebar(props) {
    const [search, setSearch] = useState('');
    const searchFunction = () => {
        props.socket.send(JSON.stringify({
            type: 'SEARCH',
            data: search
        }))
    }
    return (
        <div className="sidebar">
            <div className="search-container">
                <input
                    className="form-control"
                    placeholder="Search"
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value)
                        searchFunction();
                    }} 
                />
                <button className="btn btn-primary" onClick={() => searchFunction()}>Search</button>
            </div>
            {
                search ? 
                    <ul className="thread-list">
                        <label>Results</label>
                        {
                            props.users && props.users.map((user, ui) => {
                                return (
                                    <li>
                                        <Link to='/thread'>
                                            <i className="zmdi zmdi-account-circle"></i>
                                            <h5>{user.name}</h5>
                                            <p>{user.email}</p>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                :
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
            }           
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