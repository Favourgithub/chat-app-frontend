import { serviceConstant } from '../constants/apicall.constant'
import { ApiCall }from '../client.action'
import { routes } from '../../services/url'
import { SystemConstant } from "../../shared/app.constant"

const getUsersConstant = {
    success: serviceConstant.GET_USERS_SUCCESS,
    pending: serviceConstant.GET_USERS_PENDING,
    failure: serviceConstant.GET_USERS_FAILURE
}

const getRoomConstant = {
    success: serviceConstant.GET_ROOM_SUCCESS,
    pending: serviceConstant.GET_ROOM_PENDING,
    failure: serviceConstant.GET_ROOM_SUCCESS
}

const getChatConstant = {
    success: serviceConstant.GET_CHAT_SUCCESS,
    pending: serviceConstant.GET_CHAT_PENDING,
    failure: serviceConstant.GET_CHAT_SUCCESS
}

const getUsers = (token) => {
    return ApiCall(routes.GETUSERS, null, SystemConstant.VERB.GET, getUsersConstant, SystemConstant.TOKEN(token))
}

const currentUser = (user2, token) => {
    return ApiCall(routes.GETROOM, user2, SystemConstant.VERB.POST, getRoomConstant, SystemConstant.TOKEN(token))
}

const getChat = (room_id, token) => {
    return ApiCall(routes.GETCHAT, {room_id}, SystemConstant.VERB.POST, getChatConstant, SystemConstant.TOKEN(token))
}

export const apicallAction = {
    getUsers,
    currentUser,
    getChat
}