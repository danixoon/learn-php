import * as React from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { createStore } from "./store";
import Header from "./pages/Header";
import Auth from "./pages/Auth";
import Footer from "./pages/Footer";

import "./scss/default.scss";

export let store = null;

export const renderComponent = (element, node) => {
  ReactDOM.render(<Provider store={store}>{React.createElement(element, {})}</Provider>, node);
};

// Мапа с компонентами, присоединёнными по id
const componentMap = {
  page__header: Header,
  page__auth: Auth,
  page__footer: Footer
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
