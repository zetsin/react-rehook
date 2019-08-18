import { Dispatch, Enhancer, Action, Middleware, Store } from "../index.d";
import { compose } from "./index";

export const applyMiddleware = <S extends {} = any, A extends Action = Action>(...middlewares: Middleware<S, A>[]) => {
  const enhancer: Enhancer<S, A> = (createStore) => (reducers, preloadedStates) => {
    const store = createStore(reducers, preloadedStates)
    let dispatch: Dispatch<A> = () => {
      throw new Error(
        'Dispatching while constructing your middleware is not allowed. ' +
          'Other middleware would not be applied to this dispatch.'
      )
    }

    const middlewareAPI: Store<S, A> = {
      getState: store.getState,
      dispatch: (action: A) => dispatch(action)
    } as any
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)

    store.dispatch = dispatch

    return store
  }

  return enhancer
}

export default applyMiddleware
