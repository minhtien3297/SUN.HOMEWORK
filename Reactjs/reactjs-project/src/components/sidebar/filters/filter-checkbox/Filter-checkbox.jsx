import "./Filter-checkbox.scss";
import { setFilters } from "../../../../redux/actions/product.action";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function FilterCheckbox(props) {
  const dispatch = useDispatch();
  const { filterType } = props;
  const  filter  = useSelector((state) => state.product.filter);
  let checkboxType = [];
  let checkboxBrand = [];

  /**
   * count product
   */
  function count(arg, filterType) {
    let count = 0;

    filter.forEach((item) => {
      if (filterType === "type") {
        if (item.type === arg) {
          count++;
        }
      } else if (filterType === "brand") {
        if (item.brand === arg) {
          count++;
        }
      }
    });

    return count;
  }

  // remove duplicate
  let uniqueFilterType = [...new Set(filter.map((item) => item.type))];
  let uniqueFilterBrand = [...new Set(filter.map((item) => item.brand))];

  // show product
  checkboxType = uniqueFilterType.map((item, key) => {
    return (
      <div key={key}>
        {item && (
          <div className="mb-2">
            <input
              type="checkbox"
              id={key}
              value={item}
              name={item}
              onChange={(e) => filterByType(e.target.value)}
              className="me-3"
            />
            <label for={key} className="me-5 ">
              {" "}
              {item} ({count(item, "type")})
            </label>
            <br />
          </div>
        )}
      </div>
    );
  });

  checkboxBrand = uniqueFilterBrand.map((item, key) => {
    return (
      <div key={key}>
        {item && (
          <div className="mb-2">
            <input
              type="checkbox"
              id={key}
              name={item}
              value={item}
              onChange={(e) => filterByBrand(e.target.value)}
              className="me-3"
            />
            <label for={key} className="me-5 ">
              {" "}
              {item} ({count(item, "brand")})
            </label>
            <br />
          </div>
        )}
      </div>
    );
  });

  // filter product
  function filterByType(arg) {
    let type = filter.filter((item) => item.type === arg);

    dispatch(setFilters(type));
  }

  function filterByBrand(arg) {
    let brand = filter.filter((item) => item.brand === arg);

    dispatch(setFilters(brand));
  }

  return (
    <div className="filter-checkbox">
      {filterType === "type" && checkboxType}
      {filterType === "brand" && checkboxBrand}
    </div>
  );
}

export default FilterCheckbox;
