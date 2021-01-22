import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/home.js";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/HomeParallax.js";
import SectionCarousel from "components/Carousel/Carousel";

// Sections for this page
import Infographics from "./sections/Infographics";
import InfographicsAlt from "./sections/InfographicsAlt";
import Products from "./sections/Products";
import Showbiz from "./sections/Showbiz";
import Testimonials from "./sections/Testimonials";

// asset imports
import landingBg1 from "assets/img/sign.jpg";
import landingBg2 from "assets/img/landing-bg.jpg";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getAllCourse } from "redux/actions";

const useStyles = makeStyles(styles);

const Home = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getAllCourse());
  }, []);

  const dashboardRoutes = [];

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="eEd education"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 32,
          color: "primary",
        }}
        {...rest}
      />
      <SectionCarousel noDots>
        <Parallax filter image={landingBg1}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that{"'"}s why we added this text here. Add here
                  all the information that can make you or your product create
                  the first impression.
                </h4>
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Parallax filter image={landingBg2}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that{"'"}s why we added this text here. Add here
                  all the information that can make you or your product create
                  the first impression.
                </h4>
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Watch video2
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </SectionCarousel>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Showbiz />
        <Infographics />
        <Products course={course} />
        <InfographicsAlt />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
