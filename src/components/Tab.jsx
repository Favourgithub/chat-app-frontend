import React, { Component } from 'react'
import Register from './Register'
import Login from './Login'

export class Tab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: true,
            register: false
        }
    }
    registerTab = () => {
        this.setState({
            login: false,
            register: true
        })
    }
    
    loginTab = () => {
        this.setState({
            login: true,
            register: false
        })
    }
    render() {
        const { login, register } = this.state
        return (
            <div>
                <div className="centered-form">
                    <div className="centered-form__box">
                        {login && <div>
                                        <h1>Sign In</h1>
                                        <Login />
                                        <p onClick={this.registerTab}>Don't have an account? Sign Up now</p>
                                  </div>
                        }
                        {register && <div>
                                        <h1>Sign Up</h1>
                                        <Register />
                                        <p onClick={this.loginTab} >Already have an account? Sign In now</p>
                                     </div>
                        }
                    
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Tab
