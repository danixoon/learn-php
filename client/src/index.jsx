import * as React from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { createStore } from "./store/store";

import Header from "./templates/page/Header";
import Footer from "./templates/page/Footer";
import Info from "./templates/page/Info";

import Auth from "./templates/view/Auth";
import Main from "./templates/view/Main";

import "./scss/default.scss";

export let store = null;

export const renderComponent = (element, node) => {
  ReactDOM.render(<Provider store={store}>{React.createElement(element, {})}</Provider>, node);
};

// Мапа с компонентами, присоединёнными по id
const componentMap = {
  "page-footer": Footer,
  "page-header": Header,
  "page-info": Info,
  "page-view__auth": Auth,
  "page-view__main": Main
};

// Рендрит React-компоненты под элементы с соответствующими id
document.addEventListener("DOMContentLoaded", async () => {
  // Получает данные об начальном состоянии с сервера

  const head = document.getElementsByTagName("head")[0];
  const initialStore = JSON.parse(head.getAttribute("data-store"));
  head.removeAttribute("data-store");

  store = createStore(initialStore);

  // console.log(store);

  for (let k in componentMap) {
    const el = document.getElementById(k);
    console.log(k, "rendering..");
    if (el) renderComponent(componentMap[k], el);
  }
});
