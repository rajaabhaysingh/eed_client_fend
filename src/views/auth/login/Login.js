import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Warning from "@material-ui/icons/Warning";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

// recaptcha
import ReCAPTCHA from "react-google-recaptcha";
// redux
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/actions/auth.actions";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

// assets
import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    reCAPTCHA: false,
  });
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [disableLogin, setDisableLogin] = useState(true);

  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();
  const { ...rest } = props;

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.authenticated) {
      auth.error = null;
    }
  }, [auth]);

  // handleChange
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // handleLoginFormSubmit
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formState));
  };

  // captchaFailed
  const captchaFailed = () => {
    setFormState({
      ...formState,
      reCAPTCHA: false,
    });
    setDisableLogin(true);
  };

  // captchaPassed
  const captchaPassed = () => {
    setFormState({
      ...formState,
      reCAPTCHA: true,
    });
    setDisableLogin(false);
  };

  // if user is logged in, he/she will be redirected to dashboard even if he/she tries to login again
  if (auth.authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="eEd education"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={handleLoginFormSubmit}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or enter Email and Password</p>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        name: "email",
                        value: formState.email,
                        onChange: handleChange,
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        name: "password",
                        value: formState.password,
                        onChange: handleChange,
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <div className="w-100 fcc mar_b-32">
                    <ReCAPTCHA
                      sitekey="6LcK8jQaAAAAADOyreNBp9-8suxxvJvRco3m7X6r"
                      onChange={captchaPassed}
                      onExpired={captchaFailed}
                      onErrored={captchaFailed}
                    />
                  </div>
                  {auth.error && (
                    <SnackbarContent
                      className={classes.snackbar}
                      message={
                        <span>
                          <b>FAILED:</b> {auth.error}...
                        </span>
                      }
                      close
                      color="danger"
                      icon={Warning}
                    />
                  )}
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      simple
                      disabled={
                        disableLogin ||
                        auth.loading ||
                        !formState.email ||
                        !formState.password
                      }
                      color="primary"
                      size="lg"
                      type="submit"
                    >
                      LOGIN
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
