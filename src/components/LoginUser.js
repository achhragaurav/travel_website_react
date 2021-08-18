import React, { useState } from "react";
import { auth } from "../Login/firebase";

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
            className="register"
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
      </form>
    </section>
  );
};

export default LoginUser;
