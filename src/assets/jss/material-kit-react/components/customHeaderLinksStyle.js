import { defaultFont, primaryColor } from "assets/jss/material-kit-react.js";

import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const headerLinksStyle = (theme) => ({
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5",
      },
    },
  },
  listItemText: {
    padding: "0 !important",
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px",
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px",
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px",
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px",
    },
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px",
  },
  img: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "1px solid #fff",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "24px",
    },
  },
  imageDropdownButton: {
    padding: "0px",
    borderRadius: "50%",
    marginLeft: "8px",
  },
  // popover
  popover: {
    marginTop: "60px",
    overflow: "scroll",
    padding: "8px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    background: "#fff",
    border: "none",
    borderRadius: "3px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "0.875rem",
  },
  // custom
  padBox: {
    padding: "24px",
    borderRadius: "4px",
  },
  fullWidth: {
    width: "100%",
  },
  mainList: {
    fontWeight: "bold",
  },
  customListItem: {
    padding: "5px",
    borderRadius: "3px",
    color: "inherit",
    textDecoration: "none",
    margin: "0",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: primaryColor,
      color: "#fff",
    },
  },
  subListContainer: {
    display: "flex",
  },
  separator: {
    marginLeft: "16px",
    width: "2px",
    backgroundColor: "#ccc",
  },
  subList: {
    marginLeft: "8px",
    fontWeight: "normal",
    lineHeight: "0.6rem",
  },
  image: {
    height: 24,
    width: 24,
    maxWidth: 24,
    borderRadius: "3px",
    objectFit: "cover",
    objectPosition: "center",
  },
  marginLeft: {
    marginLeft: "8px",
  },
});

export default headerLinksStyle;
