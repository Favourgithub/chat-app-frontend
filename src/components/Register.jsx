import React, { Component } from 'react'
import {connect} from 'react-redux'
import { authActions } from "../redux/actions/auth.action";

export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             username: "",
             password: ""
        }
    }

    onChange = (e) => {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()
        this.props.dispatch(authActions.register(this.state))
    }

    componentDidMount() {
        
    }
    
    render() {
        const { email, username, password } = this.state
        
        return (
            <div>
                <form onSubmit={this.signUp}>
                    <label>Email</label>
                    <input type="text" name="email" id="email" value={email}  placeholder="email" onChange={this.onChange} required />
                    <label>Username</label>
                    <input type="text" name="username" value={username} placeholder="username" onChange={this.onChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={password} placeholder="password" onChange={this.onChange} required />
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

export default connect(mapStateToProps)(Register)
