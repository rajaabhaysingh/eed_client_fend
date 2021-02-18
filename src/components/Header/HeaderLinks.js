/*eslint-disable*/
import React, { useState, useEffect } from "react";
// react components for routing our app without refresh
import { Link, useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import {
  ListItem,
  List,
  Box,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

// @material-ui/icons
import { Apps } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import Badge from "components/Badge/Badge";

// assets
import catPlaceholder from "assets/img/notAvailable.svg";
import userPlaceholder from "assets/img/userPlaceholder.svg";

import styles from "assets/jss/material-kit-react/components/customHeaderLinksStyle.js";

// redux stuff
import { getAllCategory, logout } from "redux/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  // local state management
  const [anchorElLeft, setAnchorElLeft] = useState(null);

  const classes = useStyles();
  const history = useHistory();
  const category = useSelector((state) => state.category);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  // handleUserLogout
  const handleUserLogout = () => {
    dispatch(logout());
  };

  // renderNestedCategory
  const renderNestedCategory = (categories) => {
    let tempCatList = [];

    for (let categoryItem of categories) {
      tempCatList.push(
        <ListItem
          onClick={() => {
            setAnchorElLeft(null);
            history.push(`/courses/${categoryItem.slug}`);
          }}
          className={classes.customListItem}
          key={categoryItem._id}
        >
          <img
            alt=""
            className={classes.image}
            src={
              categoryItem.categoryImage
                ? process.env.REACT_APP_MEDIA_URL_BASE +
                  categoryItem.categoryImage
                : catPlaceholder
            }
          />
          <div
            to={`/courses/${categoryItem.slug}`}
            className={classes.customListItem}
          >
            {categoryItem.categoryName}
          </div>
        </ListItem>,
        categoryItem.children.length > 0 ? (
          <div
            key={categoryItem._id.toString() + "sublist"}
            className={classes.subListContainer}
          >
            <div className={classes.separator}></div>
            <List className={classes.subList}>
              {renderNestedCategory(categoryItem.children)}
            </List>
          </div>
        ) : null
      );
    }

    return tempCatList;
  };

  // renderLoginOrProfileBtn
  const renderLoginOrProfileBtn = () => {
    if (auth.token) {
      return (
        <CustomDropdown
          hoverColor="primary"
          // left
          dropdownHeader={
            auth.user?.firstName && auth.user?.lastName
              ? `Hello, ${auth.user.firstName} ${auth.user.lastName}`
              : `Hello user`
          }
          buttonText={
            <>
              {" "}
              <img
                src={
                  auth.user?.profilePicture
                    ? process.env.REACT_APP_MEDIA_URL_BASE +
                      auth.user.profilePicture
                    : userPlaceholder
                }
                className={classes.img}
                alt=""
              />
              <Typography className={classes.accText}>ACCOUNT</Typography>
            </>
          }
          buttonProps={{
            className: classes.imageDropdownButton,
            color: "transparent",
          }}
          dropdownList={[
            <div
              onClick={() => {
                history.push("/account");
              }}
            >
              Account
            </div>,
            <div
              onClick={() => {
                history.push("/account/courses");
              }}
            >
              My courses
            </div>,
            <div
              onClick={() => {
                history.push("/account/cart");
              }}
            >
              Cart
            </div>,
            <div>Settings</div>,
            <div onClick={handleUserLogout}>Logout</div>,
          ]}
        />
      );
    } else {
      return (
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={() => history.push("/login")}
        >
          LOGIN / SIGNUP
        </Button>
      );
    }
  };

  // renderCatList
  const renderCatList = () => {
    if (category.getAllCategoryLoading) {
      return (
        <Box className={classes.padBox}>
          <CircularProgress />
        </Box>
      );
    } else {
      if (category.getAllCategorySuccessful) {
        if (category.getAllCategoryData?.length > 0) {
          return (
            <List dense className={classes.mainList}>
              {renderNestedCategory(category.getAllCategoryData)}
            </List>
          );
        } else {
          return (
            <Alert className={classes.padBox} severity="info" variant="filled">
              No categories were found.
            </Alert>
          );
        }
      } else {
        return (
          <Alert className={classes.padBox} severity="error" variant="filled">
            {category.getAllCategoryError}
          </Alert>
        );
      }
    }
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="ALL PROGRAMS"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/courses" className={classes.dropdownLink}>
              All courses
            </Link>,
            <Link to="/career-guide" className={classes.dropdownLink}>
              Career guide
            </Link>,
            <Link to="/certification" className={classes.dropdownLink}>
              Certification programs
            </Link>,
            <Link to="/scholarships" className={classes.dropdownLink}>
              Scholarships
            </Link>,
            <Link to="/webinars" className={classes.dropdownLink}>
              Webinars
            </Link>,
            <Link to="/on-campus-services" className={classes.dropdownLink}>
              On-campus services
            </Link>,
            { divider: true },
            <Link to="/codelabs" className={classes.dropdownLink}>
              Code labs <Badge color="warning">beta</Badge>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={(event) => setAnchorElLeft(event.currentTarget)}
        >
          COURSES
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {renderLoginOrProfileBtn()}
      </ListItem>
      <Popover
        classes={{
          paper: classes.popover,
        }}
        open={Boolean(anchorElLeft)}
        anchorEl={anchorElLeft}
        onClose={() => setAnchorElLeft(null)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        {renderCatList()}
      </Popover>
    </List>
  );
}
