import React from "react";
import { Route, Switch } from "react-router-dom";

import MainPage from "./view/MainPage/MainPage.jsx";
import LoginPage from "./view/LoginPage/LoginPage.jsx";
import RegisterPage from "./view/RegisterPage/RegisterPage.jsx";
import WritePage from "./view/WritePage/WritePage.jsx";
import ArticlePage from "./view/ArticlePage/ArticlePage.jsx";

import "./resetCss.css";

function App() {
  return (
    <div id="wrap">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/write" component={WritePage} />
        <Route exact path="/article/:id" component={ArticlePage} />
      </Switch>
    </div>
  );
}

export default App;
