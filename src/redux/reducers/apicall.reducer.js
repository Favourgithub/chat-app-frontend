import { serviceConstant } from '../constants/apicall.constant'

export const getUsersCall = (state = {}, action) => {
    switch(action.type) {
        case serviceConstant.GET_USERS_PENDING:
            return {
                status: serviceConstant.GET_USERS_PENDING
                
            };
        case serviceConstant.GET_USERS_SUCCESS:
            return {
                status: serviceConstant.GET_USERS_SUCCESS,
                data: action.response.data
            };
        case serviceConstant.GET_USERS_FAILURE:
            return {
                status: serviceConstant.GET_USERS_FAILURE,
                error: action.response.data
            };
        default: return { ...state }
    }
}

export const currentUser = (state = {}, action) => {
    switch(action.type) {
        case serviceConstant.GET_ROOM_SUCCESS:
            return {
                status: serviceConstant.GET_ROOM_SUCCESS,
                ...action.response.data
            };
        case serviceConstant.GET_ROOM_PENDING:
            return {
                status: serviceConstant.GET_ROOM_PENDING
            };
        case serviceConstant.GET_ROOM_FAILURE:
            return {
                status: serviceConstant.GET_ROOM_FAILURE
            };
        default: return { ...state }
    }
}

export const getChatCall = (state, action) => {
    switch(action.type) {
        case serviceConstant.GET_CHAT_SUCCESS:
            return {
                status: serviceConstant.GET_CHAT_SUCCESS,
                chat: action.response.data
            };
        case serviceConstant.GET_CHAT_PENDING:
            return {
                status: serviceConstant.GET_CHAT_PENDING,
                ...state
            };
        case serviceConstant.GET_CHAT_FAILURE:
            return {
                status: serviceConstant.GET_CHAT_FAILURE
            };
        default: return { ...state }
    }
}