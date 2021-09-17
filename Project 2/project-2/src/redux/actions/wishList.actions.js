export function getWishList() {
  return {
    type: "GET_WISHLIST",
  };
}

export function addTicketToWishList(ticket) {
  return {
    type: "ADD_TICKET_TO_WISHLIST",
    payload: ticket,
  };
}

export function removeTicketFromWishList(ticket) {
  return {
    type: "REMOVE_TICKET_FROM_WISHLIST",
    payload: ticket,
  };
}

export function removeALLTicketFromWishList() {
  return {
    type: "REMOVE_ALL_TICKET_FROM_WISHLIST",
  };
}

export function addWishListData() {
  return {
    type: "ADD_WISH_LIST_DATA",
  };
}

export function addWishListDataError(error) {
  return {
    type: "ADD_WISH_LIST_DATA_ERROR",
    payload: error,
  };
}
