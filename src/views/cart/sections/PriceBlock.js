import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { Divider, makeStyles } from "@material-ui/core";

import { primaryColor } from "assets/jss/material-kit-react";

import Muted from "components/Typography/Muted";
import Danger from "components/Typography/Danger";
import Success from "components/Typography/Success";
import Button from "components/CustomButtons/Button.js";
import Modal from "../layouts/Modal";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createOrder } from "redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${primaryColor}`,
    borderRadius: "4px",
    boxShadow: theme.shadows[4],
    display: "flex",
    flexDirection: "column",
    marginTop: "8px",
  },
  header: {
    padding: "16px 8px",
    fontWeight: "bold",
  },
  priceDetails: {
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    background: "#eee",
  },
  alignRight: {
    textAlign: "right",
  },
  checkoutBtn: {
    padding: "16px",
  },
  footer: {
    padding: "16px 8px",
  },
}));

const PriceBlock = ({ cartItems }) => {
  // local state mgmt
  const [modal, setModal] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  const order = useSelector((state) => state.order);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (order.createOrderError) {
      setModal(true);
    }
  }, [order.createOrderError]);

  // getTotalPrice
  const getTotalPrice = () => {
    if (cartItems?.length > 0) {
      let totalPrice = 0.0;
      let discountAmount = 0.0;

      cartItems.forEach((cartItem) => {
        totalPrice =
          parseFloat(totalPrice) + parseFloat(cartItem.product.price);

        if (parseFloat(cartItem.product.offer) > 0.0) {
          const tempDesc = (
            (parseFloat(cartItem.product.price) *
              parseFloat(cartItem.product.offer)) /
            100
          ).toFixed(2);

          // update discountAmount
          discountAmount = parseFloat(discountAmount) + parseFloat(tempDesc);
        }
      });

      return {
        totalPrice: parseFloat(totalPrice).toFixed(2),
        discountAmount: parseFloat(discountAmount).toFixed(2),
      };
    } else {
      return {
        totalPrice: 0.0,
        discountAmount: 0.0,
      };
    }
  };

  const { totalPrice, discountAmount } = getTotalPrice();

  // proceedCheckout
  const proceedCheckout = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert(
        "Payment SDK failed to load. Make sure your internet connection is active."
      );
      return;
    }

    // proceed
    const options = {
      name: "eEd Education",
      description: "Test Transaction",
      handler: (response) => {
        // console.log(response);
        history.push("/account/courses");
      },
      prefill: {
        name: auth.user?.middleName
          ? auth.user?.firstName +
            " " +
            auth.user?.middleName +
            " " +
            auth.user?.lastName
          : auth.user?.firstName + " " + auth.user?.lastName,
        email: auth.user?.email,
      },
    };

    // dispatch create order action
    dispatch(createOrder(options));
  };

  // loadScript
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  // renderCheckoutBtn
  const renderCheckoutBtn = () => {
    return (
      <Button
        style={{ width: "100%" }}
        type="button"
        color="primary"
        onClick={proceedCheckout}
      >
        Checkout
      </Button>
    );
  };

  return cartItems.length > 0 ? (
    <div className="fcol">
      <div className="fwb fsm mar_l-8 mar_b-8">
        <Muted>Payment details</Muted>
      </div>
      <div className={classes.root}>
        <Muted className={classes.header}>
          Cart total ({cartItems?.length ? cartItems.length : "0"} items)
        </Muted>
        <div className={classes.priceDetails}>
          <div className={classes.alignRight}>
            <Muted>
              Sub-total (for {cartItems?.length ? cartItems.length : "0"}{" "}
              items):
            </Muted>
            <Success>Promotional offer:</Success>
          </div>
          <div className={classes.alignRight}>
            <Danger>₹ {totalPrice}</Danger>
            <Success>₹ {discountAmount}</Success>
          </div>
        </div>
        <Divider />
        <div className={classes.priceDetails}>
          <div className={classes.alignRight}>
            <div className="fwb">Total payable (incl. GST*)</div>
          </div>
          <div className={classes.alignRight}>
            <div className="fwb">
              ₹ {parseFloat(totalPrice - discountAmount).toFixed(2)}
            </div>
          </div>
        </div>
        <div className={classes.checkoutBtn}>{renderCheckoutBtn()}</div>

        <Divider />
        <div className={classes.footer}>
          <Success>
            <i className="fas fa-info-circle mar_r-8 mar_l-8"></i> You will save
            ₹ {getTotalPrice().discountAmount} on this order.
          </Success>
        </div>
      </div>
      <Modal
        error
        modal={modal}
        setModal={setModal}
        title="Failed"
        desc={`Your order could not be processed. Error: ${order.createOrderError}`}
      />
    </div>
  ) : null;
};

export default PriceBlock;
