import Stars from "./Stars";
import ProductTools from "./ProductTools";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product__img">
        <img src={product.img_url} alt="product" />
      </div>

      <div className="product__info">
        <p className="product__category">{product.category}</p>
        <h4 className="product__name">{product.name}</h4>
        <div className="product__rating">
          <Stars rating={product.rating} />
        </div>
        <div
          className={`product__price ${
            product.price.offer ? "product__price--offer" : ""
          }`}
        >
          <div className="product__price-normal me-3">
            ${product.price.normal}
          </div>
          <div className="product__price-sale me-3">
            {product.price.offer && `$${product.price.offer.sale}`}
          </div>
          <div className="product__price-discount">
            {product.price.offer?.discount}
          </div>
        </div>
      </div>

      <ProductTools product={product} />
    </div>
  );
};

export default Product;
