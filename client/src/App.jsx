import React from "react";
import { Route, Switch } from "react-router-dom";

import MainPage from "./view/MainPage/MainPage.jsx";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
}

export default App;
