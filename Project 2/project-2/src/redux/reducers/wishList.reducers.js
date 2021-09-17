const initialState = {
  error: null,
  tickets: [],
  status: "",
};

export default function wishListReducers(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "GET_WISHLIST":
      let getWishList = JSON.parse(sessionStorage.getItem("wishList")) || [];

      return {
        ...state,
        tickets: getWishList,
        status: "",
      };

    case "ADD_TICKET_TO_WISHLIST":
      const ticket = payload;
      let wishList = JSON.parse(sessionStorage.getItem("wishList")) || [];
      let existTicket = wishList.findIndex(
        (item) =>
          ticket.movie === item.movie &&
          ticket.day === item.day &&
          ticket.theater === item.theater &&
          ticket.time === item.time
      );

      if (existTicket !== -1) {
        wishList[existTicket].quantity += 1;
      } else {
        wishList.push({ ...ticket, quantity: 1 });
      }

      sessionStorage.setItem("wishList", JSON.stringify(wishList));

      return {
        ...state,
        tickets: wishList,
        status: "add success",
      };

    case "REMOVE_TICKET_FROM_WISHLIST":
      const ticketRemove = payload;
      let wishListUpdate = JSON.parse(sessionStorage.getItem("wishList")) || [];

      for (let i = 0; i < wishListUpdate.length; i++) {
        if (
          wishListUpdate[i].movie === ticketRemove.movie &&
          wishListUpdate[i].day === ticketRemove.day &&
          wishListUpdate[i].theater === ticketRemove.theater &&
          wishListUpdate[i].time === ticketRemove.time
        ) {
          wishListUpdate.splice(i, 1);
          break;
        }
      }

      sessionStorage.setItem("wishList", JSON.stringify(wishListUpdate));
      return {
        ...state,
        tickets: wishListUpdate,
        status: "delete success",
      };

    case "REMOVE_ALL_TICKET_FROM_WISHLIST":
      sessionStorage.removeItem("wishList");
      return {
        ...state,
        tickets: [],
        status: "delete all success",
      };

    case "ADD_WISH_LIST_DATA":
      sessionStorage.removeItem("wishList");
      return {
        ...state,
        tickets: [],
      };

    case "ADD_WISH_LIST_DATA_ERROR":
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}
