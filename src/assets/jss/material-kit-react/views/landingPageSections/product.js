import { title } from "assets/jss/material-kit-react.js";

const infographics = (theme) => ({
  section: {
    [theme.breakpoints.down("sm")]: {
      padding: "32px 16px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "70px 70px",
    },
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
  },
  // custom
  padBox: {
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

export default infographics;
