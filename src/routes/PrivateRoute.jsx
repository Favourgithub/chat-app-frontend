import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export class PrivateRoute extends Component {
    render() {
        const { component: Component, user, ...rest } = this.props
        return (
            <Route {...rest} render={(props) => user.token ? <Component {...props} /> : <Redirect to="/" />} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(PrivateRoute)
