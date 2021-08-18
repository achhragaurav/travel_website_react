import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { GlobalContextMain } from "./components/Context";

function App() {
  return (
    <GlobalContextMain>
      <div className="App">
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
          </Switch>
        </Router>
      </div>
    </GlobalContextMain>
  );
}

export default App;
