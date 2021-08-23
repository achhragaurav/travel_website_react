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
  const facebookLogin = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var user = result.user;
        var accessToken = credential.accessToken;
        console.log(user, accessToken);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
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
          <button onClick={googleLogin} style={{ border: "none" }}>
            <img
              style={{
                width: "30px",
                height: "30px",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
          </button>
          <button onClick={facebookLogin} style={{ border: "none" }}>
            <img
              style={{
                width: "30px",
                height: "30px",
              }}
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              alt=""
            />
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginUser;
