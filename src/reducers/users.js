import {LOGIN, LOGOUT} from '../actions';

const initialState = {
  username: localStorage.username,
  loggedIn: localStorage.logged,
  role: localStorage.role
};

const users = (state = initialState, action) => {

  switch(action.type){
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

    default:
    return state;
  }
};

export default users;