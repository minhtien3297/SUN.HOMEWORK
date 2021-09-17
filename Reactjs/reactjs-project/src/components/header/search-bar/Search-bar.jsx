import "./search-bar.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../redux/actions/product.action";
const magnify = "fas fa-search";

function SearchBar() {
  const dispatch = useDispatch();
  const  products  = useSelector((state) => state.product.products);

  let filterSearch = products.slice();
  let [searchString, handleInput] = React.useState("");

  function search(searchString) {
    let ex = "";
    ex = filterSearch.filter((item) =>
      item.name.toLowerCase().includes(searchString.toLowerCase())
    );

    dispatch(setFilters(ex));
  }

  return (
    <div className="search-bar d-flex align-items-center">
      <div className="input-group">
        <input
          type="text"
          value={searchString}
          className="form-control"
          placeholder="Search for a product"
          onChange={(e) => {
            handleInput(e.target.value);
            search(e.target.value);
          }}
        />
        <button
          className="btn search__btn"
          type="button"
          id="button-addon2"
          onClick={() => search(searchString)}
        >
          <i className={magnify}></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
