import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SectionCarousel from "components/Carousel/Carousel";
// layouts
import TestimonialBlock from "../layouts/TestimonialBlock";
// assets

import styles from "assets/jss/material-kit-react/views/landingPageSections/testimonials.js";

const useStyles = makeStyles(styles);

export default function Infographics() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>TESTIMONIALS</h2>
        </GridItem>
      </GridContainer>
      <div className="mar_t-32">
        <GridContainer spacing={3} justify="center">
          <GridItem xs={12} sm={12} md={12} lg={10} xl={10}>
            <SectionCarousel>
              <TestimonialBlock />
              <TestimonialBlock />
              <TestimonialBlock />
            </SectionCarousel>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
