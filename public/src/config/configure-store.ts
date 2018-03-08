import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../redux'

export const history = createHistory()

const middleware = [
  thunk,
  routerMiddleware(history),
]

export function configure(initialState = undefined) {

  // Create the redux store and add middleware to it
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware),
    ),
  );

  return store;
}
