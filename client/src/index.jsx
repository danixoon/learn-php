import * as _React from "react";
import * as _ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store as _store } from "./store";
import Button from "./components/Button";

export const store = _store;
export const ReactDOM = _ReactDOM;
export const React = _React;
export const components = {
  Button
};

export const renderComponent = (element, node) => {
  return ReactDOM.render(<Provider store={store}>{React.createElement(element, {})}</Provider>, node);
};
