import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./styles.scss";

const imgSrc = [
  "assets/img/slide/980x448_113.jpg",
  "assets/img/slide/980x448_117.jpg",
  "assets/img/slide/cgv-production-team-midnite-streetfood-980x448_3.jpg",
  "assets/img/slide/pannadau-980x448.jpg",
];

const slideShow = imgSrc.map((item, index) => {
  return (
    <div key={index}>
      <img className="slide__img" src={item} alt="banner" />
    </div>
  );
});

function Slider() {
  return (
    <div
      className="slider container"
      style={{
        background: `url("/assets/img/background/bg_c_bricks.png")`,
      }}
    >
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
  );
}

export default Slider;
