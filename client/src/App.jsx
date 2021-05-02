import React from "react";
import { Route, Switch } from "react-router-dom";

import MainPage from "./view/MainPage/MainPage.jsx";
import LoginPage from "./view/LoginPage/LoginPage.jsx";
import RegisterPage from "./view/RegisterPage/RegisterPage.jsx";

import "./resetCss.css";

function App() {
  return (
    <div id="wrap">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
