export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loadCards = cards => {
  return {
    type: LOAD_CARDS,
    cards
  };
};

export const addCard = card => {

  return {
    type: ADD_CARD,
    card
  };
};

export const signin = () => ({ type: LOGIN });

export const signout = () => ({ type: LOGOUT });