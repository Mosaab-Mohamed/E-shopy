import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import Product from "./product/Product";

SwiperCore.use([Navigation]);

const Shelf = ({ products, shelfName }) => {
  return (
    <div className="shelf py-5">
      <div className="container">
        <h1 className="shelf__header">{shelfName}</h1>
        <Swiper
          navigation={true}
          breakpoints={{
            992: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Shelf;
