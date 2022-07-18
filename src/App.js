// Provider, connect - react-redux

import React from "react";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
const defaultState = {
  count: 0
};
// setup store
const store = createStore(reducer, defaultState);
// store.dispatch(getProducts());
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
