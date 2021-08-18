import React, { useRef, useState } from "react";
import LoginUser from "../components/LoginUser";
import SignUp from "../components/SignUp";
import "./Login.css";

const Login = () => {
  const [toggleSignUp, setToggleSignUp] = useState("0%");

  return (
    <div className="login-main">
      <section className="login-section">
        <div
          className="login-hider-section"
          style={{ transform: `translateX(${toggleSignUp})` }}
        >
          <SignUp toggle={setToggleSignUp} />
          <LoginUser toggle={setToggleSignUp} />
        </div>
      </section>
      <section className="login-image-section">
        <div className="login-image-content">
          <p>Start Planning your</p>
          <h1>Journey</h1>
        </div>
        <div className="login-section-design">
          <span className="line"></span>
          <p>Reaching to the top</p>
          <h5>Gaurav Achhra</h5>
        </div>
      </section>
    </div>
  );
};

export default Login;
