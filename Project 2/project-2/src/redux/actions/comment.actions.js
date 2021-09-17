export function getAllComments(comment) {
  return {
    type: "GET_ALL_COMMENTS",
    payload: comment,
  };
}

export function getAllCommentsError(error) {
  return {
    type: "GET_ALL_COMMENTS_ERROR",
    payload: error,
  };
}

export function getAllCommentsByMovie(movie) {
  return {
    type: "GET_ALL_COMMENTS_BY_MOVIE",
    payload: movie,
  };
}

export function getAllCommentsByMovieError(error) {
  return {
    type: "GET_ALL_COMMENTS_BY_MOVIE_ERROR",
    payload: error,
  };
}

export function addCommentSuccess() {
  return {
    type: "ADD_COMMENT_SUCCESS",
  };
}

export function addCommentError(error) {
  return {
    type: "ADD_COMMENT_ERROR",
    payload: error,
  };
}
