import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import icons from "../../../assets/icons/symbol-defs.svg";

const NavMenu = () => {
  const [open, setOpen] = useState(window.innerWidth > 991 ? true : false);

  useEffect(() => {
    // Close Menu in Mobile Screen onClik || onEscPress || onWindowResize
    const closeOnClick = () => setOpen(false);
    const closeOnEsc = (e) => e.key === "Escape" && setOpen(false);
    const toggleOnResize = () =>
      window.innerWidth > 991 ? setOpen(true) : setOpen(false);

    // Adding Closing Menu Functions to window
    window.addEventListener("click", closeOnClick);
    window.addEventListener("keydown", closeOnEsc);
    window.addEventListener("resize", toggleOnResize);

    // Clean Up Function
    return () => {
      window.removeEventListener("click", closeOnClick);
      window.removeEventListener("keydown", closeOnEsc);
      window.removeEventListener("resize", toggleOnResize);
    };
  }, []);

  const toggleOnClick = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ul
        className={`navbar__menu ${open ? "active" : "deactive"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <li className="navbar__menu-item">
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink to="/shop" activeClassName="active">
            Shop
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink to="/about-us" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink to="/contact-us" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="navbar__toggler">
        <svg
          className={`icon ${open ? "icon-clear" : "icon-menu"}`}
          onClick={toggleOnClick}
        >
          <use
            xlinkHref={`${icons}#${open ? "icon-clear" : "icon-menu"}`}
          ></use>
        </svg>
      </div>
    </React.Fragment>
  );
};

export default NavMenu;
