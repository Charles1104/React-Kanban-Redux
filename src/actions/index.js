import { getCardsFromDB, addCardtoDB, fetchDel, fetchMove, fetchSignout } from '../fetch/fetch.db';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const DEL_CARD = 'DEL_CARD';
export const MOV_CARD = 'MOV_CARD';

export const loadCards = () => {
  return dispatch => {
    return getCardsFromDB()
      .then(cards => {
        dispatch({
          type: LOAD_CARDS,
          cards
        });
      });
  };
};


export const addCard = card => {
  return dispatch => {
    return addCardtoDB(card)
      .then(card => {
        dispatch({
          type: ADD_CARD,
          card
        });
      });
  };
};

export const remove = card => {
  return dispatch => {
    return fetchDel(card)
      .then( () => {
        dispatch({
          type: DEL_CARD,
          card
        });
      });
  };
};

export const move = card => {
  return dispatch => {
    return fetchMove(card)
      .then(card => {
        dispatch({
          type: MOV_CARD,
          card
        });
      });
  };
};

export const signout = () => {
  return dispatch => {
    return fetchSignout()
      .then(card => {
        dispatch({
          type: LOGOUT,
        });
      });
  };
};

export const signin = () => ({ type: LOGIN });
