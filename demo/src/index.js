import React from 'react';
import { render } from 'react-dom';
import { Provider } from '../../src/index';
import store from "./store";
import Test1Component from './components/Test1';
import Test2Component from './components/Test2';
import Test3Component from './components/Test3';
export var DemoProvider = function (props) {
    return (React.createElement(Provider, { store: store }, props.children));
};
render((React.createElement(DemoProvider, null,
    React.createElement(Test1Component, null),
    React.createElement("hr", null),
    React.createElement(Test2Component, null),
    React.createElement("hr", null),
    React.createElement(Test3Component, null))), document.querySelector('#demo'));
//# sourceMappingURL=index.js.map