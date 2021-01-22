import { primaryColor } from "assets/jss/material-kit-react";

const landingPageStyle = (theme) => ({
  center: {
    display: "flex",
    flexDirection: "column",
    height: "90vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundColor: "#b6b6b6",
    color: "#fff",
  },
  img: {
    maxHeight: "200px",
  },
  errCode: {
    fontWeight: "bold",
    fontSize: "8rem",
  },
  errMsg: {
    fontSize: "2rem",
  },
  homeBtn: {
    marginTop: "32px",
    padding: "16px 64px",
    fontWeight: "bold",
  },
});

export default landingPageStyle;
