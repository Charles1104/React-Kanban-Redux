import { combineReducers } from 'redux';
import cards from './cards';
import users from './users';

const reducers = combineReducers({
  cards, users
});

export default reducers;