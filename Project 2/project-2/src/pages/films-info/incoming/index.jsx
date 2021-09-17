import BreadCrump from "../../../components/layout/content/breadcrump";
import FilmTitle from "../../../components/pages/films-info/film-title/index";
import FilmCard from "../../../components/pages/films-info/film-card/index";
import SearchBar from "../../../components/pages/films-info/search-bar/index";
import { getIncomingMovieData } from "../../../redux/thunks/movie.thunk";
import { List } from "antd";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import "./styles.scss";

const breadLinks = {
  links: [
    {
      href: "",
      name: "Phim",
    },
  ],
  current: "Phim sắp chiếu",
};

const filmTitle = {
  current: "Phim Sắp Chiếu",
  redirect: "Phim Đang Chiếu",
  link: "/now-showing",
};

function Incoming() {
  const incomingMovies = useSelector((state) => state.movie.incomingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomingMovieData());
  }, [dispatch]);

  return (
    <div className="incoming">
      <BreadCrump breadLinks={breadLinks} />

      <FilmTitle filmTitle={filmTitle} />

      <div className="container">
        <SearchBar />

        <List
          pagination={{
            pageSize: 8,
          }}
          className="film-grid"
          grid={{ gutter: 35, column: 4 }}
          dataSource={incomingMovies}
          renderItem={(item) => (
            <List.Item>
              <FilmCard movie={item} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default Incoming;
