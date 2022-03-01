const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {state: !state, data: action.payload};
    default:
      return state;
  }
};

export default loggedReducer;
