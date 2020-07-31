import * as types from '@modules/auth/types'

const initalState: types.IAuth = {
    token: '',
    request: {
        fetching: false,
        success: null,
        fail: null
    }
}

const authReducer = (state = initalState, action: types.AuthActions) => {
    switch(action.type) {
        case types.AUTH_REQUEST:
            return {
                ...state,
                request: {
                    ...initalState.request,
                    fetching: true
                }
            }
        case types.AUTH_REQUEST_SUCCESS:
            return {
                ...state,
                request: {
                    ...state.request,
                    fetching: false,
                    success: true
                }
            }
        case types.AUTH_REQUEST_FAIL:
            return {
                ...state,
                request: {
                    ...state.request,
                    fetching: false,
                    fail: true
                }
            }
        case types.AUTH_SET_TOKEN:
            return {
                ...state,
                token: action.payload.token
            }
        case types.AUTH_UNSET_TOKEN:
            return {
                ...state,
                token: ''
            }
        default:
            return state
    }
}

export default authReducer