import {
  USER_LOGIN,
  USER_INFO,
} from '../constants/ActionTypes';

import {login} from '../apis/user';


export function userLogin(data) {
  // return {
  //   type: USER_LOGIN,
  //   data
  // };

  return (dispatch, getState) => {
    return login(data).then(
      resp => dispatch(_loadUserInfo(resp)),
      err => dispatch(_error(err))
    );
  };
}


export function _loadUserInfo(resp) {
  return {
    type: USER_INFO,
    resp
  };
}

function _error(err) {
  return {
    type: 'ERROR',
    err
  };
}


// DMEO
// store.dispatch(userLogin({username, password}))