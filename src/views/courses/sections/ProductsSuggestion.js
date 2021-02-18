import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, Box } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
// layouts
import ProductCard from "../layouts/ProductCard";

import styles from "assets/jss/material-kit-react/views/landingPageSections/product.js";

const useStyles = makeStyles(styles);

export default function Products({ course }) {
  const classes = useStyles();

  // renderSimilarCourses
  const renderSimilarCourses = () => {
    if (course.getAllCourseLoading) {
      return (
        <Box className={classNames(classes.padBox, classes.f1)}>
          <CustomLinearProgress className={classes.f1} color="info" />
        </Box>
      );
    } else {
      if (course.getAllCourseSuccessful) {
        if (course.getAllCourseData) {
          return course.getAllCourseData.map((course) => (
            <GridItem xs={12} sm={6} md={6} lg={3} xl={3}>
              <ProductCard course={course} />
            </GridItem>
          ));
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
            {course.getAllCourseError}
          </Alert>
        );
      }
    }
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our other courses</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div className="mar_t-32">
        <GridContainer spacing={3}>{renderSimilarCourses()}</GridContainer>
      </div>
      <div className="mar_t-32">
        <Button color="primary" round>
          <i className="fas fa-th-list mar_r-16"></i> VIEW ALL RELATED
        </Button>
      </div>
    </div>
  );
}
