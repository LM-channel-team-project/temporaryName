import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers/user_reducer";
import App from "./App.jsx";

const createStoreMiddleware = applyMiddleware(
  ReduxPromise,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
