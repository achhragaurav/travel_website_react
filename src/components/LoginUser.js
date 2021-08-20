import React, { useState } from "react";
import { auth } from "../Login/firebase";
import firebase from "firebase/app";

const LoginUser = (props) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(loginEmail, loginPassword).then((res) => {
      console.log(res);
    });
  };
  const googleLogin = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
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
          <button onClick={googleLogin}>
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginUser;
