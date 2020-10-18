import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export interface User {
  email: string;
}

export interface JournalEntry {
  journalEntryId: {
    entryDate: string,
    userId: string
  }
  meals: Array<Meal>;
}

export interface Meal {
  name: string;
  foods: Array<Food>;
}

export interface Food {
  name: string;
  carbs: number;
  fats: number;
  protein: number;
}

export interface LoadingState {
  users: boolean;
}

export interface ApplicationState {
  loading: LoadingState;
  users: User[];
  form: {
    email: string,
    password: string,
    confirmPassword: string,
    newUser: boolean
  },
  journalEntry: JournalEntry | null
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
  journalEntry: JournalEntry;
}

export interface LoginUserError extends Action {
  type: 'loginUserError';
}

export interface SignUpUserRequest extends Action {
  type: 'signUpUserRequest';
}

export interface SignUpUserSuccess extends Action {
  type: 'signUpUserSuccess';
  journalEntry: JournalEntry;
}

export interface SignUpUserError extends Action {
  type: 'signUpUserError';
}

export interface UpdateForm extends Action {
  type: 'updateForm';
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ToggleSignUp extends Action {
  type: 'toggleSignUp';
}

export type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export type ApplicationAction =
  | LoadUsersRequest
  | LoadUsersSuccess
  | LoadUsersError
  | LoginUserRequest
  | LoginUserSuccess
  | LoginUserError
  | UpdateForm
  | SignUpUserRequest
  | SignUpUserSuccess
  | SignUpUserError
  | ToggleSignUp;