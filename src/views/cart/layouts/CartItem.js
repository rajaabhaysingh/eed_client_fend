import React from "react";

import { Button, makeStyles } from "@material-ui/core";

// assets
import coursePlaceholder from "assets/img/course_placeholder.jpg";

import Badge from "components/Badge/Badge";
import netRating from "helpers/netRating";
import Muted from "components/Typography/Muted";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "8px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  imageContainer: {
    paddingTop: "50%",
    width: "100%",
    position: "relative",
  },
  courseThumbnail: {
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
}));

const CartItem = ({ cartItem }) => {
  const classes = useStyles();

  return (
    <GridContainer spacing={3} className={classes.root}>
      <GridItem xs={12} sm={4} md={4} lg={3} xl={3}>
        <div className={classes.imageContainer}>
          <img
            src={
              cartItem?.product?.thumbnail
                ? process.env.REACT_APP_MEDIA_URL_BASE +
                  cartItem.product.thumbnail
                : coursePlaceholder
            }
            className={classes.courseThumbnail}
            alt=""
          />
        </div>
      </GridItem>
      <GridItem className="rel" xs={12} sm={8} md={8} lg={9} xl={9}>
        <div className="fwb">{cartItem?.product?.name || "Course name"}</div>
        <div className="fc fss mar_t-8">
          <Badge color="primary">
            {netRating(cartItem?.product?.ratings)}{" "}
            <i className="fas fa-star"></i>
          </Badge>
          <div className="mar_l-8">{cartItem?.product?.level || "Level"}</div>
        </div>
        <div className="fc mar_t-16">
          <div className="fsl fwb">₹ {cartItem?.product?.price}</div>
          <div className="mar_l-16 fss">
            <Muted>
              <i className="fas fa-tags"></i> {cartItem?.product?.offer}% off
            </Muted>
          </div>
        </div>
        <div className="fcend abs_br-8">
          <Button color="primary" startIcon={<Delete />}>
            Remove
          </Button>
        </div>
      </GridItem>
    </GridContainer>
  );
};

export default CartItem;
