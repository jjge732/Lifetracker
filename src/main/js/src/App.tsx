import React from 'react';

import { Props } from './AppConnector';
import User from './components/User';

export default function App( props: Props ) {

  return (
    <div className="App">
      { props.isUpdating ? null : props.users.map((user: any) => <User user={user} />) }
      <button onClick={props.getUsers}/>
    </div>
  );
}
