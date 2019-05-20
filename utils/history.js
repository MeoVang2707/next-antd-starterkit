/* eslint-disable import/no-mutable-exports */
import { createBrowserHistory, createMemoryHistory } from 'history';
import root from 'window-or-global';

export const isServer = !(
  typeof root !== 'undefined' &&
  root.document &&
  root.document.createElement
);

const history = isServer
  ? createMemoryHistory({
      initialEntries: ['/'],
    })
  : createBrowserHistory();

export default history;
