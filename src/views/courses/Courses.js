import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/home.js";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

// Sections for this page

// asset imports
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CourseByCategory from "./CourseByCategory";

const useStyles = makeStyles(styles);

const Courses = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  const { path } = useRouteMatch();

  const dashboardRoutes = [];

  return (
    <Switch>
      <Route exact path={path}>
        <div>
          <Header
            color="primary"
            routes={dashboardRoutes}
            brand="eEd education"
            rightLinks={<HeaderLinks />}
            fixed
            {...rest}
          />
          <div className={classes.body}>
            <p>kjhk</p>
            <p>kjhk</p>
            <p>kjhk</p>
            <p>kjhk</p>
            <p>kjhk</p>
            <p>kjhk</p>
          </div>
          <Footer />
        </div>
      </Route>
      <Route path={`${path}/:categorySlug`}>
        <CourseByCategory />
      </Route>
    </Switch>
  );
};

export default Courses;
