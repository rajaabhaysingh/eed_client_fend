import React, { useEffect } from "react";
import { Switch, useParams, Route, useRouteMatch } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import styles from "assets/jss/material-kit-react/views/courseByCategory.js";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

// sections
import CoursesTab from "./sections/CoursesTab";
import Infographics from "./sections/InfographicsAlt";
import SalientFeatures from "./sections/SalientFeatures";

// redux
import { getCoursesByCategorySlug } from "redux/actions/course.actions";
import { useDispatch, useSelector } from "react-redux";

// routes
import CoursePageLanding from "./CoursePageLanding";
import ProductsSuggestion from "./sections/ProductsSuggestion";

const useStyles = makeStyles(styles);

const CourseByCategory = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  const { categorySlug } = useParams();
  const { path } = useRouteMatch();
  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const dashboardRoutes = [];

  useEffect(() => {
    if (categorySlug) {
      dispatch(getCoursesByCategorySlug(categorySlug));
    }
  }, [categorySlug]);

  // renderCoursesByCategory
  const renderCoursesByCategory = () => {
    if (course.getCoursesByCategorySlugLoading) {
      return (
        <Box className={classNames(classes.padBox, classes.f1)}>
          <CustomLinearProgress className={classes.f1} color="info" />
        </Box>
      );
    } else {
      if (course.getCoursesByCategorySlugSuccessful) {
        if (course.getCoursesByCategorySlugData) {
          return (
            <>
              <SalientFeatures />
              <CoursesTab data={course.getCoursesByCategorySlugData} />
              <Infographics />
              <ProductsSuggestion course={course} />
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
            {course.getCoursesByCategorySlugError}
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
          <div
            className={classNames(
              classes.main,
              classes.mainRaised,
              classes.body
            )}
          >
            <div className={classes.title}>
              Courses
              <i className="fas fa-chevron-right mar_l-8 mar_r-8"></i>
              {course.getCoursesByCategorySlugData?.name
                ? course.getCoursesByCategorySlugData.name
                : "Unknown"}
            </div>
            {renderCoursesByCategory()}
          </div>
          <Footer />
        </div>
      </Route>
      <Route path={`${path}/:courseSlug`}>
        <CoursePageLanding />
      </Route>
    </Switch>
  );
};

export default CourseByCategory;
