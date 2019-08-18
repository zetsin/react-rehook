import { Reducer } from "react";
import { Action } from "../../../../index.d";

export interface Test2 {
  random: number,
  now: number
}

export const test2: Reducer<Test2, Action> = (state={
  random: 2,
  now: 0
}, action) => {
  switch(action.type) {
    case "test2/refresh": {
      return {
        ...state,
        random: Math.random(),
        now: Date.now()
      }
    }
    default:
      return state;
  }
}

export default test2
