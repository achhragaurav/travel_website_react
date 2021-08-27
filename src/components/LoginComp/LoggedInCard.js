import React, { useState } from "react";
import classes from "./LoggedInCard.module.css";
import LoginCardButton from "./LoginCardButton";
import ProfileLogo from "../../assets/ProfileLogo.png";

const LoggedInCard = (props) => {
  const [cardMenuIsVisible, setCardMenuIsVisible] = useState(false);

  return (
    <div className={classes["loggedInCard"]}>
      <div
        className={classes["circle"]}
        onClick={() => {
          setCardMenuIsVisible(!cardMenuIsVisible);
        }}
      >
        <img src={ProfileLogo} alt="" width="20px" />
      </div>
      <div
        className={classes["menu"]}
        style={{ visibility: cardMenuIsVisible ? "visible" : "hidden" }}
      >
        <ul>
          <li>
            <LoginCardButton value="Profile" />
            <LoginCardButton value="Logout" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoggedInCard;
