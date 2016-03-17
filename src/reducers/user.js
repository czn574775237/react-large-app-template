import {
  USER_LOGIN,
  USER_INFO
} from '../constants/ActionTypes'

const user = (state = {}, action) => {

  let username
  switch (action.type) {
    case USER_LOGIN:
      if (action.response) {
        state.isAuthed = true
      } else if (action.error) {
        state.error = error
      }
      return state

    case USER_INFO:
      if (!state.isAuthed) {
        return state;
      }
      
      if (action.response) {
        let { username } = action.response
        state.username = username
      } else if (action.error) {
        state.error = action.error
      }
      return state
  }

  return state
}

export default user
