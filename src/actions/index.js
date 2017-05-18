/*jshint esversion: 6 */

import { getCardsFromDB, getUsersFromDB, addCardtoDB, fetchDel, fetchMove, fetchSignout, fetchSignin, fetchSignup } from '../fetch/fetch.db';

export const LOAD_CARDS = 'LOAD_CARDS';
export const LOAD_USERS = 'LOAD_USERS';
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
      })
      .catch(err => console.log(err));
  };
};

export const loadUsers = () => {
  return dispatch => {
    return getUsersFromDB()
      .then(users => {
        dispatch({
          type: LOAD_USERS,
          users
        });
      })
      .catch(err => console.log(err));
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
      })
      .catch(err => console.log(err));
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
      })
      .catch(err => console.log(err));
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
      })
      .catch(err => console.log(err));
  };
};

export const signout = () => {
  return dispatch => {
    return fetchSignout()
      .then( () => {
        dispatch({
          type: LOGOUT,
        });
      })
      .catch(err => console.log(err));
  };
};

export const signin = body => {
  return dispatch => {
    return fetchSignin(body)
      .then( () => {
        dispatch({
          type: LOGIN,
        });
      })
      .catch(err => console.log(err));
  };
};

export const signup = body => {
  return dispatch => {
    return fetchSignup(body)
      .then( () => {
        fetchSignin(body)
        .then( () => {
          dispatch({
          type: LOGIN,
          });
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };
};