import { GET_USERDATA, GET_USERDATA_SUCCESS, GET_USERDATA_FAILURE, DELETE_USERDATA_SUCCESS, AUTH_CHECKED, UPDATE_USERDATA, HASERROR_DEFAULT } from '../actions-types/auth-action-type';

import api from '../../utils/api';
import { deleteCookie, getCookie, setCookie } from '../../utils/cookie';

export const authUserData = () => ({
    type: GET_USERDATA,
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

export const updateUser = (userData) => ({
    type: UPDATE_USERDATA,
    payload: userData
})

export const makeHasErrorDefault = ()=>({
    type: HASERROR_DEFAULT
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
            .catch(() => {
                return dispatch(authUserDataFailure())
            }
            )
    }
}

export const checkUserAuth = () => (dispatch) => {
    if (getCookie("accessToken")) {
        api.getUser()
            .then(res => {
                return dispatch(authUserDataSuccess(res.user))} )
            .catch(() => { 
                dispatch(authChecked()); })
            .finally(() => {
                dispatch(authChecked());
            });
    } else {
        dispatch(authChecked());
    }
};

export const fetchUpdateUser = (email, password, name) => (dispatch) => {
    api.editUser(email, password, name)
    .then(res => {
        if(res.success) return dispatch(updateUser(res.user))
    })
}

export const fetchLogoutUserData = () => {
    return (dispatch) => {
        api.logoutUser()
            .then(result => {
                if (result.success) {
                    deleteCookie('accessToken')
                    deleteCookie('refreshToken')
                    return dispatch(deleteUserDataSuccess())
                }
            })
    }
}
