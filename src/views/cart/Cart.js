import React, { useEffect } from "react";
import { Switch, useRouteMatch, Redirect, useHistory } from "react-router-dom";
import PrivateRoute from "components/HOC/PrivateRoute";

// styles import
import { container, title } from "assets/jss/material-kit-react";
import btnStyles from "assets/jss/material-kit-react/components/buttonStyle.js";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress";

// Sections for this page
import CartItems from "./sections/CartItems";
import PriceBlock from "./sections/PriceBlock";

// redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCartItems } from "redux/actions";

// asset imports
import emptyCart from "assets/img/empty_cart.svg";

const useStyles = makeStyles((theme) => ({
  ...btnStyles,
  root: {},
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  body: {
    padding: "32px",
    [theme.breakpoints.down("sm")]: {
      padding: "12px",
    },
  },
  title: {
    ...title,
    margin: "8px 8px 16px 8px",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "108px 30px 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "80px 10px 0px",
    },
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  padBox: {
    marginTop: "100px",
    padding: "24px",
    borderRadius: "4px",
  },
  fullWidth: {
    width: "100%",
  },
  f1: {
    display: "flex",
    flex: "1",
  },
  cartImg: {
    width: "200px",
  },
}));

const Courses = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  const { path, url } = useRouteMatch();
  const history = useHistory();

  const dashboardRoutes = [];

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  // renderCartLanding
  const renderCartLanding = () => {
    if (cart.getCartLoading) {
      return (
        <Box className={classNames(classes.padBox, classes.f1)}>
          <CustomLinearProgress className={classes.f1} color="info" />
        </Box>
      );
    } else {
      if (cart.getCartSuccessful) {
        if (cart.getCartData?.length > 0) {
          return (
            <GridContainer spacing={3}>
              <GridItem xs={12} sm={12} md={8} lg={8} xl={8}>
                <CartItems cartItems={cart.getCartData} />
              </GridItem>
              <GridItem xs={12} sm={12} md={4} lg={4} xl={4}>
                <PriceBlock cartItems={cart.getCartData} />
              </GridItem>
            </GridContainer>
          );
        } else {
          return (
            <div className="fccol">
              <img className={classes.cartImg} src={emptyCart} alt="" />
              <div className="mar_t-32 mar_b-32">
                <Muted>Oops! Your cart is empty.</Muted>
              </div>
              <Button
                color="primary"
                round
                onClick={() => {
                  history.push("/courses");
                }}
              >
                EXPLORE ALL COURSES
              </Button>
            </div>
          );
        }
      } else {
        if (cart.getCartError) {
          return (
            <Alert
              className={classNames(classes.padBox, classes.f1)}
              severity="error"
              variant="filled"
            >
              {cart.getCartError}
            </Alert>
          );
        } else {
          return (
            <Box className={classNames(classes.padBox, classes.f1)}>
              <CustomLinearProgress className={classes.f1} color="info" />
            </Box>
          );
        }
      }
    }
  };

  return (
    <Switch>
      <PrivateRoute targetUrl={url} exact path={path}>
        <div>
          <Header
            color="primary"
            routes={dashboardRoutes}
            brand="eEd education"
            rightLinks={<HeaderLinks />}
            fixed
            {...rest}
          />
          <div
            className={classNames(
              classes.main,
              classes.mainRaised,
              classes.body
            )}
          >
            <div className={classes.title}>
              Account <i className="fas fa-chevron-right"></i> Cart
            </div>
            {renderCartLanding()}
          </div>
          <Footer />
        </div>
      </PrivateRoute>
      <Redirect to="/error" />
    </Switch>
  );
};

export default Courses;
