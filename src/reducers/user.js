import {
  USER_LOGIN,
  USER_INFO
} from '../constants/ActionTypes';

const user = (state = {}, action) => {

  let username;
  switch (action.type) {
    case USER_LOGIN:
    case USER_INFO:
      let {username} = action.resp;
      state = {username};
      return state;
  }

  return state;
};

export default user;