import React from 'react';
import logo from './logo.svg';

import { Props } from './AppConnector';

export default function App( props: Props ) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        { props.isUpdating ? null : props.users.map((user: any) => <div key={user.email}>{user.email}</div>) }
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={props.getUsers}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
