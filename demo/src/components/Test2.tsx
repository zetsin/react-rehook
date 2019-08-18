import React, { FC } from 'react'
import { useDispatch, useSelector } from '../../../src/index';
import { Test2 } from '../store/reducers/test2';

export const Test2Component: FC = props => {
  const test2 = useSelector<{test2: Test2}>(contexts => contexts.test2)
  const dispatch = useDispatch()

  console.log("Test2 Rendering")

  return (
    <div>
      <p>Component: Test2</p>
      <p>Now: {test2.random}</p>
      <p>Date: {test2.now}</p>
      <button onClick={() => {
        dispatch({ type: "test2/refresh" })
      }}>Refresh</button>
      <p>Update <b>test2</b> state only</p>
    </div>
  )
}

export default Test2Component
