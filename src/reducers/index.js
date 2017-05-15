import {
  LOAD_CARDS,
  ADD_CARD,
  LOGIN
} from '../actions';

const initialState = {
  cards : [],
  login : {username:"", loggedIn: false}
};

const cards = (state = initialState, action) => {

  switch(action.type){
    case LOAD_CARDS:
      return Object.assign({}, state, {
        cards : action.cards
      });

    case ADD_CARD:
      console.log(action.card);
      return Object.assign({}, state, {
        cards : state.cards.concat(action.card)
      });

    case LOGIN:
      return Object.assign({}, state, {
        login : {loggedIn: true,
                username:localStorage.username}
      });

    default:
      return state;
  }
};

export default cards;