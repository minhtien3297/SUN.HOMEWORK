import { Button, message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import FilmModal from "../film-modal/index";
import "./styles.scss";

const ticket = "/assets/icons/bg-cate-booking.png";

function FilmCardHorizontal({
  movie: { src, name, director, actors, type, time, start, language, status },
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [movieChosen, setMovieChosen] = useState("");
  const movieCalendar = useSelector(
    (state) => state.movieCalendar.movieCalendar
  );
  const auth = useSelector((state) => state.user.isLoggedIn);

  const showModal = () => {
    if (auth === true) {
      setIsModalVisible(true);
      filterMovie(name);
    } else {
      message.error("Vui lòng đăng nhập");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function filterMovie(name) {
    let movie = movieCalendar.find((movie) => movie.movie === name);

    setMovieChosen(movie);
  }

  return (
    <div className="film-card-horizontal">
      <img className="card__img" src={src} alt="banner" />

      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <span>
          <span className="bold">Đạo diễn: </span>
          {director}
        </span>
        <span>
          <span className="bold">Diễn viên: </span>
          {actors}
        </span>
        <span>
          <span className="bold">Thể loại: </span>
          {type}
        </span>
        <span>
          <span className="bold">Khởi chiếu: </span>
          {start}
        </span>
        <span>
          <span className="bold">Thời lượng: </span>
          {time}
        </span>
        <span>
          <span className="bold">Ngôn ngữ: </span>
          {language}
        </span>

        {status === "now-showing" && (
          <Button
            className="card__btn"
            shape="round"
            icon={<img src={ticket} alt="ticket" />}
            size="large"
            onClick={showModal}
          >
            MUA VÉ
          </Button>
        )}

        <FilmModal
          isModalVisible={isModalVisible}
          handleCancel={handleCancel}
          movieChosen={movieChosen}
          name={name}
        />
      </div>
    </div>
  );
}

export default FilmCardHorizontal;
