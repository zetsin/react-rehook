import { Reducer } from "react";
import { Action } from "../../../../index.d";

export interface Test1 {
  random: number,
  now: number
}

export const test1: Reducer<Test1, Action> = (state={
  random: 1,
  now: 0
}, action) => {
  switch(action.type) {
    case "test1/refresh": {
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

export default test1
