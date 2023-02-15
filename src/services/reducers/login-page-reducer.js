import { GET_USERDATA, GET_USERDATA_SUCCESS, GET_USERDATA_FAILURE } from '../actions-types/login-page-action-type';

const initialState = {
    loginAuthenticated: false,
    loginUserData: {
        email:'',
        password: ''
    },
    isLoading: false,
    hasError: false,
}

export const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERDATA:
            return {
                ...state,
                loginAuthenticated: false,
                isLoading: true,
                hasError: false
            }
        case GET_USERDATA_SUCCESS:
            return {
                ...state,
                loginAuthenticated: true,
                loginUserData: { ...action.payload },
                isLoading: false,
                hasError: false
            }
        case GET_USERDATA_FAILURE:
            return {
                ...state,
                loginAuthenticated: false,
                isLoading: false,
                hasError: true
            }
        default:
            return state
    }
}