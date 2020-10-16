import React from 'react';

import { ApplicationState, User } from '../store/types'
import Login from './Login';

type Props = {
  users: Array<User>,
  form: {
    email: string,
    password: string,
  },
  loginUser: Function,
  loadUsers: Function
}

export const App: React.FC<Props> = props => {
  const handleClick = (event: any) => {
    props.loadUsers()
  }
  return true ? <Login email={props.form.email} password={props.form.password} loginUser={props.loginUser}/> : (
    <main className="App">
      {props.users.map((user: User) => <span key={user.email}>{user.email}</span>)}
      <button onClick={handleClick}>Load Users</button>
    </main>
  );
}
