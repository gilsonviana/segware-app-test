export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN"
export const UNSET_AUTH_TOKEN = "UNSET_AUTH_TOKEN"

export interface IAuth {
    token: string
}

interface ISetAuthToken {
    type: typeof SET_AUTH_TOKEN,
    payload: {
        token: string
    }
}

interface IUnsetAuthToken {
    type: typeof UNSET_AUTH_TOKEN
}

export type AuthActions = ISetAuthToken | IUnsetAuthToken