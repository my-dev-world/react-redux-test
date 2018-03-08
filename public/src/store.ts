import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import moment from 'moment';

import * as reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

moment.locale('en_US');

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

export const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(mainSaga);
