import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes["card"]}>
      <h1 style={{ color: "black" }}>{props.name}</h1>
      <p style={{ color: "black" }}>{props.description}</p>
      <img src={props.image} alt="" width="150px" height="auto" />
    </div>
  );
};

export default Card;
