import { combineReducers } from "redux";
import categoryReducers from "./category.reducers";
import authReducers from "./auth.reducers";
import courseReducers from "./course.reducers";

const rootReducer = combineReducers({
  category: categoryReducers,
  auth: authReducers,
  course: courseReducers,
});

export default rootReducer;
