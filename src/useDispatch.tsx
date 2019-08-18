import React from "react";
import { Action, Store } from "../index.d";
import { stores } from "./createStore";

export function useDispatch<A extends Action>() {
  if(!stores.length) {
    throw new Error("useDispatch");
  }
  const store: Store<any, A> = stores[stores.length - 1];
  return store.dispatch;
}

export default useDispatch;
