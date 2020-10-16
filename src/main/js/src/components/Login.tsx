import React from 'react';

type Props = {
  user: {email: string }
}

export default function User( props: Props ) {

    return (
      <form onSubmit={props.handleSubmit}>
        <label><b>Email</b></label>
        <input type="text" value={this.state.value} onChange={this.handleChange} name="email" required/>

        <label><b>Password</b></label>
        <input type="password" value={this.state.value} onChange={this.handleChange} name="password" required/>

        <button type="submit">Login</button>
      </form>
    );
  }