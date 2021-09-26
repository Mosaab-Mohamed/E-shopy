import icons from "../../../assets/icons/symbol-defs.svg";

const Pros = () => {
  return (
    <div className="banner__pros d-none d-lg-flex">
      <div className="banner__pros-item">
        <svg className="icon icon-local_shipping">
          <use xlinkHref={`${icons}#icon-local_shipping`}></use>
        </svg>
        <div className="banner__pros-content">
          <h5>Free Shipping </h5>
          <p>On all orders over $75.00</p>
        </div>
      </div>

      <div className="banner__pros-item">
        <svg className="icon icon-swap">
          <use xlinkHref={`${icons}#icon-swap`}></use>
        </svg>
        <div className="banner__pros-content">
          <h5>Free Returns</h5>
          <p>Returns are free within 9 days</p>
        </div>
      </div>

      <div className="banner__pros-item">
        <svg className="icon icon-shield">
          <use xlinkHref={`${icons}#icon-shield`}></use>
        </svg>
        <div className="banner__pros-content">
          <h5>100% Payment Secure</h5>
          <p>Your payment are safe with us.</p>
        </div>
      </div>

      <div className="banner__pros-item">
        <svg className="icon icon-phone">
          <use xlinkHref={`${icons}#icon-phone`}></use>
        </svg>
        <div className="banner__pros-content">
          <h5>Support 24/7</h5>
          <p>Contact us 24 hours a day</p>
        </div>
      </div>
    </div>
  );
};

export default Pros;
