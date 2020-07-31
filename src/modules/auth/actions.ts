import * as types from '@modules/auth/types'
import axios from 'axios'
import { Dispatch } from 'redux'
import api from '@config/api'

export const authSignUp = (username: string, password: string) => async (dispatch: Dispatch) => {
    dispatch({ type: types.AUTH_REQUEST })
    try {
        await axios({
            url: api.url,
            method: 'post',
            headers: {
                ContentType: 'application/json'
            },
            data: {
                username,
                password
            }
        })
        dispatch({
            type: types.AUTH_REQUEST_SUCCESS
        })
    } catch (e) {
        dispatch({
            type: types.AUTH_REQUEST_FAIL
        })
    }
}

export const authLogin = (username: string, password: string) => async (dispatch: Dispatch) => {
    dispatch({ type: types.AUTH_REQUEST })
    try {
        const data = await axios({
            url: api.url,
            method: 'post',
            headers: {
                ContentType: 'application/json'
            },
            data: {
                username,
                password
            }
        })
        
        dispatch({
            type: types.AUTH_SET_TOKEN,
            payload: {
                token: data
            }
        })
        dispatch({
            type: types.AUTH_REQUEST_SUCCESS
        })
    } catch (e) {
        dispatch({
            type: types.AUTH_REQUEST_FAIL
        })
    }
}