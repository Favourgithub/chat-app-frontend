import React, { Component, Fragment } from 'react'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Tab from "../components/Tab"
import Main from '../components/dashboard/Main'
import Chat from '../components/dashboard/Chat'

export class IndexRoute extends Component {
    render() { 
        return (
            <Fragment>
                <PublicRoute exact path="/" component={Tab} />
                <PrivateRoute path="/main" component={Main} />
                <PrivateRoute path="/chat" component={Chat} />
            </Fragment>
        )
    }
}

export default IndexRoute
