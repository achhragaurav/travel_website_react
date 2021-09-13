import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { GlobalContextMain } from "./store/Context";
import Scrollbar from "smooth-scrollbar";
import Collection from "./pages/Collection";
import Profile from "./pages/Profile";

const smoothScrollLoader = () => {
  Scrollbar.init(document.querySelector(".App"), {
    damping: 0.05,
    continuousScrolling: false,
  });
};

function App() {
  useEffect(() => {
    smoothScrollLoader();
  }, []);
  return (
    <GlobalContextMain>
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
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/collection">
                <Collection />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Router>
        </main>
      </div>
    </GlobalContextMain>
  );
}

export default App;
