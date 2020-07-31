import * as types from '@modules/auth/types'

const initalState: types.IAuth = {
    token: ''
}

const authReducer = (state = initalState, action: types.AuthActions) => {
    switch(action.type) {
        case types.SET_AUTH_TOKEN:
            return {
                ...state
            }
        case types.UNSET_AUTH_TOKEN:
            return {
                ...state,
                token: ''
            }
        default:
            return state
    }
}

export default authReducer