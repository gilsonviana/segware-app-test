import * as types from '@modules/auth/types'
import axios from 'axios'
import { Dispatch } from 'redux'

export const authSignUp = (username: string, password: string) => async (dispatch: Dispatch) => {
    try {
        const data = axios({

        })
        
        dispatch({
            type: types.SET_AUTH_TOKEN,
            payload: {
                token: data
            }
        })
    } catch (e) {

    }
}