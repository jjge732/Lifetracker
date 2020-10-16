import React, { FormEvent } from 'react';

type Props = {
  email: string,
  password: string,
  loginUser: Function
}

export default function User(props: Props) {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.loginUser()
  }

  const handleChange = () => {  
     
  }

  return (
    <form onSubmit={handleSubmit}>
      <label><b>Email</b></label>
      <input type="text" value={props.email} onChange={handleChange} name="email" required />

      <label><b>Password</b></label>
      <input type="password" value={props.password} onChange={handleChange} name="password" required />

      <button type="submit">Login</button>
    </form>
  );
}