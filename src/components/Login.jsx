import React, { Component } from 'react'
import {connect} from 'react-redux'
import { authActions } from "../redux/actions/auth.action";

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             password: ""
        }
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signIn = (e) => {
        e.preventDefault()
        this.props.dispatch(authActions.login(this.state))
    }

    componentDidMount() {
    }
    
    render() {
        const { username, password } = this.state
        
        return (
            <div>
                
                <form onSubmit={this.signIn} >
                    <label>Username</label>
                    <input type="text" name="username" value={username} placeholder="username" onChange={this.handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={password} placeholder="password" onChange={this.handleChange} required />
                    <button>Sign In</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Login)
