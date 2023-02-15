import {GET_USERDATA, GET_USERDATA_SUCCESS, GET_USERDATA_FAILURE} from '../actions-types/login-page-action-type';
import api from '../../utils/api';
import { setCookie } from '../../utils/cookie';

export const getUserData = () => ({
    type: GET_USERDATA,
})

export const getUserDataSuccess = (userData) => ({
    type: GET_USERDATA_SUCCESS,
    payload: userData
})

export const getUserDataFailure = () => ({
    type: GET_USERDATA_FAILURE
})

export const fechSignInUser = (email, password ) => {
    return (dispatch) => {
        dispatch(getUserData())
        api.signInUser(email, password )
            .then(result => {
                if (result.success) {
                    setCookie('accessToken', result.accessToken.split('Bearer ')[1])
                    setCookie('refreshToken', result.refreshToken)
                    return dispatch(getUserDataSuccess(result.user))
                }
            })
            .catch(() => dispatch(getUserDataFailure()))
    }
}
