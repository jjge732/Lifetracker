import { User, LoadUsersRequest, LoadUsersSuccess, LoadUsersError, LoginUserRequest, LoginUserSuccess, LoginUserError, UpdateForm, JournalEntry } from './types';

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

export const loginUserSuccess = (journalEntry: JournalEntry): LoginUserSuccess => ({
  type: 'loginUserSuccess',
  journalEntry
});

export const loginUserError = (): LoginUserError => ({
  type: 'loginUserError',
});

export const updateForm = (email: string, password: string): UpdateForm => ({
  type: 'updateForm',
  email,
  password
})