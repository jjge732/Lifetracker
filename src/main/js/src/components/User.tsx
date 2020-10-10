import React from 'react';

type Props = {
    user: {email: string }
}

export default function User( props: Props ) {

    return (
      <div className="user">
        {props.user.email}
      </div>
    );
  }