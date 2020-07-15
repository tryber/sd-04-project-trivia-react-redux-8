import { createStore, combineReducers } from 'redux';
import listaReducers from '../reducers';

export const rootReducer = combineReducers({ listaReducers });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store