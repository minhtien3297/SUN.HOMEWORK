import * as actions from "../actions/ticket.actions";
import axios from "axios";

const baseURL = process.env.REACT_APP__API_KEY;
const ticketURL = `${baseURL}ticketCart`;

export function getTicketData() {
  return async (dispatch) => {
    try {
      const response = await axios.get(ticketURL);
      await dispatch(actions.getAllTickets(response.data));
    } catch (error) {
      dispatch(actions.getAllTicketsError(error));
    }
  };
}

export function deleteTicket(id) {
  return (dispatch) => {
    axios
      .delete(ticketURL + "/" + id)
      .then(() => {
        dispatch(actions.deleteTicketSuccess());
      })
      .catch((error) => {
        dispatch(actions.deleteTicketError(error));
      });
  };
}
