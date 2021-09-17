import * as actions from "../actions/theater.actions";
import axios from "axios";

const baseURL = process.env.REACT_APP__API_KEY;
const theaterURL = `${baseURL}theaters`;

export function getTheaterData() {
  return (dispatch) => {
    axios
      .get(theaterURL)
      .then((response) => dispatch(actions.getAllTheaters(response.data)))
      .catch((error) => {
        dispatch(actions.getAllTheatersError(error));
      });
  };
}
