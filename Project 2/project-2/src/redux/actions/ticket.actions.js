export function getAllTickets(tickets) {
  return {
    type: "GET_ALL_TICKETS",
    payload: tickets,
  };
}

export function getAllTicketsError(error) {
  return {
    type: "GET_ALL_TICKETS_ERROR",
    payload: error,
  };
}

export function deleteTicketError(error) {
  return {
    type: "DELETE_TICKET_ERROR",
    payload: error,
  };
}

export function deleteTicketSuccess() {
  return {
    type: "DELETE_TICKET_SUCCESS",
  };
}
