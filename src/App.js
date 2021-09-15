import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { useGlobalContext } from "./store/Context";
import Scrollbar from "smooth-scrollbar";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Error from "../src/pages/Error";

const smoothScrollLoader = () => {
  Scrollbar.init(document.querySelector(".App"), {
    damping: 0.05,
    continuousScrolling: false,
  });
};

function App() {
  const { isLoggedIn, loginData } = useGlobalContext();

  useEffect(() => {
    smoothScrollLoader();
  }, []);
  return (
    <div className="App">
      <main className="main-scrollbar">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/login">{!isLoggedIn ? <Login /> : <Error />}</Route>
            <Route path="/collection">
              {isLoggedIn ? <Collection loginData={loginData} /> : <Error />}
            </Route>
            <Route path="/profile">
              {isLoggedIn ? <Profile loginData={loginData} /> : <Error />}
            </Route>
            <Route path="/cart">
              {isLoggedIn ? <Cart loginData={loginData} /> : <Error />}
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
