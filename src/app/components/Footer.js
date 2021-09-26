import { NavLink } from "react-router-dom";
import icons from "../../assets/icons/symbol-defs.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-between ">
          <div className="col-4 col-md-3">
            <NavLink to="/" className="footer__logo">
              <img
                className="footer__logo-img me-3"
                src="./images/icon-logo.png"
                alt="logo"
              ></img>
              <div className="footer__logo-name">E-shopy</div>
            </NavLink>
          </div>
          <div className="col-4 col-md-3">
            <div className="footer__menu">
              <h4 className="footer__header mb-4">Site Map</h4>
              <ul>
                <li className="footer__menu-item">
                  <NavLink to="/" activeClassName="active" exact>
                    Home
                  </NavLink>
                </li>
                <li className="footer__menu-item">
                  <NavLink to="/shop" activeClassName="active">
                    Shop
                  </NavLink>
                </li>
                <li className="footer__menu-item">
                  <NavLink to="/about-us" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="footer__menu-item">
                  <NavLink to="/contact-us" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-4 col-md-3">
            <div className="footer__social">
              <h4 className="footer__header mb-4">Follow Us</h4>
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
      </div>
    </div>
  );
};

export default Footer;
