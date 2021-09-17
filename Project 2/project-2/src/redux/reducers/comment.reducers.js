const initialState = {
  comments: [],
  error: null,
};

export default function commentReducers(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "GET_ALL_COMMENTS":
      return {
        ...state,
        comments: payload,
      };

    case "GET_ALL_COMMENTS_ERROR":
      return {
        ...state,
        error: payload,
      };

    case "GET_ALL_COMMENTS_BY_MOVIE":
      return {
        ...state,
        comment: payload,
      };

    case "GET_ALL_COMMENTS_BY_MOVIE_ERROR":
      return {
        ...state,
        error: payload,
      };

    case "ADD_COMMENT_SUCCESS":
      return {
        ...state,
      };

    case "ADD_COMMENT_ERROR":
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}
