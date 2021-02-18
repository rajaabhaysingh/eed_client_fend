import { combineReducers } from "redux";
import categoryReducers from "./category.reducers";
import authReducers from "./auth.reducers";
import courseReducers from "./course.reducers";
import cartReducers from "./cart.reducers";
import signupReducers from "./signup.reducers";
import orderReducers from "./order.reducers";

const rootReducer = combineReducers({
  category: categoryReducers,
  auth: authReducers,
  course: courseReducers,
  cart: cartReducers,
  signup: signupReducers,
  order: orderReducers,
});

export default rootReducer;
