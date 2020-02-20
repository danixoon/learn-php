import { createStore as createReduxStore, combineReducers } from "redux";
// import { createReducer } from "./reducers/reducer";

const reducers = {
  user: (store = {}, { type, payload }) => {
    switch (type) {
      case "CHANGE_NAME":
        return { ...store, ...payload };
      default:
        return store;
    }
  }
};

export const createStore = initialState => {
  // let store = createReduxStore(combineReducers(reducers));
  // const mappedReducers = {};
  // for (let key in initialState) mappedReducers[key] = reducers[key](initialState[key]);
  // console.log(mappedReducers);

  return createReduxStore(combineReducers(reducers), initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  // createReduxStore(createReducer(initialState));
};
