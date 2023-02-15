import { GET_USERDATA, GET_USERDATA_SUCCESS, GET_USERDATA_FAILURE } from '../actions-types/auth-action-type';

import api from '../../utils/api';
import { setCookie } from '../../utils/cookie';

export const authUserData = () => ({
    type: GET_USERDATA,
})

export const authUserDataSuccess = (userData) => ({
    type: GET_USERDATA_SUCCESS,
    payload: userData
})

export const authUserDataFailure = () => ({
    type: GET_USERDATA_FAILURE
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
