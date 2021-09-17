import * as actions from "../actions/product.action";
import axios from "axios";

const baseURL = process.env.REACT_APP_API_KEY;
const productURL = `${baseURL}products`;

export function getProductsData() {
  return (dispatch) => {
    axios
      .get(productURL)
      .then((response) => dispatch(actions.getAllProducts(response.data)))
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getFilterData() {
  return (dispatch) => {
    axios
      .get(productURL)
      .then((response) => dispatch(actions.getAllFilters(response.data)))
      .catch((error) => {
        console.log(error);
      });
  };
}
