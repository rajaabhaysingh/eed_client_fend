import { secondaryColor } from "assets/jss/material-kit-react";

const parallaxStyle = {
  parallax: {
    height: "60vh",
    maxHeight: "800px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "-1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  dark: {
    background: secondaryColor,
  },
  small: {
    height: "280px",
  },
};

export default parallaxStyle;
