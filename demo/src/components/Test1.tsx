import React, { FC } from 'react'
import { useDispatch, useSelector } from '../../../src/index';
import { Test1 } from '../store/reducers/test1';

export const Test1Component: FC = props => {
  const test1 = useSelector<{test1: Test1}>(contexts => contexts.test1)
  const dispatch = useDispatch()

  console.log("Test1 Rendering")

  return (
    <div>
      <p>Component: Test1</p>
      <p>Now: {test1.random}</p>
      <p>Date: {test1.now}</p>
      <button onClick={() => {
        dispatch({ type: "test1/refresh" })
      }}>Refresh</button>
      <p>Update <b>test1</b> state only</p>
    </div>
  )
}

export default Test1Component
