import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router/immutable';
import history from '../../utils/history';
import user from './user';

// const rootReducer = combineReducers({ user });
export default function createReducer() {
  const rootReducer = combineReducers({
    user,
  });
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
  // return combineReducers({
  //   user,
  // });
}

// export default createReducer = () => {};
