import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import listaReducers from '../reducers';

export const rootReducer = combineReducers({ listaReducers }, applyMiddleware(thunk));

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
