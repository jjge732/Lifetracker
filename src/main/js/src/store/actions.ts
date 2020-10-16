import { User, LoadUsersRequest, LoadUsersSuccess, LoadUsersError, LoginUserRequest, LoginUserSuccess, LoginUserError, UpdateForm } from './types';

export const loadUsersRequest = (): LoadUsersRequest => ({
  type: 'loadUsersRequest',
});

export const loadUsersSuccess = (users: User[]): LoadUsersSuccess => ({
  type: 'loadUsersSuccess',
  users,
});

export const loadUsersError = (): LoadUsersError => ({
  type: 'loadUsersError',
});

export const loginUserRequest = (): LoginUserRequest => ({
  type: 'loginUserRequest',
});

export const loginUserSuccess = (activeUserId: number): LoginUserSuccess => ({
  type: 'loginUserSuccess',
  activeUserId,
});

export const loginUserError = (): LoginUserError => ({
  type: 'loginUserError',
});

export const updateForm = (email: string, password: string): UpdateForm => ({
  type: 'updateForm',
  email,
  password
})