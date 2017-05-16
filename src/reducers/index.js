import {
  LOAD_CARDS,
  ADD_CARD,
  LOGIN,
  LOGOUT
} from '../actions';

const initialState = {
  cards : [],
  login : {username: localStorage.username, loggedIn: localStorage.logged}
};

const cards = (state = initialState, action) => {

  switch(action.type){
    case LOAD_CARDS:
      return Object.assign({}, state, {
        cards : action.cards
      });

    case ADD_CARD:
      return Object.assign({}, state, {
        cards : state.cards.concat(action.card)
      });

    case LOGIN:
      return Object.assign({}, state, {
        login : {loggedIn: true,
                username:localStorage.username}
      });

    case LOGOUT:
      return Object.assign({}, state, {
        login : {loggedIn: false,
                username:""}
      });

    default:
      return state;
  }
};

export default cards;