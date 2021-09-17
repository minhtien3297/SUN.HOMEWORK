import * as actions from "../actions/movieCalendar.actions";
import axios from "axios";

const baseURL = process.env.REACT_APP__API_KEY;
const movieCalendarURL = `${baseURL}movieCalendars`;

export function getMovieCalendarData() {
  return async (dispatch) => {
    try {
      const response = await axios.get(movieCalendarURL);
      await dispatch(actions.getAllMovieCalendars(response.data));
    } catch (error) {
      dispatch(actions.getAllMovieCalendarsError(error));
    }
  };
}
