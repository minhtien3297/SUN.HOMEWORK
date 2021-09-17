export function getAllNews(news) {
  return {
    type: "GET_ALL_NEWS",
    payload: news,
  };
}

export function getAllNewsError(error) {
  return {
    type: "GET_ALL_NEWS_ERROR",
    payload: error,
  };
}

export function getNewById(news) {
  return {
    type: "GET_NEW_BY_ID",
    payload: news,
  };
}

export function getNewByIdError(error) {
  return {
    type: "GET_NEW_BY_ID_ERROR",
    payload: error,
  };
}
