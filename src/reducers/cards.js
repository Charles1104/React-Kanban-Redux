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
        cards : state.cards.filter(card => card.id !== action.card.id)
                  .concat(action.card)
                  .sort(function(a, b) {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                  })
      });

    case DEL_CARD:
    console.log(action.card);
      return Object.assign({}, state, {
        cards : state.cards.filter(card => card.id !== action.card.id)
      });

    default:
    return state;
  }
};

export default cards;