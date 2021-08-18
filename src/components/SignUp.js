import React, { useState } from "react";
import { auth } from "../Login/firebase";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Invalid Credentials Input can't be empty");
    } else {
      auth.createUserWithEmailAndPassword(email, password).then((res) => {
        console.log(res);
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
      </form>
    </section>
  );
};

export default SignUp;
