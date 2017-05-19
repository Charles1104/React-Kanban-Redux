import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import cardListReducers from './reducers';
import App from './containers/App';
import Users from './containers/Users';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  cardListReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/users" component={Users}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);