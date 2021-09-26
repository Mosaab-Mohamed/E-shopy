import { connect } from "react-redux";
import icons from "../../../assets/icons/symbol-defs.svg";
import CartBtn from "../CartBtn";
import WishlistBtn from "../WishlistBtn";
import ItemCounter from "../ItemCounter";

// Importing actions of Cart & Wishlist
import { watchProduct } from "../../actions/index";

const ProductTools = ({ product, cartItems, watchProduct }) => {
  const itemAddedToCart = Object.values(cartItems).every(
    (item) => item.id !== product.id
  );

  return (
    <>
      <div className="product__tools">
        <div className="product__tools-group">
          <div
            className="product__tools-item product__watch"
            onClick={() => watchProduct(product)}
          >
            <svg className="icon icon-eye">
              <use xlinkHref={`${icons}#icon-eye`}></use>
            </svg>
          </div>
          <div className="product__tools-item product__like">
            <WishlistBtn product={product} />
          </div>
          <div className="product__tools-item product__add">
            {itemAddedToCart && <CartBtn product={product} />}
          </div>
        </div>

        {!itemAddedToCart && <ItemCounter product={product} />}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
  };
};

export default connect(mapStateToProps, {
  watchProduct,
})(ProductTools);
