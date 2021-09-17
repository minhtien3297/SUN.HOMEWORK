export function getAllUsers(users) {
  return {
    type: "GET_ALL_USERS",
    payload: users,
  };
}

export function getAllUsersError(error) {
  return {
    type: "GET_ALL_USERS_ERROR",
    payload: error,
  };
}

export function userAuthorize(user) {
  return {
    type: "USER_AUTHORIZE",
    payload: user,
  };
}

export function userAuthorizeError() {
  return {
    type: "USER_AUTHORIZE_ERROR",
  };
}

export function userLogOut() {
  return {
    type: "USER_LOGOUT",
  };
}

export function regiterUserError(error) {
  return {
    type: "REGISTER_USER_ERROR",
    payload: error,
  };
}

export function registerUserSuccess() {
  return {
    type: "REGISTER_USER_SUCCESS",
  };
}

export function deleteUserError(error) {
  return {
    type: "DELETE_USER_ERROR",
    payload: error,
  };
}

export function deleteUserSuccess() {
  return {
    type: "DELETE_USER_SUCCESS",
  };
}

export function updateUserError(error) {
  return {
    type: "UPDATE_USER_ERROR",
    payload: error,
  };
}

export function updateUserSuccess(user) {
  return {
    type: "UPDATE_USER_SUCCESS",
    payload: user,
  };
}

export function setUser(user) {
  return {
    type: "SET_USER",
    payload: user,
  };
}
