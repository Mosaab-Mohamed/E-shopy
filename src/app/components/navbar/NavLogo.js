import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/" className="navbar__logo">
      <img
        className="navbar__logo-img"
        src="./images/icon-logo.png"
        alt="logo"
      ></img>
      <div className="navbar__logo-name">E-shopy</div>
    </Link>
  );
};

export default NavLogo;
