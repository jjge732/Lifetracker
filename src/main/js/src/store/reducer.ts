import produce from 'immer';
import { ApplicationState, ApplicationAction } from './types';

export const initialState: ApplicationState = {
  loading: {
    users: false,
  },
  users: [{
    email: "test@ymail.com",
  }],
  form: {
    email: "",
    password: ""
  },
  journalEntry: null
}

const reducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case "loadUsersRequest":
      return produce(state, draft => {
        draft.loading.users = true;
      });
    case "loadUsersSuccess":
      return produce(state, draft => {
        draft.loading.users = false;
        draft.users = action.users;
      });
    case "loadUsersError":
      return produce(state, draft => {
        draft.loading.users = false;
      });
    case "updateForm":
      return produce(state, draft => {
        draft.form.email = action.email;
        draft.form.password = action.password;
      })
    case "loginUserRequest":
      return produce(state, draft => {
        draft.loading.users = true;
      });
    case "loginUserSuccess":
      return produce(state, draft => {
        draft.loading.users = false;
        draft.journalEntry = action.journalEntry;
      });
    case "loginUserError":
      return produce(state, draft => {
        draft.loading.users = false;
      });
    default:
      return state;
  }
}

export default reducer;