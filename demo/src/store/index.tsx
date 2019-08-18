import { Provider, createStore, applyMiddleware } from '../../../src/index';
import reducers from "./reducers"

export default createStore(reducers, undefined, applyMiddleware(
  ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  }
))
