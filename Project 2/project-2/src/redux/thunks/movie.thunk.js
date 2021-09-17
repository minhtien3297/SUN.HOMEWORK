import * as actions from "../actions/movie.actions";
import axios from "axios";

const baseURL = process.env.REACT_APP__API_KEY;
const movieURL = `${baseURL}movies`;

export function getMovieData() {
  return (dispatch) => {
    axios
      .get(movieURL)
      .then((response) => dispatch(actions.getAllMovies(response.data)))
      .catch((error) => {
        dispatch(actions.getAllMoviesError(error));
      });
  };
}

export function getIncomingMovieData() {
  return (dispatch) => {
    axios
      .get(movieURL + "?status=incoming")
      .then((response) => {
        dispatch(actions.getAllIncomingMovies(response.data));
      })
      .catch((error) => {
        dispatch(actions.getAllIncomingMoviesError(error));
      });
  };
}

export function getShowingMovieData() {
  return (dispatch) => {
    axios
      .get(movieURL + "?status=now-showing")
      .then((response) => {
        dispatch(actions.getAllShowingMovies(response.data));
      })
      .catch((error) => {
        dispatch(actions.getAllShowingMoviesError(error));
      });
  };
}

export function getMovieDataById(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(movieURL + "/" + id);
      await dispatch(actions.getMovieById(response.data));
    } catch (error) {
      dispatch(actions.getMovieByIdError(error));
    }
  };
}

export function deleteMovie(id) {
  return (dispatch) => {
    axios
      .delete(movieURL + "/" + id)
      .then(() => {
        dispatch(actions.deleteMovieSuccess());
      })
      .catch((error) => {
        dispatch(actions.deleteMovieError(error));
      });
  };
}

export function getMoviesByName(name) {
  return (dispatch) => {
    axios
      .get(movieURL + "?name=" + name)
      .then((response) => {
        dispatch(actions.getAllMoviesByName(response.data));
      })
      .catch((error) => {
        dispatch(actions.getAllMoviesByNameError(error));
      });
  };
}

export function updateMovie(movie) {
  return (dispatch) => {
    axios
      .put(movieURL + "/" + movie.id, { ...movie })
      .then(() => {
        dispatch(actions.updateMovieSuccess());
      })
      .catch((error) => {
        dispatch(actions.updateMovieError(error));
      });
  };
}
