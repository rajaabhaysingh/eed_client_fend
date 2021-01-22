import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/error.js";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Button from "components/CustomButtons/Button.js";

// Sections for this page

// asset imports
import errorCartoon from "assets/img/error-01.png";
import errorBG from "assets/img/landing-bg.jpg";

const useStyles = makeStyles(styles);

const Home = (props) => {
  const { ...rest } = props;
  const classes = useStyles();

  const dashboardRoutes = [];

  return (
    <div className="fcol">
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
      <div
        style={{ backgroundImage: `url(${errorBG})` }}
        className={classes.center}
      >
        <img className={classes.img} src={errorCartoon} alt="" />
        <div className={classes.errCode}>404</div>
        <div className={classes.errMsg}>Page not found :(</div>
        <div className="mar_t-8">Looks like you got lost.</div>
        <Button className={classes.homeBtn} color="primary" round>
          GO BACK HOME
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
