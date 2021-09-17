const initialState = {
  tickets: [],
  error: null,
  status: "",
};

export default function ticketReducers(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "GET_ALL_TICKETS":
      return {
        ...state,
        tickets: payload,
      };

    case "GET_ALL_TICKETS_ERROR":
      return {
        ...state,
        error: payload,
      };

    case "DELETE_TICKET_ERROR":
      return {
        ...state,
        error: payload,
        status: "delete fail",
      };

    case "DELETE_TICKET_SUCCESS":
      return {
        ...state,
        status: "delete success",
      };

    default:
      return state;
  }
}
