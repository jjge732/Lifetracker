import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { ApplicationState } from '../store/types'
import { loginUser, signUpUser } from '../store/effects';
import { updateForm, toggleSignUp } from '../store/actions';

export const UserForm = () => {
  const { email, password, confirmPassword, newUser } = useSelector((state: ApplicationState) => state.form);
  const dispatch = useDispatch()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(toggleSignUp());
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const testRegex = /[\w\d]+@\w+.\w+[\w\d]+/;
    if (!testRegex.test(email)) {
      alert('Please enter a valid email.');
      return;
    }
    else if (newUser === true) {
      signUp();
    } else {
      login();
    }
  }

  const login = () => {
    alert("Logining")
    dispatch(loginUser(email, password));
  }

  const signUp = () => {
    if (password !== confirmPassword) {
      alert('Passwords must match');
    } else {
      dispatch(signUpUser(email, password))
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name === 'email') {
      dispatch(updateForm(value, password, confirmPassword));
    } else if (name === 'password') {
      dispatch(updateForm(email, value, confirmPassword));
    } else {
      dispatch(updateForm(email, password, value));
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <label><b>Email</b></label>
        <input type="text" value={email} onChange={handleChange} name="email" required />

        <label><b>Password</b></label>
        <input type="password" value={password} onChange={handleChange} name="password" required />

        {
          newUser === true ? (
            <>
              <label><b>Confirm Password</b></label>
              <input type="password" value={confirmPassword} onChange={handleChange} name="confirmPassword" required />
              <button type="submit">SignUp</button>
              <button onClick={handleClick}>Already have an account?</button>
            </>
          ) : (
            <>
              <button type="submit">Login</button>
              <button onClick={handleClick}>New User?</button>
            </>
          )
        }
      </form>
    </>
  );
}