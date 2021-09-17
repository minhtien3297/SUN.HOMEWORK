import { combineReducers } from "redux";
import productReducers from "./product.reducers";

const rootReducer = combineReducers({
  product: productReducers,
});

export default rootReducer;
