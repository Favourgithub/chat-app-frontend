import { authenticationConstant } from '../constants/auth.constant'

export function AuthCall(state={}, action) {
    switch(action.type) {
        case authenticationConstant.AUTH_CALL_SUCCESS : 
            return {
                status: authenticationConstant.AUTH_CALL_SUCCESS,
                ...action.response.data
            };
        case authenticationConstant.AUTH_CALL_PENDING : 
            return {
                status: authenticationConstant.AUTH_CALL_PENDING,
                data: action.data
            };
        case authenticationConstant.AUTH_CALL_FAILURE :
            return {
                status: authenticationConstant.AUTH_CALL_FAILURE,
                data: action.data
            };
        default :
            return {
                ...state
            }
    }
}