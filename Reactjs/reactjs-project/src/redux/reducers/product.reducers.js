const initialState = {
  products: [],
  filter: [],
  currentPage: 1,
};

export default function productReducers(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_ALL_FILTERS":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_FILTERS":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
}
