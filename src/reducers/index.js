import {
  LOAD_CARDS,
  ADD_CARD
} from '../actions';

const initialState = {
  cards : []
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


    default:
      return state;
  }
};

export default cards;