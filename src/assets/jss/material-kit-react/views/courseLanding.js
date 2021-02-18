import { container, title } from "assets/jss/material-kit-react.js";

const courseLanding = (theme) => ({
  container: {
    ...container,
    zIndex: "12",
  },
  infobox: {
    zIndex: "12",
    margin: "90px 0 0 0",
    color: "#fff",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    margin: "16px",
    minHeight: "32px",
    textDecoration: "none",
    padding: "16px",
    fontSize: "1.5rem",
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
    margin: "-60px 30px 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "-30px 10px 0px",
    },
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  // custom
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
});

export default courseLanding;
