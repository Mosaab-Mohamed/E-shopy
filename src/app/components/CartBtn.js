import { connect } from "react-redux";
import icons from "../../assets/icons/symbol-defs.svg";
import { addToCart, setMessage } from "../actions/index";

export const CartBtn = ({
  design,
  product,
  addToCart,
  setMessage,
  cartItems,
}) => {
  // Handle add of the product to the cart
  const handleAddToCart = () => {
    addToCart(product);
    setMessage({
      content: `The ${product.name} has been added to your cart`,
      icon: "icon-check_circle_outline",
    });
    setTimeout(() => setMessage(null), 3000);
  };

  const itemAdded = Object.values(cartItems).some(
    (item) => item.id === product.id
  );

  return (
    <div
      className={`cartBtn ${
        design === "btn" ? "cartBtn--design-btn" : "cartBtn--design-icon"
      }`}
      onClick={handleAddToCart}
    >
      {design === "btn" && !itemAdded ? "Add to" : ""}
      <svg className="icon icon-shopping-basket">
        <use xlinkHref={`${icons}#icon-shopping-basket`}></use>
      </svg>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
  };
};

export default connect(mapStateToProps, { addToCart, setMessage })(CartBtn);
