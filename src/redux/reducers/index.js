import { combineReducers } from 'redux'
import {AuthCall} from './auth.reducer'
import { getUsersCall, currentUser, getChatCall } from './apicall.reducer'

const rootReducer = combineReducers({
    user: AuthCall,
    allUsers: getUsersCall,
    currentUser,
    chats: getChatCall
})

export default rootReducer