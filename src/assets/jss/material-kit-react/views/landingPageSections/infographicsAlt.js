import { title, secondaryLight } from "assets/jss/material-kit-react.js";

const infographics = (theme) => ({
  section: {
    [theme.breakpoints.down("sm")]: {
      padding: "32px 16px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "70px 24px",
    },
    textAlign: "center",
    backgroundColor: secondaryLight,
  },
  title: {
    ...title,
    color: "#fff",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
  },
});

export default infographics;
