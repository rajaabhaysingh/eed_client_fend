import { container } from "assets/jss/material-kit-react.js";

const signupPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "16vh",
    color: "#FFFFFF",
    paddingBottom: "120px",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  },
  form: {
    margin: "0",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px",
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
  },
  divider: {
    marginTop: "24px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0",
  },
  inputIconsColor: {
    color: "#495057",
  },
  snackbar: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    width: "100%",
    zIndex: "9999",
  },
  // custom
  imageContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  catImgChange: {
    height: "80px",
    width: "80px",
    borderRadius: "100px",
    objectFit: "cover",
    objectPosition: "center",
    border: "2px solid #ddd",
  },
  inpLabel: {
    position: "absolute",
    bottom: "-12px",
    cursor: "pointer",
    background: "#ddd",
    height: "40px",
    width: "40px",
    borderRadius: "4px",
    opacity: "0.75",
    display: "flex",
    fontSize: "1.2rem",
    alignItems: "center",
    "&:hover": {
      background: "#ccc",
    },
  },
};

export default signupPageStyle;
