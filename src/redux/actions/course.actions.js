import axiosIntance from "../../helpers/axios";
import { courseConstants } from "./constants";

// getCoursesByCategorySlug
export const getCoursesByCategorySlug = (categorySlug) => {
  return async (dispatch) => {
    dispatch({
      type: courseConstants.GET_COURSES_BY_SLUG_REQUEST,
    });

    await axiosIntance
      .get(`/api/course/get-courses-by-category/${categorySlug}`)
      .then((res) => {
        if (res.status === 200) {
          const { data } = res.data;

          dispatch({
            type: courseConstants.GET_COURSES_BY_SLUG_SUCCESS,
            payload: { data: data },
          });
        } else {
          dispatch({
            type: courseConstants.GET_COURSES_BY_SLUG_FAILURE,
            payload: { error: res.data.error },
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: courseConstants.GET_COURSES_BY_SLUG_FAILURE,
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

// getAllCourse
export const getAllCourse = () => {
  return async (dispatch) => {
    dispatch({
      type: courseConstants.GET_ALL_COURSE_REQUEST,
    });

    await axiosIntance
      .get("/api/course/get")
      .then((res) => {
        if (res.status === 200) {
          const { data } = res.data;

          dispatch({
            type: courseConstants.GET_ALL_COURSE_SUCCESS,
            payload: { data: data },
          });
        } else {
          dispatch({
            type: courseConstants.GET_ALL_COURSE_FAILURE,
            payload: { error: res.data.error },
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: courseConstants.GET_ALL_COURSE_FAILURE,
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
