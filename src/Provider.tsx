import React, { FC } from "react"
import { Store } from "../index.d";

export interface ProviderProps {
  store: Store;
}

export const Provider: FC<ProviderProps>  = props => {
  const { store } = props

  return Object.entries(store.contexts).reduce<Element>((acc, [key, context]) => {
    const reducer = store.reducers[key]
    const preloadedState = store.preloadedStates[key]
    const [state, dispatch] = React.useReducer(reducer, preloadedState, (arg: any) => reducer(arg, {} as any))
    store.dipaches[key] = action => {
      dispatch(action)
      return action
    }
    
    return (
      <context.Provider value={state}>
        {acc}
      </context.Provider>
    ) as any
  }, props.children as any) as any;
}

Provider.defaultProps = {}

export default Provider
