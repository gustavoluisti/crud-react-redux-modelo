import { createReducer } from 'reduxsauce'
import { Types } from  '../actionCreators'

export const INITIAL_STATE = {
    isAuthing: false,
    isAuth: false,
    isSigning: false,
    user:{},
    error:{},
    errorMessage: ''
}
export const siginRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigning: true,
        error: false,
        errorMessage: ''
    }
}
export const signinSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigning: false,
        isAuth: true,
        user: action.user
    }
}
export const signinFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigning: false,
        error: true,
        errorMessage: action.error
    }
}

export const authRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigning: false,
        error: true,
        errorMessage: action.error
    }
}

export const authSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigning: false,
        error: true,
        errorMessage: action.error
    }
}

export const authFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigning: false,
        isAuth: false,
        error: true,
        errorMessage: action.error
    }
}

export const HANDLERS = {
    [Types.SIGNIN_REQUEST]: siginRequest,
    [Types.SIGNIN_SUCCESS]: signinSuccess,
    [Types.SIGNIN_FAILURE]: signinFailure,
    [Types.AUTH_REQUEST]: authRequest,
    [Types.AUTH_SUCCESS]: authSuccess,
    [Types.AUTH_FAILURE]: authFailure
}

export default createReducer(INITIAL_STATE, HANDLERS)