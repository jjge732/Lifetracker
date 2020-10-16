import { App as Component } from './App';
import { Dispatch } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../store/types'
import { loadUsers } from '../store/effects'

const mapStateToProps = ( state: ApplicationState ) => {
  return {
    users: state.users,
    form: {
      email: state.form.email,
      password: state.form.password
    }
  };
}

const mapDispatchToProps = ( dispatch: Dispatch<any> ) => {
  return {
    loadUsers: () => dispatch(loadUsers()),
    loginUser: () => alert("login")
  }
};

export const App = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Component);