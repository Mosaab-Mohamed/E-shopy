import icons from "../../assets/icons/symbol-defs.svg";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div
        className="contactUs__banner"
        style={{ backgroundImage: "url(./images/breadcrumb-bg.jpg)" }}
      >
        <h1>CONTACT US</h1>
      </div>

      <div className="contactUs__body">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-4 py-5">
              <div className="contactUs__info">
                <div className="contactUs__method">
                  <svg className="icon icon-phone me-3">
                    <use xlinkHref={`${icons}#icon-phone`} />
                  </svg>
                  +012 345 678 102
                </div>

                <div className="contactUs__method">
                  <svg className="icon icon-email me-3">
                    <use xlinkHref={`${icons}#icon-email`} />
                  </svg>
                  userName@email.com
                </div>

                <div className="contactUs__method mb-5">
                  <svg className="icon icon-location me-3">
                    <use xlinkHref={`${icons}#icon-location`} />
                  </svg>
                  Address street, Crossroad 123
                </div>

                <div className="contactUs__social">
                  <h2 className="contactUs__social-header mb-3">Follow Us</h2>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg className="icon icon-facebook me-3">
                          <use xlinkHref={`${icons}#icon-facebook`} />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg className="icon icon-twitter me-3">
                          <use xlinkHref={`${icons}#icon-twitter`} />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg className="icon icon-instagram me-3">
                          <use xlinkHref={`${icons}#icon-instagram`} />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg className="icon icon-youtube-play me-3">
                          <use xlinkHref={`${icons}#icon-youtube-play`} />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <form className="contactUs__form py-5">
                <h2 className="mb-3">SEND MESSAGE</h2>
                <input
                  className="contactUs__input"
                  type="text"
                  placeholder="Name*"
                  required
                />
                <input
                  className="contactUs__input"
                  type="email"
                  placeholder="Email*"
                  required
                />
                <input
                  className="contactUs__input"
                  type="text"
                  placeholder="Subject*"
                  required
                />
                <textarea
                  className="contactUs__textarea"
                  name="message"
                  rows="10"
                  placeholder="Your Message*"
                ></textarea>
                <button className="contactUs__submit" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
