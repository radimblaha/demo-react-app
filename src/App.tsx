import React, { FC, Suspense } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./utils/history";
import Users from "./components/Users/Users";
import UserDetail from "./components/UserDetail/UserDetail";
import Posts from "./components/Posts/Posts";
import PostDetail from "./components/PostDetail/PostDetail";

const App: FC = () => (
  <Suspense fallback="loading">
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/users" />
        </Route>
        <Route exact path={"/users"} component={Users} />
        <Route exact path={"/users/:id"} component={UserDetail} />
        <Route exact path={"/posts"} component={Posts} />
        <Route exact path={"/posts/:id"} component={PostDetail} />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
