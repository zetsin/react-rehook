import React from "react";
import { Selector, Contexts } from "../index.d";
import { stores } from "./createStore";

export function useSelector<S extends {} = any>(selector: Selector<Contexts<S>>): S[keyof S] {
  if(!stores.length) {
    throw new Error("useSelector");
  }
  const store = stores[stores.length - 1];
  return store.useSelector(selector);
}

export default useSelector
