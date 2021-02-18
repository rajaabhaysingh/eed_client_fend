import { cartConstants } from "../actions/constants";

const initialState = {
  addToCartData: null,
  addToCartLoading: false,
  addToCartSuccessful: false,
  addToCartError: null,
  getCartData: [],
  getCartLoading: false,
  getCartSuccessful: false,
  getCartError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART_REQUEST:
      state = {
        ...state,
        addToCartLoading: true,
        addToCartError: null,
      };
      break;

    case cartConstants.ADD_TO_CART_SUCCESS:
      state = {
        ...state,
        addToCartData: action.payload.data,
        addToCartLoading: false,
        addToCartSuccessful: true,
        addToCartError: null,
      };
      break;

    case cartConstants.ADD_TO_CART_FAILURE:
      state = {
        ...state,
        addToCartData: null,
        addToCartLoading: false,
        addToCartSuccessful: false,
        addToCartError: action.payload.error,
      };
      break;

    case cartConstants.GET_CART_REQUEST:
      state = {
        ...state,
        getCartLoading: true,
        getCartError: null,
      };
      break;

    case cartConstants.GET_CART_SUCCESS:
      state = {
        ...state,
        getCartData: action.payload.data,
        getCartLoading: false,
        getCartSuccessful: true,
        getCartError: null,
      };
      break;

    case cartConstants.GET_CART_FAILURE:
      state = {
        ...state,
        getCartData: [],
        getCartLoading: false,
        getCartSuccessful: false,
        getCartError: action.payload.error,
      };
      break;

    default:
      break;
  }

  return state;
};
