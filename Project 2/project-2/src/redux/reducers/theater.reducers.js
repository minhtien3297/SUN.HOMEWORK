const initialState = {
  theaters: [],
  error: null,
};

export default function theaterReducers(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "GET_ALL_THEATERS":
      return {
        ...state,
        theaters: payload,
      };
    case "GET_ALL_THEATERS_ERROR":
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}
