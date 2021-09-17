import { Card } from "antd";
import { Link } from "react-router-dom";
import { CalendarOutlined } from "@ant-design/icons";
import "./styles.scss";

const { Meta } = Card;

function NewsCard({ new: { src, day, id } }) {
  return (
    <div className="news-card">
      <Card
        className="card"
        cover={
          <div>
            <Link to={"/news-detail/" + id}>
              <img className="card__img" alt="ưu đãi" src={src} />
            </Link>
          </div>
        }
      >
        <Meta
          description={
            <div className="description">
              <span className="bold">
                <CalendarOutlined />
              </span>
              <span className="day">{day}</span>
            </div>
          }
        />
      </Card>
    </div>
  );
}

export default NewsCard;
