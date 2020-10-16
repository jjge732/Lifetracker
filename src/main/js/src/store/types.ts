import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export interface User {
  email: string;
}

export interface LoadingState {
  users: boolean;
}

export interface ApplicationState {
  loading: LoadingState;
  users: User[];
  form: {
    email: string,
    password: string
  }
}

export interface LoadUsersRequest extends Action {
  type: 'loadUsersRequest';
}

export interface LoadUsersSuccess extends Action {
  type: 'loadUsersSuccess';
  users: User[];
}

export interface LoadUsersError extends Action {
  type: 'loadUsersError';
}

export type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export type ApplicationAction =
  | LoadUsersRequest
  | LoadUsersSuccess
  | LoadUsersError;