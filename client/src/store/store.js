import { createStore as createReduxStore, combineReducers } from "redux";
import { POPUP_ADD, POPUP_REMOVE } from "./types";
// import { createReducer } from "./reducers/reducer";

const reducers = {
  user: (store = {}, { type, payload }) => {
    switch (type) {
      case "CHANGE_NAME":
        return { ...store, ...payload };
      default:
        return store;
    }
  },
  info: (store = {}, { type, payload }) => {
    switch (type) {
      case POPUP_ADD:
        return { ...store, popups: [...store.popups, payload] };
      case POPUP_REMOVE:
        return { ...store, popups: store.popups.filter(v => v.id !== payload) };
      default:
        return store;
    }
  },
  error: (store = {}, { type, payload }) => {
    switch (type) {
      default:
        return store;
    }
  }
};

const localState = {
  info: {
    popups: []
  }
};

export const createStore = initialState => {
  return createReduxStore(
    combineReducers(reducers),
    { ...localState, ...initialState },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
