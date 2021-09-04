import React from "react";
import classes from "./SocialContainer.module.css";

const SocailContact = () => {
  return (
    <div className={classes["socialContainer"]}>
      <p>
        <a href="www.instagram.com">Instagram</a>
      </p>
      <p>
        <a href="www.facebook.com">Facebook</a>
      </p>
    </div>
  );
};

export default SocailContact;
