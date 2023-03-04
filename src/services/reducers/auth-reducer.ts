import { GET_USERDATA, GET_USERDATA_SUCCESS, GET_USERDATA_FAILURE, DELETE_USERDATA_SUCCESS, AUTH_CHECKED, UPDATE_USERDATA, HASERROR_DEFAULT } from '../actions-types/auth-action-type';

export interface IAuthReducer {
    authenticated: boolean;
    userData: {
        email: string;
        name: string;
    };
    isLoading: boolean;
    hasError: boolean;
}
const initialState: IAuthReducer= {
    authenticated: false,
    userData: {
        email: '',
        name: ''
    },
    isLoading: false,
    hasError: false,
}

export const authReducer = (state = initialState, action: any): IAuthReducer => {
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
        case UPDATE_USERDATA:
            return {
                ...state,
                userData: { ...action.payload }
            }
        case DELETE_USERDATA_SUCCESS:
            return {
                ...state,
                userData: {
                    email: '',
                    name: ''
                }
            }
        case AUTH_CHECKED:
            return {
                ...state,
                authenticated: true
            }
        case HASERROR_DEFAULT:
            return {
                ...state,
                hasError: false,
                authenticated: true
            }
        default:
            return state
    }
}