import React, { FC } from 'react'
import { useSelector } from '../../../src/index';
import { Test1 } from '../store/reducers/test1';
import { Test2 } from '../store/reducers/test2';

export const Test3Component: FC = props => {
  const test1 = useSelector<{test1: Test1}>(contexts => contexts.test1)
  const test2 = useSelector<{test2: Test2}>(contexts => contexts.test2)

  console.log("Test3 Rendering")

  return (
    <div>
      <p>Component: Test1</p>
      <p>Now: {test1.random}</p>
      <p>Date: {test1.now}</p>
      <br />
      <p>Component: Test2</p>
      <p>Now: {test2.random}</p>
      <p>Date: {test2.now}</p>
    </div>
  )
}

export default Test3Component
