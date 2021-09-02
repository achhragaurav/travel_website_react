import React from "react";
import productList from "../../product-list";
import Card from "./Card";
import classes from "./ListCard.module.css";

const ListCard = () => {
  return (
    <div className={classes["list-card"]}>
      {productList.map(({ name, description, image }, index) => {
        return <Card name={name} description={description} image={image} />;
      })}
    </div>
  );
};

export default ListCard;
