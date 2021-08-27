import React from "react";

const LoginCardButton = (props) => {
  return <button onClick={props.onClick}>{props.value}</button>;
};

export default LoginCardButton;
