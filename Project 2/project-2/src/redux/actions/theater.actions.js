export function getAllTheaters(theaters) {
  return {
    type: "GET_ALL_THEATERS",
    payload: theaters,
  };
}

export function getAllTheatersError(error) {
  return {
    type: "GET_ALL_THEATERS_ERROR",
    payload: error,
  };
}
