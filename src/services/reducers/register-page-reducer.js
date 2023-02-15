import { ADD_USERDATA, ADD_USERDATA_SUCCESS, ADD_USERDATA_FAILURE } from '../actions-types/register-page-action-type';

const initialState = {
    authenticated: false,
    userData: {},
    isLoading: false,
    hasError: false,
}

export const registerPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERDATA:
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        case ADD_USERDATA_SUCCESS:
            return {
                ...state,
                authenticated: true,
                userData: { ...action.payload },
                isLoading: false,
                hasError: false
            }
        case ADD_USERDATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        default:
            return state
    }
}