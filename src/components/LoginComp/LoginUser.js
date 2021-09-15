import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { auth } from "../../Login/firebase";
import useFetchData from "./hooks/useFetchData";
import SocialContainer from "./SocialContainer";
import setLocalStorage from "./hooks/setLocalStorage";
import { useGlobalContext } from "../../store/Context";

const LoginUser = (props) => {
  const history = useHistory();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { loginData } = useGlobalContext();
  const fetchData = useFetchData();

  // useEffect(() => {

  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  const dataFetchExecute = async (uid) => {
    const pro = await fetchData(uid);
    await console.log("U are me", pro);
    await setLocalStorage(pro);
    history.push("/");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(loginEmail, loginPassword).then((res) => {
      dataFetchExecute(res.user.uid);
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
