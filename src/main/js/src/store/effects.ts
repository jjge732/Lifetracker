import { ThunkAction } from 'redux-thunk';
import { ApplicationState, ApplicationAction } from './types';
import { loadUsersRequest, loadUsersSuccess, loadUsersError } from './actions';
import userService from '../services/userService';

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export const loadUsers = (): Effect => (dispatch, getState) => {
  dispatch(loadUsersRequest());
  return userService.loadUsers()
    .then((response: any) => dispatch(loadUsersSuccess(response.data._embedded.users)))
    .catch(() => dispatch(loadUsersError()));
};
