import React, { useState } from "react";
import firebase from "firebase/app";
import { useGlobalContext } from "../../../store/Context";
import setLocalStorage from "./setLocalStorage";
let responseData = {};
const useFetchData = () => {
  const { setIsLoggedIn, setLoginData } = useGlobalContext();

  const snapShotFunction = (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    responseData = { ...data };
    // setIsLoggedIn(true);
    // setLoginData(data);
    return responseData;
  };

  return async (uid) => {
    const response = await firebase.database().ref("Users/" + uid);
    await response.once("value").then(snapShotFunction);
    // .then((data) => {
    //   console.log(data, "Vii");
    // });
    return responseData;
  };
};

export default useFetchData;
