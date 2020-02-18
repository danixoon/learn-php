import { createStore as createReduxStore } from "redux";
import { createReducer } from "./reducers/reducer";

export const createStore = initialState =>
  createReduxStore(createReducer(initialState));
