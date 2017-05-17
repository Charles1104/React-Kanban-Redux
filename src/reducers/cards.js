import {ADD_CARD, LOAD_CARDS, DEL_CARD, MOV_CARD} from '../actions';

const initialState = {
  cards : [],
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

    case MOV_CARD:
      return Object.assign({}, state, {
        cards : state.cards.filter(card => card.id !== action.card.id).concat(action.card)
      });

    case DEL_CARD:
      return Object.assign({}, state, {
        cards : state.cards.filter(card => card.id !== action.card.id)
      });

    default:
    return state;
  }
};

export default cards;