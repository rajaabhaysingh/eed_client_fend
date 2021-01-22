import React from "react";
import {
  Switch,
  useParams,
  Route,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/courseByCategory.js";

// sections

// redux

const useStyles = makeStyles(styles);

const CoursePageLanding = (props) => {
  const { courseId } = useParams();
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        {courseId}
      </Route>
      <Route path={`${path}/reviews`}>
        <div>reviews here</div>
      </Route>
      <Redirect to="/error" />
    </Switch>
  );
};

export default CoursePageLanding;
