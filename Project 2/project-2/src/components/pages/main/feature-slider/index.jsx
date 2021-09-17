import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./styles.scss";

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 674,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const logoPrice = "/assets/logo/logo-price/ribon-49k.png";

function FeatureSlider({ src: { isMovie, list } }) {
  const slideShow = list.map((item, index) => {
    if (isMovie) {
      return (
        <div key={index} className="slide__container">
          <img className="ribbon" src={logoPrice} alt="ribbon price" />
          <img className="slide__movie" src={item} alt="banner" />
        </div>
      );
    } else {
      return (
        <div key={index} className="slide__container">
          <img className="slide__event" src={item} alt="banner" />
        </div>
      );
    }
  });

  return (
    <div className="feature-slider container">
      <Carousel
        className="slide"
        autoplay
        arrows
        nextArrow={<RightOutlined />}
        prevArrow={<LeftOutlined />}
        {...settings}
      >
        {slideShow}
      </Carousel>
    </div>
  );
}

export default FeatureSlider;
