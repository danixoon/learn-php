import uuid from "uuid/v1";
import { POPUP_REMOVE, POPUP_ADD } from "./types";

export const addPopup = (text, timeout = 3000) => {
  return { type: POPUP_ADD, payload: { text, timeout, id: uuid() } };
};

export const removePopup = id => {
  return { type: POPUP_REMOVE, payload: id };
};
