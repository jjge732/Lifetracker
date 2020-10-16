import { loadUsersRequest, loadUsersSuccess, loadUsersError } from './actions';
import { Dispatch } from 'react';
import userService from '../services/userService';
import { Effect } from './types'

export const loadUsers = (): Effect => (dispatch, getState) => {
  dispatch(loadUsersRequest());
  return userService.loadUsers()
    .then((response: any) => dispatch(loadUsersSuccess(response.data._embedded.users)))
    .catch(() => dispatch(loadUsersError()));
};
