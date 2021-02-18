import React from "react";

import { makeStyles } from "@material-ui/core";

import Ratings from "../../layouts/Ratings";
import Review from "../../layouts/Review";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "32px",
    [theme.breakpoints.down("sm")]: {
      padding: "32px 8px",
    },
  },
}));

const CourseReview = ({ course }) => {
  course = course.getCourseBySlugData;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridContainer spacing={6}>
        <GridItem item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Ratings ratings={course.ratings} />
        </GridItem>
        <GridItem item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Review />
          <Review />
          <Review />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default CourseReview;
