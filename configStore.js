import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createReducer from 'store/reducers';
import history from 'utils/history';
import rootSaga from 'store/saga';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistReducerCustom = persistReducer(persistConfig, createReducer());

export default function configStore(initialState = {}, option) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware(history), sagaMiddleware];
  const enhancers = applyMiddleware(...middlewares);
  const store = createStore(persistReducerCustom, initialState, enhancers);
  sagaMiddleware.run(rootSaga);

  return store;
}
