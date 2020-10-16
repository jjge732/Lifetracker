import React from 'react';

import { ApplicationState, User } from '../store/types'
// import Login from './components/Login';

type Props = {
  state: ApplicationState
}

export const App: React.FC<any> = props => {

  return (
    <main className="App">
      {props.users.map((user: User) => <span key={user.email}>{user.email}</span>)}
      <button onClick={props.loadUsers}/>
    </main>
  );
}
