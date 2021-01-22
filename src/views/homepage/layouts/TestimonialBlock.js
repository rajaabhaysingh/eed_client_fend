import React from "react";
import { makeStyles } from "@material-ui/core";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Quote from "components/Typography/Quote.js";
// assets
import userDefault from "assets/img/faces/kendall.jpg";

import imageStyles from "assets/jss/material-kit-react/imagesStyles.js";

const styles = {
  ...imageStyles,
  root: {
    // boxShadow: "0 2px 16px -6px rgba(0, 0, 0, 0.8)",
    marginBottom: "16px",
  },
};

const useStyles = makeStyles(styles);

export default function Cards(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
    "mar_r-16"
  );

  return (
    <Card className={classes.root}>
      <CardHeader color="success">
        "Some famous words in Source Title"
      </CardHeader>
      <CardBody className="f">
        <img
          style={{ height: "80px", width: "80px" }}
          className={imageClasses}
          src={userDefault}
          alt=""
        />
        <Quote
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
          author="Someone famous in Source Title"
        />
      </CardBody>
    </Card>
  );
}
