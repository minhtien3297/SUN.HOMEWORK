import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

export default function configureStore() {
  const middlewares = [thunkMiddleware];

  const enhancers = compose(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, enhancers);
  return store;
}