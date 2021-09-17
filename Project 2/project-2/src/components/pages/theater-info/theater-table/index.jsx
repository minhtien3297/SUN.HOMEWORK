import { List } from "antd";
import React from "react";

import "./styles.scss";

function TheaterTable(props) {
  const theaters = props.theaters;
  const [listTheater, setListTheater] = React.useState();

  function filterTheater(city) {
    let listTheaters = theaters.filter((item) => item.name === city);

    listTheaters.map((item) => setListTheater(item.list));
  }

  function setTitleAndDisplay(title) {
    props.setTheaterHidden(true);
    props.setTheaterTitle(title);
  }

  return (
    <div className="theater__info__table">
      <h1 className="theater__info__title">CGV CINEMA</h1>

      <div className="table">
        <List
          className="table__grid"
          grid={{ gutter: 70, column: 5 }}
          dataSource={theaters}
          renderItem={(item, index) => (
            <List.Item
              key={index}
              actions={[
                <a
                  className="table__item"
                  href="#."
                  onClick={() => filterTheater(item.name)}
                >
                  {item.name}
                </a>,
              ]}
            ></List.Item>
          )}
        />
      </div>

      <div className="table__child">
        <List
          className="table__grid"
          grid={{ gutter: 70, column: 5 }}
          dataSource={listTheater}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a
                  className="table__item"
                  href="#."
                  onClick={() => setTitleAndDisplay(item)}
                >
                  {item}
                </a>,
              ]}
            ></List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default TheaterTable;
