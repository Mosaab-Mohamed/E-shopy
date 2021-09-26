import { connect } from "react-redux";
import { Link } from "react-router-dom";
import icons from "../../../assets/icons/symbol-defs.svg";

const NavTools = ({ cartItems, wishlistItems }) => {
  return (
    <div className="navbar__tools">
      <Link to="/wishlist" className="navbar__tools-wishlist">
        <svg className="icon icon-heart">
          <use xlinkHref={`${icons}#icon-heart`}></use>
        </svg>
        <div className="navbar__wishlist-counter">{wishlistItems.length}</div>
      </Link>
      <Link to="/cart" className="navbar__tools-cart">
        <svg className="icon icon-shopping-basket">
          <use xlinkHref={`${icons}#icon-shopping-basket`}></use>
        </svg>
        <div className="navbar__cart-counter">{cartItems.length}</div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: Object.values(state.cart.items),
    wishlistItems: Object.values(state.wishlist),
  };
};
export default connect(mapStateToProps)(NavTools);
