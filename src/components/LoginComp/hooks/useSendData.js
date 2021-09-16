import firebase from "firebase/app";
import { useGlobalContext } from "../../../store/Context";

const useSendData = () => {
  const { setLoginData } = useGlobalContext();

  return async (uid, email) => {
    const startingData = {
      uid: uid,
      email: email,
      phoneNumber: "",
      collection: "",
      cart: "",
      address: "",
      userName: "",
    };

    const response = await firebase
      .database()
      .ref("Users/" + uid)
      .set(startingData);
    setLoginData(startingData);
    return startingData;
  };
};

export default useSendData;
