import { useSelector } from "react-redux";
import TheaterTable from "../../components/pages/theater-info/theater-table/index";
import LogoTitle from "../../components/pages/main/logo-title/index";
import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./styles.scss";

const backgroundSrc = "/assets/img/theater-background/Untitled-1.png";

const titleSrc = "/assets/logo/logo-title/h3_theater.gif";

const imgSrc = [
  "/assets/img/cinema-slide/img_0027_2a_2_1.jpg",
  "/assets/img/cinema-slide/img_2893a_2_1.jpg",
  "/assets/img/cinema-slide/img_2915a_2_1.jpg",
  "/assets/img/cinema-slide/img_9935_2a_2_1.jpg",
];

const slideShow = imgSrc.map((item, index) => {
  return (
    <div key={index}>
      <img className="slide__img" src={item} alt="banner" />
    </div>
  );
});

function TheaterInfo() {
  const theaters = useSelector((state) => state.theater.theaters);
  const [theaterHidden, setTheaterHidden] = React.useState(false);
  const [theaterTilte, setTheaterTitle] = React.useState();

  return (
    <div className="theater__info container">
      <img
        className="theater__info__background"
        src={backgroundSrc}
        alt="background"
      />

      <TheaterTable
        theaters={theaters}
        setTheaterHidden={setTheaterHidden}
        setTheaterTitle={setTheaterTitle}
      />

      <div
        className="theater__slide"
        style={{ display: theaterHidden ? "flex" : "none" }}
      >
        <LogoTitle src={titleSrc} />

        <h2 className="theater__title">{theaterTilte}</h2>

        <div className="slider">
          <Carousel
            className="slide"
            autoplay
            arrows
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
          >
            {slideShow}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default TheaterInfo;
