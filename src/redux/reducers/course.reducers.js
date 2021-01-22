import { courseConstants } from "../actions/constants";

const initialState = {
  getCoursesByCategorySlugData: {},
  getCoursesByCategorySlugLoading: false,
  getCoursesByCategorySlugSuccessful: false,
  getCoursesByCategorySlugError: null,
  getAllCourseData: [],
  getAllCourseLoading: false,
  getAllCourseSuccessful: false,
  getAllCourseError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case courseConstants.GET_COURSES_BY_SLUG_REQUEST:
      state = {
        ...state,
        getCoursesByCategorySlugLoading: true,
        getCoursesByCategorySlugError: null,
      };
      break;

    case courseConstants.GET_COURSES_BY_SLUG_SUCCESS:
      state = {
        ...state,
        getCoursesByCategorySlugData: action.payload.data,
        getCoursesByCategorySlugLoading: false,
        getCoursesByCategorySlugSuccessful: true,
        getCoursesByCategorySlugError: null,
      };
      break;

    case courseConstants.GET_COURSES_BY_SLUG_FAILURE:
      state = {
        ...state,
        getCoursesByCategorySlugData: {},
        getCoursesByCategorySlugLoading: false,
        getCoursesByCategorySlugSuccessful: false,
        getCoursesByCategorySlugError: action.payload.error,
      };
      break;

    case courseConstants.GET_ALL_COURSE_REQUEST:
      state = {
        ...state,
        getAllCourseLoading: true,
        getAllCourseError: null,
      };
      break;

    case courseConstants.GET_ALL_COURSE_SUCCESS:
      state = {
        ...state,
        getAllCourseData: action.payload.data,
        getAllCourseLoading: false,
        getAllCourseSuccessful: true,
        getAllCourseError: null,
      };
      break;

    case courseConstants.GET_ALL_COURSE_FAILURE:
      state = {
        ...state,
        getAllCourseData: null,
        getAllCourseLoading: false,
        getAllCourseSuccessful: false,
        getAllCourseError: action.payload.error,
      };
      break;

    default:
      break;
  }

  return state;
};
