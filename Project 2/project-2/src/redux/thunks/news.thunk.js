import * as actions from "../actions/news.actions";
import axios from "axios";

const baseURL = process.env.REACT_APP__API_KEY;
const newsURL = `${baseURL}news`;

export function getNewsData() {
  return (dispatch) => {
    axios
      .get(newsURL)
      .then((response) => dispatch(actions.getAllNews(response.data)))
      .catch((error) => {
        dispatch(actions.getAllNewsError(error));
      });
  };
}

export function getNewDataById(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(newsURL + "/" + id);
      await dispatch(actions.getNewById(response.data));
    } catch (error) {
      dispatch(actions.getNewByIdError(error));
    }
  };
}
