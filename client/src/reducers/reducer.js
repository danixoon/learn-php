export const createReducer = initialState => (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, username: action.payload };
    default:
      return state;
  }
};
