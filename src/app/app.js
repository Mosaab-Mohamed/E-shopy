import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../styles/app.scss";
import { useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateCartFromLocalStorage,
  updateWishlistFromLocalStorage,
} from "./actions/index";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home";
import Cart from "./views/Cart";
import Wishlist from "./views/Wishlist";
import Shop from "./views/Shop";
import ContactUs from "./views/ContactUs";
import About from "./views/About";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import MessageModal from "./components/MessageModal";

const App = ({
  cart,
  wishlist,
  updateCartFromLocalStorage,
  updateWishlistFromLocalStorage,
}) => {
  useEffect(() => {
    updateCartFromLocalStorage(
      JSON.parse(localStorage.getItem("e-shopy_cart"))
    );
    updateWishlistFromLocalStorage(
      JSON.parse(localStorage.getItem("e-shopy_wishlist"))
    );

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("e-shopy_cart", JSON.stringify(cart));
    localStorage.setItem("e-shopy_wishlist", JSON.stringify(wishlist));
    // eslint-disable-next-line
  }, [cart, wishlist]);
  // console.log(cart);

  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/wishlist" exact component={Wishlist} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/about-us" exact component={About} />
      </Switch>
      <ProductModal />
      <MessageModal />
      <Footer />
    </HashRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    wishlist: state.wishlist,
  };
};

export default connect(mapStateToProps, {
  updateCartFromLocalStorage,
  updateWishlistFromLocalStorage,
})(App);
