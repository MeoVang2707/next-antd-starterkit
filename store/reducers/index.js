import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router/immutable';
import history from '../../utils/history';
import user from './user';
import booking from './booking';
import locales from './locales/index';

// const rootReducer = combineReducers({ user });
export default function createReducer() {
  const rootReducer = combineReducers({
    user,
    booking,
    locales,
  });
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
  // return combineReducers({
  //   user,
  // });
}

// export default createReducer = () => {};
