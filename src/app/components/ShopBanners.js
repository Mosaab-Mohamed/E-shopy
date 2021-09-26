import { Link } from "react-router-dom";

const ShopBanners = () => {
  return (
    <div className="shop-banners py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-3">
            <div
              className="shop-banners__card shop-banners__card--vertical"
              style={{ backgroundImage: 'url("./images/shop-banner1.jpg")' }}
            >
              <div className="shop-banners__overlay">
                <h2 className="shop-banners__name">Fresh Juice</h2>
                <Link to="/shop">
                  <button className="shop-banners__button">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div
              className="shop-banners__card mb-3"
              style={{ backgroundImage: 'url("./images/shop-banner2.jpg")' }}
            >
              <div className="shop-banners__overlay">
                <h2 className="shop-banners__name">New Juice</h2>
                <Link to="/shop">
                  <button className="shop-banners__button">Shop Now</button>
                </Link>
              </div>
            </div>
            <div
              className="shop-banners__card"
              style={{ backgroundImage: 'url("./images/shop-banner3.jpg")' }}
            >
              <div className="shop-banners__overlay">
                <h2 className="shop-banners__name">Fresh Fruits</h2>
                <Link to="/shop">
                  <button className="shop-banners__button">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanners;
