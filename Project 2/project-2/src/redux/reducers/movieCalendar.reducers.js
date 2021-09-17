const initialState = {
  movieCalendar: [],
  error: null,
};

export default function movieCalendarReducers(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "GET_ALL_MOVIE_CALENDARS":
      return {
        ...state,
        movieCalendar: payload,
      };
    case "GET_ALL_MOVIE_CALENDARS_ERROR":
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}
