import axiosIntance from "../../helpers/axios";
import { cartConstants } from "./constants";

// addToCart
export const addToCart = (cartItems) => {
  return async (dispatch) => {
    dispatch({
      type: cartConstants.ADD_TO_CART_REQUEST,
    });

    await axiosIntance
      .post("/api/cart/add-course", {
        cartItems: [...cartItems],
      })
      .then((res) => {
        if (res.status === 201) {
          const { data } = res.data;

          dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { data: data },
          });
        } else {
          dispatch({
            type: cartConstants.ADD_TO_CART_FAILURE,
            payload: { error: res.data.error },
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: cartConstants.ADD_TO_CART_FAILURE,
          payload: {
            error:
              typeof err.response?.data?.error !== "object"
                ? err.response?.data?.error
                : err.response?.data?.error?.message ||
                  err.message ||
                  "Some unexpected error ocuured. Try refreshing the page or contact developer if problem persists.",
          },
        });
      });
  };
};

// getCartItems
export const getCartItems = () => {
  return async (dispatch) => {
    dispatch({
      type: cartConstants.GET_CART_REQUEST,
    });

    await axiosIntance
      .get("/api/cart/get")
      .then((res) => {
        if (res.status === 200) {
          const { data } = res.data;

          dispatch({
            type: cartConstants.GET_CART_SUCCESS,
            payload: { data: data },
          });
        } else {
          dispatch({
            type: cartConstants.GET_CART_FAILURE,
            payload: { error: res.data.error },
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: cartConstants.GET_CART_FAILURE,
          payload: {
            error:
              typeof err.response?.data?.error !== "object"
                ? err.response?.data?.error
                : err.response?.data?.error?.message ||
                  err.message ||
                  "Some unexpected error ocuured. Try refreshing the page or contact developer if problem persists.",
          },
        });
      });
  };
};
