import "./Brand.scss";
import FilterCheckbox from "../filter-checkbox/Filter-checkbox";
import { setFilters } from "../../../../redux/actions/product.action";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const magnify = "fas fa-search";

function Brand() {
  const dispatch = useDispatch();
  const  products  = useSelector((state) => state.product.products);
  const filterType = "brand";
  let filterSearch = products.slice();
  let [searchString, handleInput] = React.useState("");

  function brandSearch(searchString) {
    let stringSearched = "";
    stringSearched = filterSearch.filter((item) =>
      item.brand.toLowerCase().includes(searchString.toLowerCase())
    );

    dispatch(setFilters(stringSearched));
  }

  return (
    <div className="brand">
      <p className="fw-bold mb-3">Brand</p>

      <div class="input-group flex-nowrap">
        <span class="input-group-text">
          <i className={magnify}></i>
        </span>
        <input
          type="text"
          value={searchString}
          class="form-control"
          placeholder="Search for other..."
          onChange={(e) => {
            handleInput(e.target.value);
            brandSearch(e.target.value);
          }}
        />
      </div>

      <FilterCheckbox filterType={filterType} />
    </div>
  );
}

export default Brand;
