import { loadUsersRequest, loadUsersSuccess, loadUsersError, loginUserRequest, loginUserSuccess, loginUserError, signUpUserError, signUpUserRequest, signUpUserSuccess } from './actions';
import userService from '../services/userService';
import { Effect } from './types'

export const loadUsers = (): Effect => (dispatch, getState) => {
  dispatch(loadUsersRequest());
  return userService.loadUsers()
    .then((response: any ) => dispatch(loadUsersSuccess(response.data._embedded.users)))
    .catch(() => dispatch(loadUsersError()));
};

export const loginUser = (email: string, password: string): Effect => (dispatch, getState) => {
  dispatch(loginUserRequest());
  return userService.loginUser(email, password)
    .then((response: any) => dispatch(loginUserSuccess(response.data)))
    .catch(() => dispatch(loginUserError()));
}

export const signUpUser = (email: string, password: string): Effect => (dispatch, getState) => {
  dispatch(signUpUserRequest());
  return userService.signUpUser(email, password)
    .then((response: any) => dispatch(signUpUserSuccess(response.data)))
    .catch(() => dispatch(signUpUserError()));
}