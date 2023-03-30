import { authReducer } from './auth-reducer';
import * as types from '../actions-types/auth-action-type';

const initialState = {
    authenticated: false,
    userData: {
        email: '',
        name: ''
    },
    isLoading: false,
    hasError: false,
}

const user = {
    email: 'test',
    name: 'test',
};

describe('auth-reducer', () => {
    it('should return the initial state', () => {
        expect(authReducer(undefined, {} as any)).toEqual(initialState)
    })

    it('should handle GET_USERDATA', () => {
        expect(authReducer(initialState, {
            type: types.GET_USERDATA
        })).toEqual({
            ...initialState,
            authenticated: false,
            isLoading: true,
            hasError: false
        })
    })

    it('should handle GET_USERDATA_SUCCESS', () => {
        expect(authReducer(initialState, {
            type: types.GET_USERDATA_SUCCESS,
            payload: user
        })).toEqual({
            ...initialState,
            authenticated: true,
            userData: user,
            isLoading: false,
            hasError: false
        })
    }) 

    it('should handle GET_USERDATA_FAILURE', () => {
        expect(authReducer(initialState, {
            type: types.GET_USERDATA_FAILURE
        })).toEqual({
            ...initialState,
            authenticated: false,
            isLoading: false,
            hasError: true
        })
    })

   it('should handle UPDATE_USERDATA', () => {
        expect(authReducer(initialState, {
            type: types.UPDATE_USERDATA,
            payload: user
        })).toEqual({
            ...initialState,
            userData: user
        })
    })

    it('should handle DELETE_USERDATA_SUCCESS', () => {
        expect(authReducer(initialState, {
            type: types.DELETE_USERDATA_SUCCESS
        })).toEqual({
            ...initialState,
            userData: {
                email: '',
                name: ''
            }
        })
    })  

    it('should handle AUTH_CHECKED', () => {
        expect(authReducer(initialState, {
            type: types.AUTH_CHECKED,
        })).toEqual({
            ...initialState,
            authenticated: true
        })
    })

    it('should handle HASERROR_DEFAULT', () => {
        expect(authReducer(initialState, {
            type: types.HASERROR_DEFAULT,
        })).toEqual({
            ...initialState,
            hasError: false,
            authenticated: true
        })
    })
})
