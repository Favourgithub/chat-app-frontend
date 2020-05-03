import React, { Component } from 'react'
import HomeConatiner from '../layout/HomeContainer'
import socketIOClient from "socket.io-client";
import { routes } from '../../services/url'
import { connect } from 'react-redux'
// import { apicallAction } from "../../redux/actions/apicall.action";
import moment from 'moment'

export class Chat extends Component {
    constructor(props) {
        super(props)
        this.socket = socketIOClient(routes.SOCKET)
        this.state = {
             currentMsg: [ ],
             message: '',
        }

        this.msgEndRef = React.createRef()
        this.msgBeginRef = React.createRef()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSendMsg = (e) => {
        e.preventDefault()
        const { message } = this.state
        const { user, currentUser } = this.props
        const sender = user.user
        const room = currentUser.room
        
        // return alert(`${room}, ${username}, ${message}`)
        this.socket.emit("sendingMsg", {message, room, sender}, (error) => {
            this.setState({
                message: ''
            })
        })
    }

    scrollToBottom = () => {
        const e = this.msgBeginRef

        const newMsg = e.current.lastElementChild
        newMsg.scrollIntoView({ behaviour: 'smooth' })
    }    

    handleScroll = () => {
        const e = this.msgBeginRef

        const newMsg = e.current.lastElementChild
        const newMsgStyle = getComputedStyle(newMsg)
        const newMsgMargin = parseInt(newMsgStyle.marginBottom)
        const newMsgHeight = newMsg.offsetHeight + newMsgMargin

        // Visible height
        const visibleHeight = e.current.clientHeight

        // Height of message container
        const containerHeight = e.current.scrollHeight

        // How far have i scrolled
        const scrollOffset = e.current.scrollTop + visibleHeight

        if(containerHeight-newMsgHeight <= scrollOffset) {
            e.current.scrollTop = e.current.scrollHeight
        }
        // newMsg.scrollIntoView({ behaviour: 'smooth' })
        
    }
    
    componentDidMount() {
        const { user, currentUser } = this.props
        const username = user.user.username
        const room = currentUser.room.name

        this.socket.on("message", (msg) => {
            // console.log(msg)
            this.setState((prevState) => ({
                currentMsg: [
                    ...prevState.currentMsg,
                    {
                        ...msg
                    }
                ]
            }))
            this.handleScroll()
        })

        this.socket.emit('join', { username, room }, (error) => {
            if(error) {
                alert(error)
            }
        })

        this.scrollToBottom()
    }


    render() {
        const { currentMsg, message } = this.state
        const { chats, user } = this.props
        return (
            <HomeConatiner >
                <div className="chat__main" >
                    <div id="messages" className="chat__messages" ref={this.msgBeginRef} >
                    
                        {chats.chat.map((chat, i) => (
                            
                            <div key={i} className={chat.sender_id.username === user.user.username ? "sender" : "message"} >
                                <p>
                                    <span className="message__name">{chat.sender_id.username}</span>
                                    <span className="message__meta">{moment(chat.createdAt).format('h:mm a')}</span>
                                </p>
                                <p>{chat.message}</p>
                            </div>
                            
                        ))}
                        {currentMsg.map((chat, i) => (
                            <div key={i} className={chat.username === user.user.username ? "sender" : "message"} >
                                <p>
                                    <span className="message__name">{chat.username}</span>
                                    <span className="message__meta">{moment(chat.createdAt).format('h:mm a')}</span>
                                </p>
                                <p>{chat.text}</p>
                            </div>
                        ))}
                        
                    
                    </div>
                    <div ref={this.msgEndRef} />
                    <div className="compose">
                        <form id="msgForm" onSubmit={this.handleSendMsg}>
                            <input name="message" id="msg" value={message} required autoComplete="off" onChange={this.handleChange} />
                            <button id="send-message">Send</button>
                        </form>
                        <button id="send-location" >Send Location</button>
                    </div>
                </div>
            </HomeConatiner>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Chat)
