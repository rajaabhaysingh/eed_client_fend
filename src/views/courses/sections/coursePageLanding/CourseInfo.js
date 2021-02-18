import React from "react";
import moment from "moment";
import { useHistory, useRouteMatch } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Button as MuiBtn, Typography } from "@material-ui/core";
import { Check, InfoRounded } from "@material-ui/icons";

// UI components
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Info from "components/Typography/Info.js";
import Badge from "components/Badge/Badge";
import Button from "components/CustomButtons/Button.js";

// helpers
import netRating from "helpers/netRating";
import totalRating from "helpers/totalRatings";

// asset imports
import productPlaceholder from "assets/img/bg.jpg";
import { secondaryLight } from "assets/jss/material-kit-react";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "0",
    padding: "0px 16px",
    marginBottom: "60px",
  },
  desc: {
    maxHeight: "80px",
    overflow: "scroll",
    marginTop: "4px",
  },
  whiteBtn: {
    color: "#ddd",
    border: "1px solid #ddd",
    "&:hover": {
      backgroundColor: "#ddd",
      color: "#444",
    },
  },
  shareBtn: {
    marginTop: "16px",
    width: "120px",
  },
  marLeft: {
    marginLeft: "16px",
  },
  bottom: {
    alignItems: "baseline",
  },
  marTop: {
    marginTop: "8px",
  },
  marTopSm: {
    marginTop: "4px",
  },
  buyCard: {
    display: "flex",
    flexDirection: "column",
    background: secondaryLight,
    borderRadius: "4px",
    padding: "8px",
    boxSizing: "border-box",
  },
  imageContainer: {
    paddingTop: "50%",
    width: "100%",
    position: "relative",
  },
  courseImage: {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "2px",
    position: "absolute",
    top: "0px",
    left: "0px",
  },
  buyBtn: {
    transform: "scaleX(1.1)",
  },
}));

// {course.getCourseBySlugData.desc}

const CourseInfo = ({ course }) => {
  course = course.getCourseBySlugData;
  const classes = useStyles();
  const history = useHistory();
  const { url } = useRouteMatch();

  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // handleAddToCart
  const handleAddToCart = () => {
    const cartItems = [];
    cartItems.push({
      product: course._id,
    });

    dispatch(addToCart(cartItems));
  };

  // renderCourseInfo
  const renderCourseInfo = () => {
    return (
      <div className="fcol">
        <div className="fc">
          <Info>Courses</Info>
          <i className="fas fa-chevron-right mar_r-8 mar_l-8"></i>
          <Info>{course.category.categoryName}</Info>
        </div>
        <div className="fsxl fwb mar_t-16">{course.name}</div>
        <Typography className={classes.desc} variant="body2">
          {course.desc}
        </Typography>
        <div className="fc mar_t-16">
          <Badge color="primary">
            {netRating(course.ratings)} <i className="fas fa-star"></i>
          </Badge>
          <Typography className={classes.marLeft} variant="body2">
            ({totalRating(course.ratings)} reviews)
          </Typography>
          <Typography className={classes.marLeft} variant="body2">
            <strong>{course.noOfEnrollments} Enrollments</strong>
          </Typography>
        </div>
        <div className="fc fss mar_t-8">
          <Typography className="fc" variant="body2">
            <i className="fas fa-clock mar_r-8"></i>
            Last updated:{" "}
            {course.lastUpdated
              ? course.lastUpdated
              : moment(course.createdAt).format("DD MMM YYYY, hh:mma")}
          </Typography>
          <Typography className="fc" variant="body2">
            <i className="fas fa-globe mar_r-8 mar_l-16"></i>
            Language: {course.language ? course.language : "Not Available"}
          </Typography>
        </div>
        <MuiBtn
          variant="outlined"
          className={classNames(classes.shareBtn, classes.whiteBtn)}
        >
          <i className="fas fa-share mar_r-8"></i> SHARE
        </MuiBtn>
      </div>
    );
  };

  // renderBuyButtons
  const renderBuyButtons = () => {
    if (auth.authenticated) {
      return (
        <>
          <Button
            className={classNames(classes.marTop, classes.buyBtn)}
            size="lg"
            color="primary"
            variant="contained"
          >
            ENROLL NOW
          </Button>
          {cart.addToCartSuccessful ? (
            <Button
              className={classes.marTopSm}
              size="sm"
              color="success"
              variant="outlined"
              startIcon={<Check />}
            >
              ADDED TO CART
            </Button>
          ) : cart.addToCartError ? (
            <Button
              className={classes.marTopSm}
              size="sm"
              color="danger"
              variant="outlined"
              startIcon={<InfoRounded />}
            >
              {cart.addToCartError}
            </Button>
          ) : (
            <MuiBtn
              className={classNames(classes.whiteBtn, classes.marTopSm)}
              size="small"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </MuiBtn>
          )}
        </>
      );
    } else {
      return (
        <Button
          className={classNames(classes.marTop, classes.buyBtn)}
          size="lg"
          color="primary"
          variant="contained"
          onClick={() => {
            history.push(`/login?target=${url}`);
          }}
        >
          LOGIN TO ENROLL
        </Button>
      );
    }
  };

  // renderBuyColumn
  const renderBuyColumn = () => {
    return (
      <div className={classes.buyCard}>
        <div className={classes.imageContainer}>
          <img
            className={classes.courseImage}
            src={
              course.thumbnail
                ? process.env.REACT_APP_MEDIA_URL_BASE + course.thumbnail
                : productPlaceholder
            }
            alt=""
          />
        </div>
        {renderBuyButtons()}
      </div>
    );
  };

  return (
    <GridContainer className={classes.root} spacing={6}>
      <GridItem item xs={12} sm={12} md={8} lg={7} xl={7}>
        {renderCourseInfo()}
      </GridItem>
      <GridItem
        className={classes.bottom}
        item
        xs={12}
        sm={12}
        md={4}
        lg={3}
        xl={3}
      >
        {renderBuyColumn()}
      </GridItem>
    </GridContainer>
  );
};

export default CourseInfo;
