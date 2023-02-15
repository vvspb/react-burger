import { GET_USERDATA, GET_USERDATA_SUCCESS, GET_USERDATA_FAILURE } from '../actions-types/auth-action-type';

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
                userData: {...action.payload },
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
        default:
            return state
    }
}