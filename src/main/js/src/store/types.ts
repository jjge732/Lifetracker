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
  },
  activeUserId: number | null
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

export interface LoginUserRequest extends Action {
  type: 'loginUserRequest';
}

export interface LoginUserSuccess extends Action {
  type: 'loginUserSuccess';
  activeUserId: number;
}

export interface LoginUserError extends Action {
  type: 'loginUserError';
}

export interface UpdateForm extends Action {
  type: 'updateForm';
  email: string;
  password: string;
}

export type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export type ApplicationAction =
  | LoadUsersRequest
  | LoadUsersSuccess
  | LoadUsersError
  | LoginUserRequest
  | LoginUserSuccess
  | LoginUserError
  | UpdateForm;