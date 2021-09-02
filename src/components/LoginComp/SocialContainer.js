import React, { useCallback } from "react";
import firebase from "firebase/app";
import classes from "./SocialContainer.module.css";
import { useGlobalContext } from "../../store/Context";

const SocialContainer = (props) => {
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();

  const googleLogin = useCallback((e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
        firebase
          .database()
          .ref("Users/" + res.user.uid)
          .set({ uid: res.user.uid, name: res.user.displayName });

        setIsLoggedIn(true);
      });
  }, []);
  const facebookLogin = useCallback((e) => {
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
        setIsLoggedIn(true);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  }, []);
  return (
    <div className={classes["social-container"]}>
      <div className={classes["social-matter-div"]}>
        <h3>Or {props.name ? props.name : "Login"} using any of these</h3>
      </div>
      <div className={classes["social-buttons-div"]}>
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
        <button
          onClick={facebookLogin}
          style={{ border: "none", padding: "0" }}
        >
          <img
            style={{
              width: "60px",
              height: "auto",
            }}
            src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default SocialContainer;
