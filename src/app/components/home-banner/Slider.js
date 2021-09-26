import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper modules
SwiperCore.use([Navigation]);

const Slider = () => {
  return (
    <Swiper navigation={true}>
      <SwiperSlide>
        <div className="banner__slide">
          <img
            src="./images/banner1.jpg"
            alt="banner-product"
            className="banner__img"
          />
          <div className="banner__content">
            <p className="mb-2">100% NATURAL AND PURE</p>
            <h1 className="mb-4">
              Fresh Mango Juice <br /> Just Fruit
            </h1>
            <Link to="/shop">
              <button>SHOP NOW</button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner__slide">
          <img
            src="./images/banner2.jpg"
            alt="banner-product"
            className="banner__img"
          />
          <div className="banner__content">
            <p className="mb-2">100% NATURAL AND PURE</p>
            <h1 className="mb-4">
              Fresh Lemonada <br /> Summer Drinks
            </h1>
            <Link to="/shop">
              <button>SHOP NOW</button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner__slide">
          <img
            src="./images/banner3.jpg"
            alt="banner-product"
            className="banner__img"
          />
          <div className="banner__content">
            <p className="mb-2">100% NATURAL AND PURE</p>
            <h1 className="mb-4">
              HeartBiet Slow Juice <br /> Just Fruit
            </h1>
            <Link to="/shop">
              <button>SHOP NOW</button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
