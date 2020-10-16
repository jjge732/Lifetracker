import { loadUsersRequest, loadUsersSuccess, loadUsersError, loginUserRequest, loginUserSuccess, loginUserError } from './actions';
import userService from '../services/userService';
import { Effect } from './types'

export const loadUsers = (): Effect => (dispatch, getState) => {
  dispatch(loadUsersRequest());
  return userService.loadUsers()
    .then((response: any) => dispatch(loadUsersSuccess(response.data._embedded.users)))
    .catch(() => dispatch(loadUsersError()));
};

export const loginUser = (email: string, password: string): Effect => (dispatch, getState) => {
  dispatch(loginUserRequest());
  return userService.loginUser(email, password)
    .then((response: any) => dispatch(loginUserSuccess(response.data)))
    .catch(() => dispatch(loginUserError()));
}