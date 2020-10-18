import { User, LoadUsersRequest, LoadUsersSuccess, LoadUsersError, LoginUserRequest, LoginUserSuccess, LoginUserError, UpdateForm, SignUpUserSuccess, SignUpUserRequest, SignUpUserError, ToggleSignUp, JournalEntry } from './types';

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

export const updateForm = (email: string, password: string, confirmPassword: string): UpdateForm => ({
  type: 'updateForm',
  email,
  password,
  confirmPassword
});
export const signUpUserRequest = (): SignUpUserRequest => ({
  type: 'signUpUserRequest',
});

export const signUpUserSuccess = (journalEntry: JournalEntry): SignUpUserSuccess => ({
  type: 'signUpUserSuccess',
  journalEntry
});

export const signUpUserError = (): SignUpUserError => ({
  type: 'signUpUserError',
});

export const toggleSignUp = (): ToggleSignUp => ({
  type: 'toggleSignUp',
});