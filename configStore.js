import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';

import createReducer from 'store/reducers';
import history from 'utils/history';
import rootSaga from 'store/saga';

export default function configStore(initialState = {}, option) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware(history), sagaMiddleware];
  const enhancers = applyMiddleware(...middlewares);
  const store = createStore(createReducer(), initialState, enhancers);
  sagaMiddleware.run(rootSaga);

  return store;
}
