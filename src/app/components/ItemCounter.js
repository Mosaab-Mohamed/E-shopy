import { connect } from "react-redux";
import {
  increaseItem,
  decreaseItem,
  deleteFromCart,
  setMessage,
} from "../actions";

const ItemCounter = ({
  product,
  setMessage,
  cartItems,
  increaseItem,
  decreaseItem,
  deleteFromCart,
}) => {
  // Handle delete of the product from the cart
  const handleDeleteFromCart = () => {
    deleteFromCart(product);
    setMessage({
      content: `The ${product.name} has been removed from your cart`,
      icon: "icon-notification",
    });
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="itemCounter">
      <div className="itemCounter__plus" onClick={() => increaseItem(product)}>
        +
      </div>
      <div className="itemCounter__number">
        {cartItems[product.id].quantity}
      </div>
      <div
        className="itemCounter__minus"
        onClick={() => {
          cartItems[product.id].quantity > 1
            ? decreaseItem(product)
            : handleDeleteFromCart();
        }}
      >
        -
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
  };
};

export default connect(mapStateToProps, {
  increaseItem,
  decreaseItem,
  deleteFromCart,
  setMessage,
})(ItemCounter);
