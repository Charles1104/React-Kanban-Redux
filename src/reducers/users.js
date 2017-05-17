import {LOGIN, LOGOUT} from '../actions';

const initialState = {
  username: localStorage.username,
  loggedIn: localStorage.logged
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
        username: localStorage.username
      });

    default:
    return state;
  }
};

export default users;