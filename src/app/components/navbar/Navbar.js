// import "./Navbar.scss";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavTools from "./NavTools";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col col-lg-2 order-1">
            <NavLogo />
          </div>
          <div className="col-2 col-lg-5 order-3 order-lg-2">
            <NavMenu />
          </div>
          <div className="col col-lg-2 order-2 order-lg-3">
            <NavTools />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
