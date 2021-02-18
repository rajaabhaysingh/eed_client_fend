import { orderConstants } from "../actions/constants";

const initialState = {
  createOrderData: null,
  createOrderLoading: false,
  createOrderSuccessful: false,
  createOrderError: null,
  getOrdersData: [],
  getOrdersLoading: false,
  getOrdersSuccessful: false,
  getOrdersError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case orderConstants.CREATE_ORDER_REQUEST:
      state = {
        ...state,
        createOrderLoading: true,
        createOrderError: null,
      };
      break;

    case orderConstants.CREATE_ORDER_SUCCESS:
      state = {
        ...state,
        createOrderData: action.payload.data,
        createOrderLoading: false,
        createOrderSuccessful: true,
        createOrderError: null,
      };
      break;

    case orderConstants.CREATE_ORDER_FAILURE:
      state = {
        ...state,
        createOrderData: null,
        createOrderLoading: false,
        createOrderSuccessful: false,
        createOrderError: action.payload.error,
      };
      break;

    case orderConstants.GET_ORDERS_REQUEST:
      state = {
        ...state,
        getOrdersLoading: true,
        getOrdersError: null,
      };
      break;

    case orderConstants.GET_ORDERS_SUCCESS:
      state = {
        ...state,
        getOrdersData: action.payload.data,
        getOrdersLoading: false,
        getOrdersSuccessful: true,
        getOrdersError: null,
      };
      break;

    case orderConstants.GET_ORDERS_FAILURE:
      state = {
        ...state,
        getOrdersData: [],
        getOrdersLoading: false,
        getOrdersSuccessful: false,
        getOrdersError: action.payload.error,
      };
      break;

    default:
      break;
  }

  return state;
};
