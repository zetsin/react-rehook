import React, { FC } from 'react'
import { render } from 'react-dom'
import { Provider } from '../../src/index';
import store from "./store"
import Test1Component from './components/Test1';
import Test2Component from './components/Test2';
import Test3Component from './components/Test3';

export const DemoProvider: FC = props => {

  return (
    <Provider store={store}>{props.children}</Provider>
  )
}

render((
  <DemoProvider>
    <Test1Component></Test1Component>
    <hr />
    <Test2Component></Test2Component>
    <hr />
    <Test3Component></Test3Component>
  </DemoProvider>
), document.querySelector('#demo'))
