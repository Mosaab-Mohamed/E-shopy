import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index";
import Banner from "../components/home-banner/Banner";
import Shelf from "../components/Shelf";
import ShopBanners from "../components/ShopBanners";

const Home = ({ products, fetchProducts }) => {
  useEffect(() => {
    products.length === 0 && fetchProducts();

    window.scrollTo(0, 0);

    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <Banner />
      <Shelf
        shelfName="New Products"
        products={products.filter((product) => product.new === true)}
      />
      <ShopBanners />
      <Shelf
        shelfName="Best Selling"
        products={products.filter((product) => product.bestSelling === true)}
      />

      <Shelf
        shelfName="Popular Products"
        products={products.filter((product) => product.popular === true)}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { fetchProducts })(Home);
