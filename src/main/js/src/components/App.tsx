import userEvent from '@testing-library/user-event';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { loadUsers, loginUser } from '../store/effects';
import { ApplicationState, User } from '../store/types'
import { Login } from './Login';

export const App: React.FC = () => {
  const { users, form, activeUserId } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();

  const handleClick = (event: any) => {
    dispatch(loadUsers())
  }

  return activeUserId === null ? <Login /> : (
    <main className="App">
      {users.map((user: User) => <span key={user.email}>{user.email}</span>)}
      <button onClick={handleClick}>Load Users</button>
    </main>
  );
}
