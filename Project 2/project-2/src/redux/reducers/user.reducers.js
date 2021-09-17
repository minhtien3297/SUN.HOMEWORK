const initialState = {
  users: [],
  user: {},
  isLoggedIn: false,
  error: null,
  status: "",
};

export default function userReducers(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_USERS":
      return {
        ...state,
        users: payload,
        status: "",
      };

    case "GET_ALL_USERS_ERROR":
      return {
        ...state,
        error: payload,
      };

    case "USER_AUTHORIZE":
      const profile = payload;

      sessionStorage.setItem("user", JSON.stringify(profile));

      return {
        ...state,
        isLoggedIn: true,
        user: payload,
        status: "login success",
      };

    case "USER_AUTHORIZE_ERROR":
      return {
        ...state,
        status: "login fail",
      };

    case "USER_LOGOUT":
      sessionStorage.clear();

      return {
        ...state,
        user: {},
        isLoggedIn: false,
        status: "",
      };

    case "REGISTER_USER_ERROR":
      return {
        ...state,
        error: payload,
        status: "register fail",
      };

    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        status: "register success",
      };

    case "DELETE_USER_ERROR":
      return {
        ...state,
        error: payload,
        status: "delete fail",
      };

    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        status: "delete success",
      };

    case "UPDATE_USER_ERROR":
      return {
        ...state,
        error: payload,
        status: "update fail",
      };

    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        status: "update success",
      };

    case "SET_USER":
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
}
