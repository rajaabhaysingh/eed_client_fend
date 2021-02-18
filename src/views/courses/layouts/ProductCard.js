import React from "react";
import { Link } from "react-router-dom";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter";
import Badge from "components/Badge/Badge";
// helpers
import netRating from "helpers/netRating";
// assets
import productPlaceholder from "assets/img/bg.jpg";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle, secondaryColor } from "assets/jss/material-kit-react.js";

const useStyles = makeStyles((theme) => ({
  ...imagesStyles,
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  cardTitle: {
    ...cardTitle,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  root: {
    width: "100%",
    margin: "0",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      boxShadow: "0 6px 16px -8px rgba(0, 0, 0, 0.8)",
    },
    "&:hover > div > img": {
      transform: "scale(1.02)",
      transition: "0.25s all",
    },
  },
  cardBody: {
    padding: "12px 24px",
    [theme.breakpoints.down("sm")]: {
      padding: "8px",
    },
  },
  imageContainer: {
    paddingTop: "50%",
    width: "100%",
    position: "relative",
    borderRadius: "4px 4px 0 0",
    overflow: "hidden",
  },
  courseThumbnail: {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    objectFit: "cover",
    objectPosition: "center",
    position: "absolute",
    top: "0px",
    left: "0px",
  },
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  desc: {
    height: "66px",
    overflow: "scroll",
  },
  category: {
    position: "absolute",
    right: "-2px",
    top: "16px",
    borderRadius: "20px 0 0 20px",
    color: "#fff",
    backgroundColor: secondaryColor,
    padding: "6px 12px",
    fontSize: "0.8rem",
  },
}));

export default function Cards({ course }) {
  const classes = useStyles();

  return (
    <Link
      className={classes.link}
      to={`/courses/${course.category.slug}/${course.slug}`}
      target="_blank"
    >
      <Card className={classes.root}>
        <div className={classes.imageContainer}>
          <img
            className={classes.courseThumbnail}
            src={
              course.thumbnail
                ? process.env.REACT_APP_MEDIA_URL_BASE + course.thumbnail
                : productPlaceholder
            }
            alt="Card-img-cap"
          />
        </div>
        <CardBody className={classes.cardBody}>
          <Tooltip arrow title={course.name}>
            <h3 className={classes.cardTitle}>{course.name}</h3>
          </Tooltip>
          <p className={classes.desc}>{course.desc}</p>
        </CardBody>
        <Divider className={classes.divider} />
        <CardFooter className="fcbw">
          <Badge className="fc fss" color="primary">
            {netRating(course.ratings)} <i className="fas fa-star"></i>
          </Badge>
          <div className="fc fss fwb">
            {course.price > 0 ? `₹${course.price}` : "Free"}
          </div>
        </CardFooter>
        <div className={classes.category}>{course.level}</div>
      </Card>
    </Link>
  );
}
