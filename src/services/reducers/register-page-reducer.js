import { ADD_USERDATA, ADD_USERDATA_SUCCESS, ADD_USERDATA_FAILURE } from '../actions-types/register-page-action-type';

const initialState = {
    registerAuthenticated: false,
    registerUserData: {
        email: '',
        password: '',
        name: ''
    },
    isLoading: false,
    hasError: false,
}

export const registerPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERDATA:
            return {
                ...state,
                registerAuthenticated: false,
                isLoading: true,
                hasError: false
            }
        case ADD_USERDATA_SUCCESS:
            return {
                ...state,
                registerAuthenticated: true,
                registertUserData: { ...action.payload },
                isLoading: false,
                hasError: false
            }
        case ADD_USERDATA_FAILURE:
            return {
                ...state,
                registerAuthenticated: false,
                isLoading: false,
                hasError: true
            }
        default:
            return state
    }
}