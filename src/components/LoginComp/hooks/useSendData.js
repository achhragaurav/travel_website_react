import firebase from "firebase/app";
const useSendData = () => {
  return (uid, email) => {
    const startingData = {
      uid: uid,
      email: email,
      phoneNumber: "",
      collection: "",
      cart: "",
      address: "",
      userName: "",
    };

    const response = firebase
      .database()
      .ref("Users/" + uid)
      .set(startingData);
    return response;
  };
};

export default useSendData;
