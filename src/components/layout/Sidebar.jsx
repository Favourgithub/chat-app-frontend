import React, { Component } from 'react'
import { connect } from 'react-redux'
import { apicallAction } from "../../redux/actions/apicall.action";
import Logout from '../Logout'
import { serviceConstant } from '../../redux/constants/apicall.constant'
import history from '../../shared/_helpers/history'

export class Sidebar extends Component {
  
    componentDidMount() {
        const { dispatch, user } = this.props
        dispatch(apicallAction.getUsers(user.token))
    }

    goToChat = async (curUser) => {
        const { dispatch, user } = this.props
        await dispatch(apicallAction.currentUser(curUser, user.token))
        const { currentUser } = this.props
        console.log(currentUser.room._id)
        await dispatch(apicallAction.getChat(currentUser.room._id, user.token))
        history.push("/chat")
    }
    
    render() {
        const { allUsers, user } = this.props
        return (
            <div id="sidebar" className="chat__sidebar">
                <h2 className="room-title">{user.user.username}</h2>
                <h3 className="list-title">Users</h3>
                <div className="search">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search user" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>

                </div>
                
                <ul className="users">
                    {allUsers.status === serviceConstant.GET_USERS_SUCCESS ? 
                        allUsers.data.map((user, i) => (
                            <li key={i} onClick={() => this.goToChat(user)}>{user.username}</li>
                        ))
                    : <li></li>}
                    
                    
                </ul>
                <Logout {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Sidebar)
