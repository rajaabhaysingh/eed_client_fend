import React, { useEffect } from "react";
import {
  Switch,
  useParams,
  Route,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress";
import { Alert } from "@material-ui/lab";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/CourseParallax.js";

import styles from "assets/jss/material-kit-react/views/courseLanding.js";

// sections
import CourseInfo from "./sections/coursePageLanding/CourseInfo";
import CourseReview from "./sections/coursePageLanding/CourseReview";
import CourseDetails from "./sections/coursePageLanding/CourseDetails";

// redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCourseBySlug } from "redux/actions";

// asset imports

const useStyles = makeStyles(styles);

const CoursePageLanding = ({ ...rest }) => {
  const { courseSlug } = useParams();
  const { path } = useRouteMatch();

  const dashboardRoutes = [];

  const classes = useStyles();

  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseBySlug(courseSlug));
  }, []);

  // renderCourseLanding
  const renderCourseLanding = () => {
    if (course.getCourseBySlugLoading) {
      return (
        <Box className={classNames(classes.padBox, classes.f1)}>
          <CustomLinearProgress className={classes.f1} color="info" />
        </Box>
      );
    } else {
      if (course.getCourseBySlugSuccessful) {
        if (course.getCourseBySlugData) {
          return (
            <>
              <Parallax dark>
                <div className={classes.infobox}>
                  <CourseInfo course={course} />
                </div>
              </Parallax>
              <div className={classNames(classes.main, classes.mainRaised)}>
                <CourseDetails course={course} />
                <CourseReview course={course} />
              </div>
            </>
          );
        } else {
          return (
            <Alert
              className={classNames(classes.padBox, classes.f1)}
              severity="info"
              variant="filled"
            >
              No courses were found.
            </Alert>
          );
        }
      } else {
        return (
          <Alert
            className={classNames(classes.padBox, classes.f1)}
            severity="error"
            variant="filled"
          >
            {course.getCourseBySlugError}
          </Alert>
        );
      }
    }
  };

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

          {renderCourseLanding()}
          <Footer />
        </div>
      </Route>
      <Route path={`${path}/reviews`}>
        <div>reviews here</div>
      </Route>
      <Redirect to="/error" />
    </Switch>
  );
};

export default CoursePageLanding;
