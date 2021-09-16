import React, { useState } from "react";
import firebase from "firebase/app";
import { useGlobalContext } from "../../../store/Context";
import setLocalStorage from "./setLocalStorage";
let responseData = {};
const useFetchData = () => {
  const snapShotFunction = (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    responseData = { ...data };

    return responseData;
  };

  return async (uid) => {
    const response = await firebase.database().ref("Users/" + uid);
    await response.once("value").then(snapShotFunction);
    return responseData;
  };
};

export default useFetchData;
