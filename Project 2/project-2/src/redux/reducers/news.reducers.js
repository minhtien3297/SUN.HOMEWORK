const initialState = {
  news: [],
  error: null,
  newById: {},
};

export default function newReducers(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_NEWS":
      return {
        ...state,
        news: payload,
      };

    case "GET_ALL_NEWS_ERROR":
      return {
        ...state,
        error: payload,
      };

    case "GET_NEW_BY_ID":
      return {
        ...state,
        newById: payload,
      };

    case "GET_NEW_BY_ID_ERROR":
      return {
        ...state,
        newById: payload,
      };

    default:
      return state;
  }
}
