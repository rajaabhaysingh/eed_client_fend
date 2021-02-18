import React from "react";

import getInitials from "helpers/getInitials";

import { Avatar, makeStyles } from "@material-ui/core";
import { primaryColor } from "assets/jss/material-kit-react";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: "16px",
  },
}));

const Review = ({ review }) => {
  const classes = useStyles();

  // renderStars
  const renderStars = (num) => {
    const tempJsxArray = [];

    for (let i = 0; i < num; i++) {
      tempJsxArray.push(<i key={i} className="fas fa-star"></i>);
    }

    for (let i = tempJsxArray.length; i < 5; i++) {
      tempJsxArray.push(<i key={i} className="far fa-star"></i>);
    }

    return tempJsxArray;
  };

  return (
    <div className="f mar_b-64">
      <Avatar
        className={classes.avatar}
        // src={review?.userIcon}
      >
        {getInitials("Some Name")}
      </Avatar>
      <div className="fcol">
        <div className="fc">
          <div className="fwb">Some Name</div>
          <div style={{ color: primaryColor }} className="fc fss mar_l-8">
            {renderStars(4)}
          </div>
        </div>
        <div className="fss fcg">1 day ago</div>
        <div className="mar_t-8 fsm fcgd">
          The content of the course covers such a wide range of topics, it
          really does give a solid overview of how to create a fully functional
          website/app from scratch. I genuinely feel confident that i can create
          something really cool even though theres a lot of things i still need
          to learn: i know how to find the answers and implement them into a
          tangible solution.
        </div>
        <div className="fc fss mar_t-12">
          <div className="fc">
            <i className="far fa-thumbs-up mar_r-4"></i> Helpful
          </div>
          <div className="fc mar_l-16">
            <i className="fas fa-exclamation-circle mar_r-4"></i> Report
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
