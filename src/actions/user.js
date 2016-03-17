import {
  USER_LOGIN,
  USER_INFO,
} from '../constants/ActionTypes'

import { login, fetchUser } from '../apis/user'


// Refer from http://redux.js.org/docs/advanced/AsyncActions.html
// Use the following convention of dealing with async action.
// { type: 'FETCH_POSTS' }
// { type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
// { type: 'FETCH_POSTS', status: 'success', response: { ... } }

export function userLogin(data) {
  const type = USER_LOGIN;

  return (dispatch, getState) => {
    return login(data).then(
      (response) => dispatch({ type, response }),
      (error) => dispatch({ type, error })
    )
  }
}

export function getUserInfo() {
  const type = USER_INFO;

  return (dispatch, getState) => {
    let user = getState().user;
    if (user.username) {
      return dispatch({ type, user })
    }

    return fetchUser().then(
      (response) => dispatch({ type, response }),
      (error) => dispatch({ type, error })
    )
  }
}
