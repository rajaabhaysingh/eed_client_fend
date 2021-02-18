import React from "react";
import { Switch, useRouteMatch } from "react-router-dom";
import PrivateRoute from "components/HOC/PrivateRoute";
import classNames from "classnames";

// styles import
import { container, title } from "assets/jss/material-kit-react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import Cart from "views/cart/Cart";

// asset imports

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  body: {
    padding: "12px",
  },
  title: {
    ...title,
    margin: "8px 8px 16px 8px",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "108px 30px 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "80px 10px 0px",
    },
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
}));

const Account = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  const { path, url } = useRouteMatch();

  const dashboardRoutes = [];

  return (
    <Switch>
      <PrivateRoute exact path={path} targetUrl={url}>
        <div>
          <Header
            color="primary"
            routes={dashboardRoutes}
            brand="eEd education"
            rightLinks={<HeaderLinks />}
            fixed
            {...rest}
          />
          <div
            className={classNames(
              classes.main,
              classes.mainRaised,
              classes.body
            )}
          >
            <GridContainer spacing={3}>
              <GridItem xs={12} sm={12} md={8} lg={8} xl={8}>
                Profile info, My courses, My orders, My transactions
              </GridItem>
            </GridContainer>
          </div>
          <Footer />
        </div>
      </PrivateRoute>
      <PrivateRoute path={`${path}/cart`} targetUrl={`${url}/cart`}>
        <Cart />
      </PrivateRoute>
    </Switch>
  );
};

export default Account;
