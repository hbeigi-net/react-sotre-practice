export const myThunk = (store) => (next) => (action) => {
  if (typeof action == "function") {
      action(store.dispatch , store.getState);
  } else {
    next();
  }
};
