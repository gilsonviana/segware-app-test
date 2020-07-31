export const AUTH_REQUEST = "AUTH_REQUEST"
export const AUTH_REQUEST_SUCCESS = "AUTH_REQUEST_SUCCESS"
export const AUTH_REQUEST_FAIL = "AUTH_REQUEST_FAIL"

export const AUTH_SET_TOKEN = "AUTH_SET_TOKEN"
export const AUTH_UNSET_TOKEN = "AUTH_UNSET_TOKEN"

export interface IAuth {
    token: string,
    request: {
        fetching: boolean
        success: null | boolean
        fail: null | boolean
    }
}

interface IAuthSignUpRequest {
    type: typeof AUTH_REQUEST
}
interface IAuthSignUpRequestSucess {
    type: typeof AUTH_REQUEST_SUCCESS
}
interface IAuthSignUpRequestFail {
    type: typeof AUTH_REQUEST_FAIL
}
interface ISetAuthToken {
    type: typeof AUTH_SET_TOKEN,
    payload: {
        token: string
    }
}
interface IUnsetAuthToken {
    type: typeof AUTH_UNSET_TOKEN
}

export type AuthActions = 
    IAuthSignUpRequest | 
    IAuthSignUpRequestSucess |
    IAuthSignUpRequestFail |
    ISetAuthToken | 
    IUnsetAuthToken