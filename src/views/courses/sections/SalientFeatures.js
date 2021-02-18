import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// layouts
import InfoArea from "../layouts/InfoArea";
// icons
import { Timeline, Code, Videocam, PeopleAlt } from "@material-ui/icons";

import styles from "assets/jss/material-kit-react/views/landingPageSections/salientFeatures.js";

const useStyles = makeStyles(styles);

export default function SalientFeatures() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer spacing={3}>
        <GridItem xs={12} sm={12} md={6} lg={3} xl={3}>
          <InfoArea
            title="Go at your own pace"
            desc="Enjoy lifetime access to courses on Udemy’s website and app"
            icon={Timeline}
            color="rose"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={3} xl={3}>
          <InfoArea
            title="Embedded with codes and exercises"
            desc="Each course is enriched with all required codes and several exercises"
            icon={Code}
            color="primary"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={3} xl={3}>
          <InfoArea
            title="Find video courses on almost any topic"
            desc="Build your library for your career and personal growth"
            icon={Videocam}
            color="warning"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={3} xl={3}>
          <InfoArea
            title="Learn from industry experts"
            desc="Select from top instructors around the world"
            icon={PeopleAlt}
            color="info"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
