import React, { useState } from "react";
import { auth } from "../Login/firebase";
import SocialContainer from "./SocialContainer";

const LoginUser = (props) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(loginEmail, loginPassword).then((res) => {
      console.log(res);
    });
  };

  return (
    <section className="login-comp-section">
      <form>
        <input
          type="email"
          placeholder="Your login or email"
          name="email"
          value={loginEmail}
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={loginPassword}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
        <div className="buttons">
          <button
            className="login-move"
            onClick={(e) => {
              e.preventDefault();
              props.toggle("0%");
            }}
          >
            Register
          </button>
          <button className="forgot-password">Forgot password</button>
          <button className="sign-in" type="submit" onClick={handleLoginSubmit}>
            Sign In
          </button>
        </div>
        <SocialContainer />
      </form>
    </section>
  );
};

export default LoginUser;
