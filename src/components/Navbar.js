import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoggedInCard from "./LoginComp/LoggedInCard";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();

  return (
    <nav>
      <div className="logo">Logo</div>
      <ul>
        <Link to="/" className="react-link">
          <li>Home</li>
        </Link>
        <Link to="/contact" className="react-link">
          <li>Contact</li>
        </Link>
        <Link to="/products" className="react-link">
          <li>Products</li>
        </Link>
        {!isLoggedIn ? (
          <Link to="/login" className="react-link">
            <li className="login-btn">Login</li>
          </Link>
        ) : (
          <LoggedInCard />
        )}
        {}
      </ul>
    </nav>
  );
};

export default Navbar;
