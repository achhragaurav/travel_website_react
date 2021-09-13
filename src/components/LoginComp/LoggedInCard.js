import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/profile">
            <li>
              <LoginCardButton value="Profile" />
            </li>
          </Link>
          <Link to="/collection">
            <LoginCardButton value="Collection" />
          </Link>
          <li>
            <LoginCardButton value="Logout" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoggedInCard;
