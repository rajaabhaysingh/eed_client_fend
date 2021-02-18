import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

// layouts
import ProductCard from "../layouts/ProductCard";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs({ data }) {
  const classes = useStyles();

  return (
    <div id="nav-tabs" className={classes.container}>
      <GridContainer spacing={3}>
        <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={classes.title}>Available courses</div>
          <CustomTabs
            headerColor="info"
            tabs={[
              {
                tabName: "All courses",
                tabIcon: Face,
                tabContent: (
                  <GridContainer className={classes.marginTop} spacing={3}>
                    {data.allCourses?.length > 0 ? (
                      data.allCourses.map((course) => (
                        <GridItem
                          key={course._id}
                          xs={12}
                          sm={6}
                          md={6}
                          lg={3}
                          xl={3}
                        >
                          <ProductCard course={course} />
                        </GridItem>
                      ))
                    ) : (
                      <Alert
                        className={classNames(classes.padBox, classes.f1)}
                        severity="info"
                        variant="outlined"
                      >
                        No courses found under this category.
                      </Alert>
                    )}
                  </GridContainer>
                ),
              },
              {
                tabName: "Free Courses",
                tabIcon: Chat,
                tabContent: (
                  <GridContainer className={classes.marginTop} spacing={3}>
                    {data.freeCourses?.length > 0 ? (
                      data.freeCourses.map((course) => (
                        <GridItem
                          key={course._id}
                          xs={12}
                          sm={6}
                          md={6}
                          lg={3}
                          xl={3}
                        >
                          <ProductCard course={course} />
                        </GridItem>
                      ))
                    ) : (
                      <Alert
                        className={classNames(classes.padBox, classes.f1)}
                        severity="info"
                        variant="outlined"
                      >
                        No courses found under this category.
                      </Alert>
                    )}
                  </GridContainer>
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
