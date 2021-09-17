import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewDataById } from "../../../redux/thunks/news.thunk";
import "./styles.scss";

function NewsDetail(props) {
  const dispatch = useDispatch();
  const newById = useSelector((state) => state.new.newById);
  const newID = props.match.params.id;

  useEffect(() => {
    dispatch(getNewDataById(newID));
  }, [newID]);

  return (
    <div className="news-detail container">
      <img className="card__img" src={newById.srcDetail} alt="banner" />
      <div className="card__body">{newById.content}</div>
    </div>
  );
}

export default NewsDetail;
