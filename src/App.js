import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles/style.css";
import ScrollToTop from "./components/ScrollToTop";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Newslist from "./pages/Newslist/Newslist";
import Newslistback from "./pages/Newslist/Newslistback/Newslistback";
import NewslistbackAdd from "./pages/Newslist/Newslistback/NewslistbackAdd";
import NewslistbackEdit from "./pages/Newslist/Newslistback/NewslistbackEdit";
import Votelist from "./pages/Newslist/Votelist/Votelist";
import Cooperationform from "./pages/Newslist/Cooperationform/Cooperationform";
import Products from "./pages/Products/Products";
import Product_detail from "./pages/Products/Product_detail";
import Booking from "./pages/Booking/Booking";
import Recipes from "./pages/Recipes/Recipes/Recipes";
import Recipesback from "./pages/Recipes/RecipesBack/recipesback";
import RecipesbackAdd from "./pages/Recipes/RecipesBack/recipesbackAdd";
import RecipesbackEdit from "./pages/Recipes/RecipesBack/recipesbackEdit";
import Box from "./pages/Recipes/Box/Box";
import Store from "./pages/Store/Store";
import Login from "./pages/Member/Login";
import ClientCenter from "./pages/Member/clientCenter";
import Booking_information from "./pages/Booking/Booking_information";
import Booking_finish from "./pages/Booking/Booking_finish";
import Cart from "./pages/Cart/Cart";
import Cart_info from "./pages/Cart/Cart_info";
import Cart_order from "./pages/Cart/Cart_order";
import Cart_confirm from "./pages/Cart/Cart_confirm";
import Signup from "./pages/Member/Signup";
import Contact from "./pages/Contact/Contact";

//購物車
// 匯入 Cart 要用的 ContextProvider
import { CartProvider } from "./pages/Cart/utils/useCart";
import { SecondCartProvider } from "./pages/Cart/utils/useSecondCart";

function App() {
  const url = window.location.href;
  const ary1 = url.split("=");
  const id = ary1[1];
  // 會員登入用的狀態 auth=true代表登入
  const [auth, setAuth] = useState(false);
  // const sesStorage  = sessionStorage;
  return (
    <SecondCartProvider localStorageKey="secondCart">
      <CartProvider>
        <div className="App">
          <Nav auth={auth} />

          <ScrollToTop>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>

              <Route path="/Newslist" exact>
                <Newslist />
              </Route>
              <Route path="/Newslistback" exact>
                <Newslistback />
              </Route>
              <Route path="/NewslistbackAdd" exact>
                <NewslistbackAdd />
              </Route>
              <Route path="/NewslistbackEdit" exact>
                <NewslistbackEdit />
              </Route>
              <Route path="/Cooperationform" exact>
                <Cooperationform />
              </Route>
              <Route path="/Votelist" exact>
                <Votelist />
              </Route>
              <Route path="/products" exact>
                <Products auth={auth} />
              </Route>
              <Route path="/products/product_detail/:productId" exact>
                <Product_detail auth={auth} />
              </Route>
              <Route path="/cart" exact>
                <Cart />
              </Route>
              <Route path="/cart/cart_info" exact>
                <Cart_info />
              </Route>
              <Route path="/cart/cart_info/cart_order" exact>
                <Cart_order />
              </Route>
              <Route path="/cart/cart_info/cart_order/cart_confirm" exact>
                <Cart_confirm />
              </Route>
              <Route path="/booking" exact>
                <Booking auth={auth} />
              </Route>
              <Route path="/booking/booking_information" exact>
                <Booking_information />
              </Route>
              <Route path="/booking/booking_information/booking_finish" exact>
                <Booking_finish />
              </Route>
              <Route path="/recipes" exact>
                <Recipes />
              </Route>
              <Route path="/recipes/id=:Recipes_ID" exact>
                <Box />
              </Route>
              <Route path="/recipesback" exact>
                <Recipesback />
              </Route>
              <Route path="/recipesbackAdd" exact>
                <RecipesbackAdd />
              </Route>
              <Route path="/recipesbackEdit/id=:Recipes_ID" exact>
                <RecipesbackEdit />
              </Route>
              <Route path="/store" exact>
                <Store />
              </Route>
              <Route path="/member/login" exact>
                <Login setAuth={setAuth} auth={auth} />
              </Route>
              <Route path="/member/clientCenter" exact>
                <ClientCenter auth={auth} />
              </Route>
              <Route path="/contact" exact>
                <Contact />
              </Route>
              <Route path="/Signup" exact>
                <Signup />
              </Route>
            </Switch>
          </ScrollToTop>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Footer />
        </div>
      </CartProvider>
    </SecondCartProvider>
  );
}

export default App;
