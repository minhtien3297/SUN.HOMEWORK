export function getAllProducts(products) {
  return {
    type: "GET_ALL_PRODUCTS",
    payload: products,
  };
}

export function getAllFilters(products) {
  return {
    type: "GET_ALL_FILTERS",
    payload: products,
  };
}

export function setProducts(products) {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
}

export function setFilters(products) {
  return {
    type: "SET_FILTERS",
    payload: products,
  };
}

export function setCurrentPage(page) {
  return {
    type: "SET_CURRENT_PAGE",
    payload: page,
  };
}
