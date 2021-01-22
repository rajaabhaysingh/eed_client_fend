import { categoryConstants } from "../actions/constants";

const initialState = {
  getAllCategoryData: [],
  getAllCategoryLoading: false,
  getAllCategorySuccessful: false,
  getAllCategoryError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CAT_REQUEST:
      state = {
        ...state,
        getAllCategoryLoading: true,
        getAllCategoryError: null,
      };
      break;

    case categoryConstants.GET_ALL_CAT_SUCCESS:
      state = {
        ...state,
        getAllCategoryData: action.payload.data,
        getAllCategoryLoading: false,
        getAllCategorySuccessful: true,
        getAllCategoryError: null,
      };
      break;

    case categoryConstants.GET_ALL_CAT_FAILURE:
      state = {
        ...state,
        getAllCategoryData: [],
        getAllCategoryLoading: false,
        getAllCategorySuccessful: false,
        getAllCategoryError: action.payload.error,
      };
      break;

    default:
      break;
  }

  return state;
};
