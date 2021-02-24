import React, { FC } from "react";
import { Router, Route, Switch } from "react-router";
import history from "./utils/history";
import MainScene from "../src/components/MainScene/MainScene";

const App: FC = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={"/"} component={MainScene} />
    </Switch>
  </Router>
);

export default App;
