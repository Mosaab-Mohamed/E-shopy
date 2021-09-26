import { connect } from "react-redux";
import icons from "../../assets/icons/symbol-defs.svg";
import CartBtn from "../components/CartBtn";
import ItemCounter from "../components/ItemCounter";
import { deleteFromWishlist, setMessage } from "../actions";

const Wishlist = ({
  wishlistItems,
  cartItems,
  deleteFromWishlist,
  setMessage,
}) => {
  // Handle delete of the product from the wishlist
  const handleDeleteFromWishlist = (product) => {
    deleteFromWishlist(product);
    setMessage({
      content: `The ${product.name} has been removed from your wishlist`,
      icon: "icon-notification",
    });
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="wishlist">
      <div
        className="wishlist__header"
        style={{ backgroundImage: "url(./images/breadcrumb-bg.jpg)" }}
      >
        <h1>WISHLIST PAGE</h1>
      </div>
      {Object.values(wishlistItems).length > 0 ? (
        <div className="wishlist__body">
          <table className="wishlist__items">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>UNIT PRICE </th>
                <th>Add to cart</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {Object.values(wishlistItems).map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="wishlist__item-product">
                      <img src={item.img_url} alt="product" />
                      <div>{item.name}</div>
                    </td>
                    <td className="wishlist__item-price">
                      {item.price.offer
                        ? item.price.offer.sale
                        : item.price.normal}
                    </td>
                    <td>
                      <div className="wishlist__addToCart">
                        {Object.values(cartItems).every(
                          (cartItem) => cartItem.id !== item.id
                        ) ? (
                          <CartBtn design="btn" product={item} />
                        ) : (
                          <ItemCounter product={item} />
                        )}
                      </div>
                    </td>

                    <td className="wishlist__item-delete">
                      <svg
                        className="icon icon-trash"
                        onClick={() => handleDeleteFromWishlist(item)}
                      >
                        <use xlinkHref={`${icons}#icon-trash`}></use>
                      </svg>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="wishlist--empty">Your wishlist is empty</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlistItems: state.wishlist,
    cartItems: state.cart.items,
  };
};

export default connect(mapStateToProps, {
  deleteFromWishlist,
  setMessage,
})(Wishlist);
