import { GET_USERDATA, GET_USERDATA_SUCCESS, GET_USERDATA_FAILURE, DELETE_USERDATA_SUCCESS, AUTH_CHECKED } from '../actions-types/auth-action-type';

const initialState = {
    authenticated: false,
    userData: {
        email: '',
        name: ''
    },
    isLoading: false,
    hasError: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERDATA:
            return {
                ...state,
                authenticated: false,
                isLoading: true,
                hasError: false
            }
        case GET_USERDATA_SUCCESS:
            return {
                ...state,
                authenticated: true,
                userData: { ...action.payload },
                isLoading: false,
                hasError: false
            }
        case GET_USERDATA_FAILURE:
            return {
                ...state,
                authenticated: false,
                isLoading: false,
                hasError: true
            }
        case DELETE_USERDATA_SUCCESS:
            return {
                ...state,
                authenticated: false,
            }
        case AUTH_CHECKED:
            return {
                ...state,
                authenticated: true
            }
        default:
            return state
    }
}