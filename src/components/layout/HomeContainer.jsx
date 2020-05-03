import React, { Component } from 'react'
import Sidebar from './Sidebar'

export class HomeContainer extends Component {
    render() {
        return (
            <div className="chat">
                <Sidebar />
                {this.props.children}
            </div>
        )
    }
}

export default HomeContainer
