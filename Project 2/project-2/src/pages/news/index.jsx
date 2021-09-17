import { useSelector } from "react-redux";
import NewsCard from "../../components/pages/news/news-card/index";
import LogoTitle from "../../components/pages/main/logo-title/index";
import { List } from "antd";
import React from "react";
import "./styles.scss";

const newsTitle = "/assets/logo/logo-title/bg-new-offer-vn.png";

function News() {
  const news = useSelector((state) => state.new.news);

  return (
    <div className="news">
      <LogoTitle src={newsTitle} />

      <div className="container">
        <List
          pagination={{
            pageSize: 8,
          }}
          className="film-grid"
          grid={{ gutter: 35, column: 4 }}
          dataSource={news}
          renderItem={(item) => (
            <List.Item>
              <NewsCard new={item} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default News;
