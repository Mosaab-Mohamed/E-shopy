import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index.js";
import icons from "../../assets/icons/symbol-defs.svg";
import Product from "../components/product/Product";

const Shop = ({ products, fetchProducts }) => {
  const [category, setCategory] = useState("all");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(Infinity);

  useEffect(() => {
    products.length === 0 && fetchProducts();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  const filteredProducts = () => {
    return products
      .filter(
        (product) =>
          (category === product.category || category === "all") &&
          (product.price.offer
            ? product.price.offer.sale
            : product.price.normal) >= min &&
          (product.price.offer
            ? product.price.offer.sale
            : product.price.normal) <= max
      )
      .map((product) => {
        return (
          <div className="col-lg-4 col-md-6 col-12" key={product.id}>
            <Product product={product} />
          </div>
        );
      });
  };

  return (
    <div className="shop">
      <div
        className="shop__banner"
        style={{ backgroundImage: "url(./images/breadcrumb-bg.jpg)" }}
      >
        <h1>SHOP PAGE</h1>
      </div>

      <div className="shop__body py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="shop__filter">
                <h3 className="shop__filter-header mb-3">
                  Filter By{" "}
                  <svg className="icon icon-filter">
                    <use xlinkHref={`${icons}#icon-filter`} />
                  </svg>{" "}
                </h3>
                <div className="shop__filter__method mb-5">
                  <h4 className="shop__filter__method-name p-3">CATEGORIES</h4>
                  <ul className="shop__filter__method-list">
                    <li
                      className={`shop__filter__method-item p-2 ${
                        category === "all" ? "active" : ""
                      }`}
                      onClick={() => setCategory("all")}
                    >
                      All
                    </li>
                    {["fruits", "vegetables", "juice", "snacks"].map(
                      (item, index) => (
                        <li
                          className={`shop__filter__method-item p-2 ${
                            category === item ? "active" : ""
                          }`}
                          key={index}
                          onClick={() => setCategory(item)}
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="shop__filter__method">
                  <h4 className="shop__filter__method-name p-3">PRICE</h4>
                  <div className="shop__filter__method-form">
                    <div className="shop__filter__method-field mb-3">
                      <label className="shop__filter__method-label">Min</label>
                      <input
                        type="text"
                        className="shop__filter__method-input"
                        placeholder="Minimun Price"
                        onChange={(e) =>
                          setMin(e.target.value > 0 ? e.target.value : 0)
                        }
                      />
                    </div>
                    <div className="shop__filter__method-field">
                      <label className="shop__filter__method-label">Max</label>
                      <input
                        type="text"
                        className="shop__filter__method-input"
                        placeholder="Max Price"
                        onChange={(e) =>
                          setMax(e.target.value > 0 ? e.target.value : Infinity)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="shop__products">
                <div className="row">{filteredProducts()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { fetchProducts })(Shop);
