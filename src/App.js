import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from ".//redux/actions/auth.actions";

import Home from "views/homepage/Home";
import Login from "views/auth/login/Login";
import Error404 from "views/error/Error404";
import Courses from "views/courses/Courses";

// importing styles
import "./styles/styles.css";
import "./styles/margins.css";
import "./styles/draftjs.css";

function App() {
  // managing global auth state
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/error">
          <Error404 />
        </Route>
        <Redirect to="/error" />
      </Switch>
    </div>
  );
}

export default App;
