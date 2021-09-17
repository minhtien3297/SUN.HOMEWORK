import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDataById } from "../../../redux/thunks/movie.thunk";
import {
  addComment,
  getCommentData,
  getCommentDataByMovie,
} from "../../../redux/thunks/comments.thunk";
import BreadCrump from "../../../components/layout/content/breadcrump";
import FilmCardHorizontal from "../../../components/pages/films-info/film-card-horizontal/index";
import { Comment, Form, Button, List, Input, message } from "antd";
import "./styles.scss";

function FilmDetail(props) {
  const dispatch = useDispatch();
  const movieId = props.match.params.id;

  useEffect(() => {
    dispatch(getMovieDataById(movieId));
    dispatch(getCommentDataByMovie(movie.name));
  }, [dispatch, movieId, movie]);

  const movie = useSelector((state) => state.movie.movieById);
  const user = useSelector((state) => state.user.user.username);
  const [value, setValue] = useState("");
  const { TextArea } = Input;
  const auth = useSelector((state) => state.user.isLoggedIn);
  const movieComments = useSelector((state) => state.comment.comments);

  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={(props) => <Comment {...props} />}
    />
  );

  function handleSubmit() {
    if (!value) {
      return;
    }

    const commentAdd = {
      content: value,
      author: user,
      movie: movie.name,
    };

    setValue("");

    if (auth === true) {
      dispatch(addComment(commentAdd));
    } else {
      message.error("Vui lòng đăng nhập");
    }
  }

  const breadLinks = {
    links: [
      {
        href: "/" + movie.status,
      },
    ],
    current: movie.name,
  };

  return (
    <div className="film__detail">
      <BreadCrump breadLinks={breadLinks} />

      <div className="film__detail__container container">
        <h1 className="film__detail__title">Nội Dung Phim</h1>

        <FilmCardHorizontal movie={movie} />

        <p className="film__detail__intro">{movie.intro}</p>

        {movieComments.length > 0 && <CommentList comments={movieComments} />}
        <Comment
          content={
            <>
              <Form.Item>
                <TextArea
                  rows={4}
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" onClick={handleSubmit} type="primary">
                  Add Comment
                </Button>
              </Form.Item>
            </>
          }
        />
      </div>
    </div>
  );
}

export default FilmDetail;
