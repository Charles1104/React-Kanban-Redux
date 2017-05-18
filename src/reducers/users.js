import {LOAD_USERS, LOGIN, LOGOUT, DEL_USER} from '../actions';

const initialState = {
  users: [],
  username: localStorage.username,
  loggedIn: localStorage.logged,
  role: localStorage.role
};

const users = (state = initialState, action) => {

  switch(action.type){
    case LOAD_USERS:
      return Object.assign({}, state, {
        users : action.users
      });

    case LOGOUT:
      return Object.assign({}, state, {
        loggedIn: false,
        username:""
      });

    case LOGIN:
      return Object.assign({}, state, {
        loggedIn: true,
        username: localStorage.username,
        role: localStorage.role
      });

    case DEL_USER:
      return Object.assign({}, state, {
        users : state.users.filter(user => user.username !== action.user.username)
      });

    default:
    return state;
  }
};

export default users;