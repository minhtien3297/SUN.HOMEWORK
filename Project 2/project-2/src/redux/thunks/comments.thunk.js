import * as actions from "../actions/comment.actions";
import axios from "axios";

const baseURL = process.env.REACT_APP__API_KEY;
const commentURL = `${baseURL}comments`;

export function getCommentData() {
  return async (dispatch) => {
    try {
      const response = await axios.get(commentURL);
      await dispatch(actions.getAllComments(response.data));
    } catch (error) {
      dispatch(actions.getAllCommentsError(error));
    }
  };
}

export function getCommentDataByMovie(movie) {
  return async (dispatch) => {
    try {
      const response = await axios.get(commentURL + "?movie=" + movie);
      await dispatch(actions.getAllCommentsByMovie(response.data));
    } catch (error) {
      dispatch(actions.getAllCommentsByMovieError(error));
    }
  };
}

export function addComment(comment) {
  return (dispatch) => {
    axios
      .post(commentURL, { ...comment })
      .then(() => {
        dispatch(actions.addCommentSuccess());
      })
      .catch((error) => {
        dispatch(actions.addCommentError(error));
      });
  };
}
