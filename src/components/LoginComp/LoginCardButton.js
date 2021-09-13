import React from "react";
import classes from "./LoginCardButton.module.css";

const LoginCardButton = (props) => {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default LoginCardButton;
