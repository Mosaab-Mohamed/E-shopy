import { connect } from "react-redux";
import icons from "../../assets/icons/symbol-defs.svg";
import ItemCounter from "../components/ItemCounter";
import { deleteFromCart, setMessage } from "../actions";

const Cart = ({
  cartItems,
  cartTotal,
  cartCount,
  deleteFromCart,
  setMessage,
}) => {
  // Handle delete of the product from the cart
  const handleDeleteFromCart = (product) => {
    deleteFromCart(product);
    setMessage({
      content: `The ${product.name} has been removed from your cart`,
      icon: "icon-notification",
    });
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="cart">
      <div
        className="cart__header"
        style={{ backgroundImage: "url(./images/breadcrumb-bg.jpg)" }}
      >
        <h1>CART PAGE</h1>
      </div>
      {Object.values(cartItems).length > 0 ? (
        <div className="cart__body">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-9 mb-3">
                <div className="cart__items">
                  <table>
                    <thead>
                      <tr>
                        <th>PRODUCT</th>
                        <th>UNIT PRICE </th>
                        <th>QTY</th>
                        <th>SUBTOTAL</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {Object.values(cartItems).map((item) => {
                        return (
                          <tr key={item.id}>
                            <td className="cart__item-product">
                              <img src={item.img_url} alt="product" />
                              <div>{item.name}</div>
                            </td>
                            <td className="cart__item-price">
                              {item.price.offer
                                ? item.price.offer.sale
                                : item.price.normal}
                            </td>
                            <td>
                              <div className="cart__item-counter">
                                <ItemCounter product={item} />
                              </div>
                            </td>
                            <td className="cart__item-subtotal">
                              {(item.price.offer
                                ? item.price.offer.sale
                                : item.price.normal) * item.quantity}
                            </td>
                            <td className="cart__item-delete">
                              <svg
                                className="icon icon-trash"
                                onClick={() => handleDeleteFromCart(item)}
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
              </div>
              <div className="col-12 col-lg-3">
                <div className="cart__total">
                  <div className="cart__total-header">Cart Totals</div>
                  <div className="cart__total-body">
                    <div className="cart__total-row">
                      <span>Products</span>
                      <span>{Object.values(cartItems).length} products</span>
                    </div>
                    <div className="cart__total-row">
                      <span>Items</span>
                      <span>{cartCount} Items</span>
                    </div>
                    <div className="cart__total-row">
                      <span>Total</span>
                      <span>${cartTotal}</span>
                    </div>
                    <button className="cart__total-submit">
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart--empty">Your cart is empty</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
    cartTotal: state.cart.total,
    cartCount: state.cart.count,
  };
};

export default connect(mapStateToProps, { deleteFromCart, setMessage })(Cart);
