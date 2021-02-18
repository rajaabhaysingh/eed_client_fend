import getUrlParams from "helpers/getQueryParams";
import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, targetUrl, ...restProps }) => {
  return (
    <Route
      {...restProps}
      component={(props) => {
        const token = localStorage.getItem("token");

        const urlParams = getUrlParams(window.location.search);

        if (token) {
          return <Component {...props} />;
        } else {
          if (urlParams.target) {
            return <Redirect to={`/login?target=${urlParams.target}`} />;
          } else {
            if (targetUrl) {
              return <Redirect to={`/login?target=${targetUrl}`} />;
            } else {
              return <Redirect to={"/login"} />;
            }
          }
        }
      }}
    />
  );
};

export default PrivateRoute;
