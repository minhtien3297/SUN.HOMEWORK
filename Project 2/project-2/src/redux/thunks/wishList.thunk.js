import * as actions from "../actions/wishList.actions";
import axios from "axios";

const baseURL = process.env.REACT_APP__API_KEY;
const ticketURL = `${baseURL}ticketCart`;

export function addWishListData(wishList) {
  return async (dispatch) => {
    axios
      .post(ticketURL, { ...wishList })
      .then(() => {
        dispatch(actions.addWishListData());
      })
      .catch((error) => {
        dispatch(actions.addWishListDataError(error));
      });
  };
}
