import "./Sort.scss";
import { setFilters } from "../../../redux/actions/product.action";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

function Sort() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.product.filter);
  let filterProducts = filter.slice();

  /**
   * Sort arcording to event pass in
   */
  const sort = (event) => {
    for (let i = 0; i < filterProducts.length - 1; i++) {
      for (let j = 0; j < filterProducts.length - i - 1; j++) {
        if (event === "desc") {
          if (filterProducts[j].price < filterProducts[j + 1].price) {
            let temp = filterProducts[j];
            filterProducts[j] = filterProducts[j + 1];
            filterProducts[j + 1] = temp;
          }
        } else if (event === "asc") {
          if (filterProducts[j].price > filterProducts[j + 1].price) {
            let temp = filterProducts[j];
            filterProducts[j] = filterProducts[j + 1];
            filterProducts[j + 1] = temp;
          }
        }
      }
    }

    dispatch(setFilters(filterProducts));
  };

  return (
    <div className="sort d-flex justify-content-between">
      <p>{filterProducts.length} results found in 3ms</p>

      <div>
        <label htmlFor="sort" className="me-3">
          Sort by
        </label>
        <select id="sort" onChange={(e) => sort(e.target.value)}>
          <option>Featured</option>
          <option value="asc">Price asc.</option>
          <option value="desc">Price desc.</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
