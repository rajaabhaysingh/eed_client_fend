import { title } from "assets/jss/material-kit-react.js";

const infographics = (theme) => ({
  section: {
    [theme.breakpoints.down("sm")]: {
      padding: "32px 16px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "70px 70px",
    },
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#999",
  },
});

export default infographics;
