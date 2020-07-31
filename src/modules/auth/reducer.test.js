import reducer from './reducer'
import * as types from './types'

const initalState = {
    token: '',
    request: {
        fetching: false,
        success: null,
        fail: null
    }
}

describe('Auth reducer', () => {

    it('should return initial state', () => {
        expect(reducer(initalState, {})).toEqual({
            ...initalState
        })
    })

    it('should set token', () => {
        expect(reducer(initalState, { 
            type: types.AUTH_SET_TOKEN, 
            payload: {
                token: 'b'
            }
        })).toEqual({
            ...initalState,
            token: 'b'
        })
    })

    it('should unset token', () => {
        expect(reducer(initalState, { 
            type: types.AUTH_UNSET_TOKEN, 
        })).toEqual({
            ...initalState,
            token: ''
        })
    })

    it('should set fetching', () => {
        expect(reducer(initalState, { 
            type: types.AUTH_REQUEST, 
        })).toEqual({
            ...initalState,
            request: {
                ...initalState.request,
                fetching: true
            }
        })
    })

    it('should set success', () => {
        expect(reducer(initalState, { 
            type: types.AUTH_REQUEST_SUCCESS, 
        })).toEqual({
            ...initalState,
            request: {
                ...initalState.request,
                success: true
            }
        })
    })

    it('should set fail', () => {
        expect(reducer(initalState, { 
            type: types.AUTH_REQUEST_FAIL, 
        })).toEqual({
            ...initalState,
            request: {
                ...initalState.request,
                fail: true
            }
        })
    })
})