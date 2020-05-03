import React, { Component } from 'react'
import HomeConatiner from '../layout/HomeContainer'

export class Main extends Component {
    render() {
        return (
            <HomeConatiner>
                    {/* <img src="https://www.emeryfcu.org/wp-content/uploads/2016/06/emery-live-chat.jpg" className="rounded mx-auto d-block live" alt="Responsive" />
                     */}
                     <div className="chat__main">
                     <div className="center-image-container">
                        
                        <div className="center-img">
                        <i className="fas fa-user-md-chat"></i>
                        </div>
                     </div>
                     </div>
            </HomeConatiner>
        )
    }
}

export default Main
