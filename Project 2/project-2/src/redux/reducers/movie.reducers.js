const initialState = {
  movies: [],
  incomingMovies: [],
  showingMovies: [],
  movieById: "",
  error: null,
  status: "",
};

export default function movieReducers(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_MOVIES":
      return {
        ...state,
        movies: payload,
        status: "",
      };

    case "GET_ALL_MOVIES_ERROR":
      return {
        ...state,
        error: payload,
      };

    case "GET_ALL_INCOMING_MOVIES":
      return {
        ...state,
        incomingMovies: payload,
      };

    case "GET_ALL_INCOMING_MOVIES_ERROR":
      return {
        ...state,
        error: payload,
      };

    case "GET_ALL_SHOWING_MOVIES":
      return {
        ...state,
        showingMovies: payload,
      };

    case "GET_ALL_SHOWING_MOVIES_ERROR":
      return {
        ...state,
        error: payload,
      };

    case "GET_MOVIE_BY_ID":
      return {
        ...state,
        movieById: payload,
      };

    case "GET_MOVIE_BY_ID_ERROR":
      return {
        ...state,
        movieById: payload,
      };

    case "SET_MOVIES":
      return {
        ...state,
        movies: payload,
      };

    case "GET_ALL_MOVIES_BY_NAME":
      const incoming = payload.filter((movie) => movie.status === "incoming");
      const showing = payload.filter((movie) => movie.status === "now-showing");
      return {
        ...state,
        incomingMovies: incoming,
        showingMovies: showing,
      };

    case "GET_ALL_MOVIES_BY_NAME_ERROR":
      return {
        ...state,
        error: payload,
      };

    case "DELETE_MOVIE_ERROR":
      return {
        ...state,
        error: payload,
        status: "delete fail",
      };

    case "DELETE_MOVIE_SUCCESS":
      return {
        ...state,
        status: "delete success",
      };

    case "UPDATE_MOVIE_ERROR":
      return {
        ...state,
        error: payload,
        status: "update fail",
      };

    case "UPDATE_MOVIE_SUCCESS":
      return {
        ...state,
        status: "update success",
      };

    default:
      return state;
  }
}
