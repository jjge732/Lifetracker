import { connect, ConnectedProps } from 'react-redux';

import api from './api';
import App from './App';

type State = {
  isUpdating: boolean,
  users: Array<object>
}

const mapStateToProps = (state: State) => {
    return {
      isUpdating: state.isUpdating,
      users: state.users || []
    };
  };
  
const mapDispatchToProps = (dispatch: any) => {
return {
  getUsers: () => {
    dispatch({ type: 'USERS_REQUESTED' })
    api.getUsers()
      .then((response: any) => {
        dispatch({type: 'USERS_RECEIVED', users: response.data._embedded.users})
      }).catch((error: any) => {
        console.log(error);
        dispatch({type: 'ERROR'});
      })
  },
}
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    isUpdating: boolean
}

export type { Props };

export default connector(App);