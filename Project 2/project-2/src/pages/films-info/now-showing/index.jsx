import BreadCrump from "../../../components/layout/content/breadcrump";
import FilmTitle from "../../../components/pages/films-info/film-title/index";
import FilmCard from "../../../components/pages/films-info/film-card/index";
import SearchBar from "../../../components/pages/films-info/search-bar/index";
import { getShowingMovieData } from "../../../redux/thunks/movie.thunk";
import { List } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./styles.scss";

const breadLinks = {
  links: [
    {
      href: "",
      name: "Phim",
    },
  ],
  current: "Phim đang chiếu",
};

const filmTitle = {
  current: "Phim Đang Chiếu",
  redirect: "Phim Sắp Chiếu",
  link: "/incoming",
};

function NowShowing() {
  const nowShowingMovies = useSelector((state) => state.movie.showingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShowingMovieData());
  }, [dispatch]);

  return (
    <div className="now-showing">
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
          dataSource={nowShowingMovies}
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

export default NowShowing;
