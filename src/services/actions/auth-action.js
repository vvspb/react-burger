import { GET_USERDATA, GET_USERDATA_SUCCESS, GET_USERDATA_FAILURE, DELETE_USERDATA, DELETE_USERDATA_SUCCESS, AUTH_CHECKED } from '../actions-types/auth-action-type';

import api from '../../utils/api';
import { getCookie, setCookie } from '../../utils/cookie';

export const authUserData = () => ({
    type: GET_USERDATA,
})

export const deleteUserData = () => ({
    type: DELETE_USERDATA,
})

export const authUserDataSuccess = (userData) => ({
    type: GET_USERDATA_SUCCESS,
    payload: userData
})

export const deleteUserDataSuccess = () => ({
    type: DELETE_USERDATA_SUCCESS
})

export const authUserDataFailure = () => ({
    type: GET_USERDATA_FAILURE
})

export const authChecked = () => ({
    type: AUTH_CHECKED
})

export const fetchAuthUserData = (email, password, name = 0) => {
    return (dispatch) => {
        dispatch(authUserData())
        api.authUser(email, password, name)
            .then(result => {
                if (result.success) {
                    setCookie('accessToken', result.accessToken.split('Bearer ')[1])
                    setCookie('refreshToken', result.refreshToken)
                    return dispatch(authUserDataSuccess(result.user))
                }
            })
            .catch(() => dispatch(authUserDataFailure()))
    }
}

export const checkUserAuth = () => (dispatch) => {
    if (getCookie("accessToken")) {
        api.getUser()
        .then(result => {
            if (result.success) return dispatch(authUserDataSuccess(result.user))
        })
        .catch(()=> {dispatch(authChecked());})
        .finally(() => {
            dispatch(authChecked());
        });
    } else {
        dispatch(authChecked());
    }
};

export const fetchLogoutUserData = () => {
    return (dispatch) => {
        dispatch(deleteUserData())
        api.logoutUser()
            .then(result => {
                if (result.success) return dispatch(deleteUserDataSuccess(result.user))
            })
    }
}
