import React, { useState } from "react";

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
  Avatar,
} from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";

import { NewReleases, People } from "@material-ui/icons";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InfoArea from "components/InfoArea/InfoArea";
import { primaryColor, warningColor } from "assets/jss/material-kit-react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "32px",
    [theme.breakpoints.down("sm")]: {
      padding: "32px 8px",
    },
  },
  listBorder: {
    borderRadius: "4px",
    marginTop: "16px",
    padding: "0",
    border: `1px solid ${theme.palette.divider}`,
  },
  listTopic: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    borderRadius: "4px",
    color: "#444",
    "&:hover": {
      background: "#eee",
    },
  },
  marLeft: {
    marginLeft: "8px",
  },
  listItem: {
    padding: "0",
    margin: "0",
  },
  collapse: {
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: "24px",
  },
  subTopic: {
    padding: "4px",
    color: "#666",
  },
  prereq: {
    padding: "4px",
    margin: "0",
    color: "#444",
  },
  instCont: {
    display: "flex",
    flexWrap: "wrap",
  },
  pad: {
    padding: "4px",
  },
  instructor: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    padding: "8px",
  },
  avatar: {
    backgroundColor: primaryColor,
    height: 48,
    width: 48,
    marginRight: "8px",
  },
}));

const CourseDetails = ({ course }) => {
  course = course.getCourseBySlugData;
  const classes = useStyles();

  const [current, setCurrent] = useState(0);

  // handleClick
  const handleClick = (e, i) => {
    setCurrent(i);
  };

  // renderOutline
  const renderOutline = () => {
    if (course.outline?.length > 0) {
      return (
        <GridItem item xs={12} sm={12} md={12} lg={8} xl={8}>
          <div className="fsxl fwb">Course content</div>
          <Typography color="textPrimary" variant="body2">
            Basic outline and structure of this course. It shows the major
            topics and sub-topics covered under this course.
          </Typography>
          <List className={classes.listBorder}>
            {course.outline.map((outline, i) => (
              <ListItem
                className={classes.listItem}
                divider={i < course.outline.length - 1}
                key={outline._id}
                onClick={(e) => handleClick(e, i)}
              >
                <div className="fcol w-100">
                  <div className={classes.listTopic}>
                    <div className="fc">
                      {i === current ? (
                        <i className="fas fa-chevron-up mar_r-16"></i>
                      ) : (
                        <i className="fas fa-chevron-down mar_r-16"></i>
                      )}
                      <strong>{outline.mainTopic}</strong>
                    </div>
                    <Typography className={classes.marLeft} variant="body2">
                      {outline.subTopics?.length} topics
                    </Typography>
                  </div>
                  <Collapse
                    className={classes.collapse}
                    in={current === i}
                    unmountOnExit
                  >
                    {outline.subTopics.map((subTopic) => (
                      <Typography
                        className={classes.subTopic}
                        variant="body2"
                        key={subTopic._id}
                      >
                        <i className="fas fa-play-circle mar_r-8"></i>{" "}
                        {subTopic.subTopic}
                      </Typography>
                    ))}
                  </Collapse>
                </div>
              </ListItem>
            ))}
          </List>
        </GridItem>
      );
    } else {
      return null;
    }
  };

  // renderFeatures
  const renderFeatures = () => {
    if (course.features?.length > 0) {
      return (
        <GridItem item xs={12} sm={12} md={12} lg={4} xl={4}>
          <div className="fsxl fwb">Course features</div>
          <Typography color="textPrimary" variant="body2">
            Salient features of the course.
          </Typography>
          <List>
            {course.features.map((feature, i) => (
              <ListItem key={feature._id} className={classes.listItem}>
                <div className="fsm mar_t-8">
                  <i
                    style={{ color: warningColor }}
                    className="fas fa-certificate mar_r-16"
                  ></i>
                  {feature.feature}
                </div>
              </ListItem>
            ))}
          </List>
        </GridItem>
      );
    } else {
      return null;
    }
  };

  // renderPrerequisites
  const renderPrerequisites = () => {
    if (course.prerequisites?.length > 0) {
      return (
        <GridItem item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="fsxl fwb">Prerequisites</div>
          <Typography color="textPrimary" variant="body2">
            Students are expected (not mendatory) to be versed with following
            knowledge.
          </Typography>
          <List>
            {course.prerequisites.map((prerequisite, i) => (
              <ListItem key={i} className={classes.prereq}>
                <Typography variant="body2">
                  <i
                    style={{ color: primaryColor }}
                    className="fas fa-crosshairs mar_r-16"
                  ></i>
                  {prerequisite}
                </Typography>
              </ListItem>
            ))}
          </List>
        </GridItem>
      );
    } else {
      return null;
    }
  };

  // renderInstructors
  const renderInstructors = () => {
    if (course.instructors?.length > 0) {
      return (
        <GridItem item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="fsxl fwb mar_b-16">Instructors</div>
          <div className={classes.instCont}>
            {course.instructors.map((instructor, i) => (
              <GridItem
                key={i}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                className={classes.pad}
              >
                <div className={classes.instructor}>
                  <Avatar className={classes.avatar}>
                    <People />
                  </Avatar>
                  <ListItemText
                    primary={instructor.name}
                    secondary={
                      instructor.designation
                        ? instructor.designation
                        : "Instructor"
                    }
                  />
                </div>
              </GridItem>
            ))}
          </div>
        </GridItem>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={classes.root}>
      <GridContainer spacing={6}>
        {renderOutline()}
        {renderFeatures()}
        {renderPrerequisites()}
        {renderInstructors()}
      </GridContainer>
    </div>
  );
};

export default CourseDetails;
