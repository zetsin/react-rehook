import React, { createContext, useContext } from "react"
import { Action, Store, Dispatches, Contexts, States, Reducers, Enhancer, CreateStore } from "../index.d";

export const stores: Store<any, any>[] = [];

export const createStore = <S extends {} = any, A extends Action = Action>(reducers: Reducers<S, A>, preloadedStates?: States<S>, enhancer?: Enhancer<S, A>): Store<S, A> => {

  if(enhancer) {
    return enhancer(createStore)(reducers, preloadedStates);
  }

  const contexts: Contexts<S> = {} as any;
  const dipaches: Dispatches<S, A> = {} as any;

  (Object.keys(reducers) as (keyof S)[]).map(key => {
    const preloadedState = preloadedStates ? preloadedStates[key]: undefined;
    contexts[key] = createContext<S[keyof S]>(preloadedState as any);
    dipaches[key] = action => action;
  })

  const store: Store<S, A> = {
    dispatch(action) {
      (Object.keys(reducers) as (keyof S)[]).map(key => {
        store.useDispatch(dispatches => dispatches[key])(action)
      })
      return action
    },
    getState() {
      return (Object.keys(reducers) as (keyof S)[]).reduce((acc, key) => {
        return {
          ...acc,
          [key]: store.useSelector(contexts => contexts[key])
        }
      }, {} as S)
    },
    useDispatch(selector) {
      return selector(store.dipaches);
    },
    useSelector(selector) {
      const context = selector(store.contexts);
      return useContext<S[keyof S]>(context)
    },
    contexts,
    preloadedStates: preloadedStates || {} as any,
    reducers,
    dipaches
  }

  stores.push(store);

  return store
}

export default createStore;
