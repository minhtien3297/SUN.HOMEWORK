export function getAllMovieCalendars(movieCalendar) {
  return {
    type: "GET_ALL_MOVIE_CALENDARS",
    payload: movieCalendar,
  };
}

export function getAllMovieCalendarsError(error) {
  return {
    type: "GET_ALL_MOVIE_CALENDARS_ERROR",
    payload: error,
  };
}
