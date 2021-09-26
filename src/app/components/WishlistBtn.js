import { connect } from "react-redux";
import icons from "../../assets/icons/symbol-defs.svg";
import { addToWishlist, deleteFromWishlist, setMessage } from "../actions";

const WishlistBtn = ({
  design,
  product,
  wishlistItems,
  setMessage,
  addToWishlist,
  deleteFromWishlist,
}) => {
  const itemAdded = Object.values(wishlistItems).some(
    (item) => item.id === product.id
  );

  // Handle add || delete of product to the wishlist
  const handleWishlistClick = () => {
    setTimeout(() => setMessage(null), 3000);
    if (itemAdded) {
      deleteFromWishlist(product);
      setMessage({
        content: `The ${product.name} has been removed from your wishlist`,
        icon: "icon-notification",
      });
    } else {
      addToWishlist(product);
      setMessage({
        content: `The ${product.name} has been added to your wishlist`,
        icon: "icon-check_circle_outline",
      });
    }
  };

  return (
    <div
      className={`wishlistBtn ${itemAdded ? "wishlistBtn--added" : ""} ${
        design === "btn"
          ? "wishlistBtn--design-btn"
          : "wishlistBtn--design-icon"
      }`}
      onClick={handleWishlistClick}
    >
      {design === "btn" && !itemAdded
        ? "Add to"
        : design === "btn" && itemAdded
        ? "Remove from"
        : ""}

      <svg className="icon icon-heart">
        <use xlinkHref={`${icons}#icon-heart`}></use>
      </svg>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlistItems: state.wishlist,
  };
};

export default connect(mapStateToProps, {
  addToWishlist,
  deleteFromWishlist,
  setMessage,
})(WishlistBtn);
