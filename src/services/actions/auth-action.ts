import { GET_USERDATA, GET_USERDATA_SUCCESS, GET_USERDATA_FAILURE, DELETE_USERDATA_SUCCESS, AUTH_CHECKED, UPDATE_USERDATA, HASERROR_DEFAULT } from '../actions-types/auth-action-type';

import api from '../../utils/api';
import { deleteCookie, getCookie, setCookie } from '../../utils/cookie';
import { TUser } from '../../utils/types';
import { TAppDispatch, TAppThunk } from '../store'


export interface IAuthUserData {
    readonly type: typeof GET_USERDATA
}

export interface IAuthUserDataSuccess {
    readonly type: typeof GET_USERDATA_SUCCESS,
    readonly payload: TUser
}

export interface IDeleteUserDataSuccess {
    readonly type: typeof DELETE_USERDATA_SUCCESS
}

export interface IAuthUserDataFailure {
    readonly type: typeof GET_USERDATA_FAILURE
}

export interface IAuthChecked {
    readonly type: typeof AUTH_CHECKED
}

export interface IUpdateUser {
    readonly type: typeof UPDATE_USERDATA,
    readonly payload: TUser
}

export interface IMakeHasErrorDefault {
    readonly type: typeof HASERROR_DEFAULT
}

export type TAuthActions = IAuthUserData | IAuthUserDataSuccess | IDeleteUserDataSuccess | IAuthUserDataFailure | IAuthChecked | IUpdateUser | IMakeHasErrorDefault


export const authUserData = (): IAuthUserData => ({
    type: GET_USERDATA,
})

export const authUserDataSuccess = (userData: TUser): IAuthUserDataSuccess => ({
    type: GET_USERDATA_SUCCESS,
    payload: userData
})

export const deleteUserDataSuccess = (): IDeleteUserDataSuccess => ({
    type: DELETE_USERDATA_SUCCESS
})

export const authUserDataFailure = (): IAuthUserDataFailure => ({
    type: GET_USERDATA_FAILURE
})

export const authChecked = (): IAuthChecked => ({
    type: AUTH_CHECKED
})

export const updateUser = (userData: TUser): IUpdateUser => ({
    type: UPDATE_USERDATA,
    payload: userData
})

export const makeHasErrorDefault = (): IMakeHasErrorDefault=>({
    type: HASERROR_DEFAULT
})

export const fetchAuthUserData: TAppThunk = (email: string, password: string, name = '') => {
    return (dispatch: TAppDispatch) => {
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

export const checkUserAuth: TAppThunk = () => (dispatch: TAppDispatch) => {
    if (getCookie("accessToken")) {
        api.getUser()
            .then(res => {
                return dispatch(authUserDataSuccess(res?.user))} )
            .catch(() => { 
                dispatch(authChecked()); })
            .finally(() => {
                dispatch(authChecked());
            });
    } else {
        dispatch(authChecked());
    }
};

export const fetchUpdateUser: TAppThunk = (email: string, password: string, name: string) => (dispatch: TAppDispatch) => {
    api.editUser(email, password, name)
    .then(res => {
        if(res?.success) return dispatch(updateUser(res?.user))
    })
}

export const fetchLogoutUserData: TAppThunk = () => {
    return (dispatch: TAppDispatch) => {
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
