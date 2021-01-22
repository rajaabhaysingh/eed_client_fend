import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
  root: {
    width: "100%",
    marginTop: "24px",
    marginBottom: "0",
  },
};

const useStyles = makeStyles(styles);

export default function Cards({ headerColor }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        className="fcc fsxl"
        color={headerColor ? headerColor : "warning"}
      >
        <strong>81273+</strong>
      </CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Special title treatment</h4>
        <p>
          With supporting text below as a natural lead-in to additional content.
        </p>
      </CardBody>
    </Card>
  );
}
