import React from "react";

import { makeStyles } from "@material-ui/core";

import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

import netRating from "helpers/netRating";
import totalRating from "helpers/totalRatings";
import calculatePercentage from "helpers/calcPerc";
import { primaryColor, warningColor } from "assets/jss/material-kit-react";

const useStyles = makeStyles((theme) => ({
  root: {},
  revBox: {
    display: "flex",
    alignItems: "center",
    maxWidth: "850px",
  },
  fullWidth: {
    display: "flex",
    flex: "1",
  },
  minWidth: {
    minWidth: "140px",
    fontSize: "0.85rem",
  },
  netRating: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
  progBase: {
    display: "flex",
    flex: "1",
    height: "8px",
    borderRadius: "20px",
    background: "#ddd",
  },
}));

const Ratings = ({ ratings }) => {
  const classes = useStyles();

  const nettRating = netRating(ratings);
  const totRatings = totalRating(ratings);

  // renderStars
  const renderStars = (rating) => {
    const intPart = parseInt(rating);
    let decPart = rating - intPart;
    decPart = decPart < 0.25 ? 0 : decPart < 0.95 ? 1 : 2;

    const tempJsxArray = [];

    for (let i = 0; i < intPart; i++) {
      tempJsxArray.push(<i key={i} className="fas fa-star"></i>);
    }

    if (tempJsxArray.length === 5) {
      return tempJsxArray;
    }

    switch (decPart) {
      case 0:
        tempJsxArray.push(
          <i key={decPart + "decPart"} className="far fa-star"></i>
        );
        break;

      case 1:
        tempJsxArray.push(
          <i key={decPart + "decPart"} className="fas fa-star-half-alt"></i>
        );
        break;

      case 2:
        tempJsxArray.push(
          <i key={decPart + "decPart"} className="fas fa-star"></i>
        );
        break;

      default:
        tempJsxArray.push(
          <i key={decPart + "decPart"} className="far fa-star"></i>
        );
        break;
    }

    for (let i = tempJsxArray.length; i < 5; i++) {
      tempJsxArray.push(<i key={i + "trailing"} className="far fa-star"></i>);
    }

    return tempJsxArray;
  };

  // renderProgressBar
  const renderProgressBar = (val) => {
    return (
      <div className="rel f1  mar_l-12 mar_r-12">
        <div className={classes.progBase}></div>
        <div
          className="abs_lt round"
          style={{ width: val, height: "8px", background: primaryColor }}
        ></div>
      </div>
    );
  };

  // renderIndividualRatings
  const renderIndividualRatings = () => {
    const percArray = [];
    percArray.push(calculatePercentage(ratings.fiveStar, totRatings));
    percArray.push(calculatePercentage(ratings.fourStar, totRatings));
    percArray.push(calculatePercentage(ratings.threeStar, totRatings));
    percArray.push(calculatePercentage(ratings.twoStar, totRatings));
    percArray.push(calculatePercentage(ratings.oneStar, totRatings));
    return (
      <>
        <div className="fc mar_t-4">
          {renderProgressBar(percArray[0])}
          <div className={classes.minWidth}>
            <span style={{ color: warningColor }}>{renderStars(5)}</span>{" "}
            <span style={{ color: primaryColor }}>{percArray[0]}</span>
          </div>
        </div>
        <div className="fc mar_t-4">
          {renderProgressBar(percArray[1])}
          <div className={classes.minWidth}>
            <span style={{ color: warningColor }}>{renderStars(4)}</span>{" "}
            <span style={{ color: primaryColor }}>{percArray[1]}</span>
          </div>
        </div>
        <div className="fc mar_t-4">
          {renderProgressBar(percArray[2])}
          <div className={classes.minWidth}>
            <span style={{ color: warningColor }}>{renderStars(3)}</span>{" "}
            <span style={{ color: primaryColor }}>{percArray[2]}</span>
          </div>
        </div>
        <div className="fc mar_t-4">
          {renderProgressBar(percArray[3])}
          <div className={classes.minWidth}>
            <span style={{ color: warningColor }}>{renderStars(2)}</span>{" "}
            <span style={{ color: primaryColor }}>{percArray[3]}</span>
          </div>
        </div>
        <div className="fc mar_t-4">
          {renderProgressBar(percArray[4])}
          <div className={classes.minWidth}>
            <span style={{ color: warningColor }}>{renderStars(1)}</span>{" "}
            <span style={{ color: primaryColor }}>{percArray[4]}</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="fcol">
      <div className="fsxl fwb mar_b-16">Ratings {"&"} reviews</div>
      <div className={classes.revBox}>
        <div style={{ color: warningColor }} className="fccol">
          <div className={classes.netRating}>{nettRating}</div>
          <div className="fc">{renderStars(nettRating)}</div>
          <div className="fc fsm mar_t-8">{totRatings} Ratings</div>
        </div>
        <div className="fcol f1">{renderIndividualRatings()}</div>
      </div>
    </div>
  );
};

export default Ratings;
