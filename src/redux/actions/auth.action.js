import { authenticationConstant } from '../constants/auth.constant'
import { ApiCall }from '../client.action'
import { routes } from '../../services/url'
import { SystemConstant } from "../../shared/app.constant"

const authConstants = {
    success: authenticationConstant.AUTH_CALL_SUCCESS,
    pending: authenticationConstant.AUTH_CALL_PENDING,
    error: authenticationConstant.AUTH_CALL_FAILURE
}

const register = (data) => {
    return ApiCall(routes.REGISTER, data, SystemConstant.VERB.POST, authConstants, SystemConstant.HEADER)
}

const login = (data) => {
    return ApiCall(routes.LOGIN, data, SystemConstant.VERB.POST, authConstants, SystemConstant.HEADER)
}

const logout = (token) => {
    return ApiCall(routes.LOGOUT, null, SystemConstant.VERB.POST, authConstants, SystemConstant.TOKEN(token))
}

export const authActions = {
    register,
    login,
    logout
}