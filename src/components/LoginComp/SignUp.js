import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { auth } from "../../Login/firebase";
import useSendData from "./hooks/useSendData";
import SocialContainer from "./SocialContainer";
import { useGlobalContext } from "../../store/Context";
import setLocalStorage from "./hooks/setLocalStorage";

const SignUp = (props) => {
  const history = useHistory();
  const sendData = useSendData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useGlobalContext();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Invalid Credentials Input can't be empty");
    } else {
      auth.createUserWithEmailAndPassword(email, password).then((res) => {
        if (res.user && res.additionalUserInfo.isNewUser) {
          console.log(res);
          sendData(res.user.uid, res.user.email).then((respo) => {
            setLocalStorage(respo);
            history.push("/");
            setIsLoggedIn(true);
          });
        }
      });
    }
  };
  return (
    <section className="sign-up-comp-section">
      <form>
        <input
          type="email"
          placeholder="Your login or email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="buttons">
          <button
            className="register"
            type="submit"
            onClick={handleRegisterSubmit}
          >
            Register
          </button>
          <button
            className="login-move"
            onClick={(e) => {
              e.preventDefault();
              props.toggle("-50%");
            }}
          >
            Login
          </button>
        </div>
        <SocialContainer name="Sign Up" />
      </form>
    </section>
  );
};

export default SignUp;
