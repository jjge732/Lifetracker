import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { ApplicationState, User } from '../store/types'
import { loginUser } from '../store/effects';
import { updateForm } from '../store/actions';

export const Login = () => {
  const { email, password } = useSelector((state: ApplicationState) => state.form);
  const dispatch = useDispatch()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginUser(email, password))
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name === 'email') {
      dispatch(updateForm(value, password))
    } else {
      dispatch(updateForm(email, value))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label><b>Email</b></label>
      <input type="text" value={email} onChange={handleChange} name="email" required />

      <label><b>Password</b></label>
      <input type="password" value={password} onChange={handleChange} name="password" required />

      <button type="submit">Login</button>
    </form>
  );
}