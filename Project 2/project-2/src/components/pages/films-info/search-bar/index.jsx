import { Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShowingMovieData,
  getIncomingMovieData,
  getMoviesByName,
} from "../../../../redux/thunks/movie.thunk";
import "./styles.scss";

function SearchBar() {
  const dispatch = useDispatch();

  function search(searchString) {
    if (searchString === "") {
      dispatch(getShowingMovieData());
      dispatch(getIncomingMovieData());
    } else {
      dispatch(getMoviesByName(searchString));
    }
  }

  return (
    <Input.Search
      className="film__search__bar"
      placeholder="input search text"
      allowClear
      size="large"
      enterButton="Search"
      onSearch={search}
    />
  );
}

export default SearchBar;
