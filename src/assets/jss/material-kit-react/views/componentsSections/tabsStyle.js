import { title } from "assets/jss/material-kit-react.js";

const tabsStyle = (theme) => ({
  container: {
    padding: "32px",
    [theme.breakpoints.down("sm")]: {
      padding: "8px",
    },
  },
  textCenter: {
    textAlign: "center",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    margin: "16px",
    minHeight: "32px",
    textDecoration: "none",
  },
  padBox: {
    margin: "32px 0",
    padding: "16px",
    borderRadius: "4px",
  },
  f1: {
    display: "flex",
    flex: "1",
  },
});

export default tabsStyle;
