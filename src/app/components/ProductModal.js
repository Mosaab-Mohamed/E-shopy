import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import icons from "../../assets/icons/symbol-defs.svg";
import Stars from "./product/Stars";
import ItemCounter from "./ItemCounter";
import WishlistBtn from "./WishlistBtn";
import CartBtn from "./CartBtn";

import { watchProduct, addToCart } from "../actions/index";

const ProductModal = ({ product, cartItems, watchProduct, addToCart }) => {
  // close state to handle show and disappearing of productModal
  const [close, setClose] = useState(false);

  useEffect(() => {
    // handle closing productModal on pressing Esc button
    const closeModalOnEsc = (e) => e.key === "Escape" && closeModal();

    window.addEventListener("keydown", closeModalOnEsc);

    return () => {
      window.removeEventListener("keydown", closeModalOnEsc);
    };

    // eslint-disable-next-line
  }, []);

  // handle closing productModal
  const closeModal = () => {
    setClose(true);
    setTimeout(() => {
      watchProduct(null);
      setClose(false);
    }, 400);
  };

  return (
    product &&
    ReactDOM.createPortal(
      <div className="productModal " onClick={closeModal}>
        <div
          className={`productModal__container ${close ? "closed" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="productModal__top">
            <svg className="icon icon-clear" onClick={closeModal}>
              <use xlinkHref={`${icons}#icon-clear`}></use>
            </svg>
          </div>
          <div className="productModal__body mb-3">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-4">
                  <div className="productModal__image">
                    <img src={product.img_url} alt="product" />
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <div className="productModal__info">
                    <h1 className="productModal__name ">{product.name}</h1>
                    <div className="productModal__category mb-3">
                      {product.category}
                    </div>
                    <div className="productModal__rating mb-3">
                      <Stars rating={product.rating} />
                    </div>
                    <div
                      className={`productModal__price ${
                        product.price.offer ? "productModal__price--offer" : ""
                      } mb-3`}
                    >
                      <div className="productModal__price-normal me-3">
                        ${product.price.normal}
                      </div>
                      <div className="productModal__price-sale me-3">
                        {product.price.offer?.sale}
                      </div>
                      <div className="productModal__price-discount">
                        {product.price.offer?.discount}
                      </div>
                    </div>

                    <div className="productModal__description">
                      {product.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="productModal__bottom py-3">
            {Object.values(cartItems).every(
              (item) => item.id !== product.id
            ) ? (
              <CartBtn design="btn" product={product} />
            ) : (
              <ItemCounter product={product} />
            )}

            <div className={`productModal__wishlist`}>
              <WishlistBtn design="btn" product={product} />
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("product-modal")
    )
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.watchedProduct,
    cartItems: state.cart.items,
  };
};
export default connect(mapStateToProps, {
  watchProduct,
  addToCart,
})(ProductModal);
