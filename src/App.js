import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from ".//redux/actions/auth.actions";

import Home from "views/homepage/Home";
import Login from "views/auth/login/Login";
import Signup from "views/auth/signup/Signup";
import Error404 from "views/error/Error404";
import Courses from "views/courses/Courses";
import Account from "views/account/Account";

// importing styles
import "./styles/styles.css";
import "./styles/margins.css";
import "./styles/draftjs.css";

// private route HOC
import PrivateRoute from "components/HOC/PrivateRoute";

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
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/courses" component={Courses} />
        <PrivateRoute
          path="/account"
          targetUrl="/account"
          component={Account}
        />
        <Route path="/error" component={Error404} />
        <Redirect to="/error" />
      </Switch>
    </div>
  );
}

export default App;
