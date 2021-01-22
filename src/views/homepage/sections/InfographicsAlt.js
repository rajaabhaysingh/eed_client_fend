import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// layouts
import StyleCard from "../layouts/StyleCard";

import styles from "assets/jss/material-kit-react/views/landingPageSections/infographicsAlt.js";

const useStyles = makeStyles(styles);

export default function Infographics() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Career Programs with the Edge</h2>
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
        <GridContainer spacing={3} className="fcc">
          <GridItem xs={12} sm={6} md={6} lg={3} xl={3}>
            <StyleCard headerColor="primary" />
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3} xl={3}>
            <StyleCard headerColor="warning" />
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3} xl={3}>
            <StyleCard headerColor="info" />
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3} xl={3}>
            <StyleCard headerColor="success" />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
