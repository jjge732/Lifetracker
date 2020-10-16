import { App as Component } from './App';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { ApplicationState } from '../store/types'
import { loadUsers } from '../store/effects'

const mapStateToProps = ( state: ApplicationState ) => {
  return {
    users: state.users
  };
}

const mapDispatchToProps = ( dispatch: any ) => {
  return {
    loadUsers: () => dispatch(loadUsers())
  }
};

export const App = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Component);