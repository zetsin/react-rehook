import { Reducer, Context } from "react";

export interface Action<T = string> {
  type: T;
}

export interface AnyAction extends Action {
  [key: string]: any;
}

export interface Dispatch<A = Action> {
  <T extends A>(action: T): T;
}

export interface Selector<C> {
  (contexts: C): C[keyof C]
}

export type Contexts<S = any> = {
  [K in keyof S]: Context<S[K]>
}

export type States<S = any> = {
  [K in keyof S]: S[K]
}

export type Reducers<S = any, A = Action> = {
  [K in keyof S]: Reducer<S[K], A>
}

export type Dispatches<S = any, A = Action> = {
  [K in keyof S]: Dispatch<A>
}

export interface GetState<S = any> {
  (): S
}

export interface UseSelector<C = any, S = any> {
  (selector: Selector<C>): S;
}

export interface Store<S = any, A = Action> {
  dispatch: Dispatch<A>;
  getState: GetState<S>;
  useDispatch: UseSelector<Dispatches<S, A>, Dispatch<A>>;
  useSelector: UseSelector<Contexts<S>, S[keyof S]>;
  contexts: Contexts<S>;
  preloadedStates: States<S>;
  reducers: Reducers<S, A>;
  dipaches: Dispatches<S, A>;
}

export interface CreateStore<S extends {} = any, A extends Action = Action> {
  (reducers: Reducers<S, A>, preloadedStates?: States<S>, enhancer?: Enhancer<S, A>): Store<S, A>
}

export interface Enhancer<S extends {} = any, A extends Action = Action> {
  (createStore: CreateStore<S, A>): {
    (reducers: Reducers<S, A>, preloadedStates?: States<S>): Store<S, A>
  }
}

export interface Middleware<S, A> {
  (store: Store<S, A>): {
    (next: Dispatch<A>): {
      (action: any): any
    }
  }
}
