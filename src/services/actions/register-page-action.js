import { ADD_USERDATA, ADD_USERDATA_SUCCESS, ADD_USERDATA_FAILURE } from '../actions-types/register-page-action-type';
import api from '../../utils/api';

export const addUserData = () => ({
    type: ADD_USERDATA,
})

export const addUserDataSuccess = (userData) => ({
    type: ADD_USERDATA_SUCCESS,
    payload: userData
})

export const addUserDataFailure = () => ({
    type: ADD_USERDATA_FAILURE
})

export const fechSignUpUser = (email, password, name ) => {
    return (dispatch) => {
        dispatch(addUserData())
        api.signUpUser(email, password, name )
            .then(result => {
                if (result.success) return dispatch(addUserDataSuccess(result.user))
            })
            .catch(() => dispatch(addUserDataFailure()))
    }
}
