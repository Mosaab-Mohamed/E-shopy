import icons from "../../assets/icons/symbol-defs.svg";

const About = () => {
  return (
    <div className="about">
      <div
        className="about__banner"
        style={{ backgroundImage: "url(./images/breadcrumb-bg.jpg)" }}
      >
        <h1>ABOUT US</h1>
      </div>

      <div className="about__pros py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="about__pros-item">
                <svg className="icon icon-local_shipping">
                  <use xlinkHref={`${icons}#icon-local_shipping`}></use>
                </svg>
                <div className="about__pros-content">
                  <h5>Free Shipping </h5>
                  <p>On all orders over $75.00</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="about__pros-item">
                <svg className="icon icon-swap">
                  <use xlinkHref={`${icons}#icon-swap`}></use>
                </svg>
                <div className="about__pros-content">
                  <h5>Free Returns</h5>
                  <p>Returns are free within 9 days</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="about__pros-item">
                <svg className="icon icon-shield">
                  <use xlinkHref={`${icons}#icon-shield`}></use>
                </svg>
                <div className="about__pros-content">
                  <h5>100% Payment Secure</h5>
                  <p>Your payment are safe with us.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="about__pros-item">
                <svg className="icon icon-phone">
                  <use xlinkHref={`${icons}#icon-phone`}></use>
                </svg>
                <div className="about__pros-content">
                  <h5>Support 24/7</h5>
                  <p>Contact us 24 hours a day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about__story py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-5">
              <div className="about__story-img">
                <img src="./images/about.jpg" alt="about" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="about__story-text">
                <h2 className="mb-3">WELCOME TO E-SHOPY</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore aperiam fugit consequuntur voluptatibus ex sint iure
                  in, distinctio sed dolorem aspernatur veritatis repellendus
                  dolorum voluptate, animi libero officiis eveniet accusamus
                  recusandae. Temporibus amet ducimus sapiente voluptatibus
                  autem dolorem magnam quas, porro suscipit. Quibusdam culpa
                  asperiores exercitationem architecto quo, temporibus vel!
                  porro suscipit. Quibusdam culpa asperiores exercitationem
                  architecto quo, temporibus vel!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about__brands py-5">
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-2">
              <img src="./images/brand1.jpg" alt="brand" />
            </div>
            <div className="col-4 col-md-2">
              <img src="./images/brand2.jpg" alt="brand" />
            </div>
            <div className="col-4 col-md-2">
              <img src="./images/brand3.jpg" alt="brand" />
            </div>
            <div className="col-4 col-md-2">
              <img src="./images/brand4.jpg" alt="brand" />
            </div>
            <div className="col-4 col-md-2">
              <img src="./images/brand5.jpg" alt="brand" />
            </div>
            <div className="col-4 col-md-2">
              <img src="./images/brand6.jpg" alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
