import { useGlobalContext } from "../../../store/Context";
import { useHistory } from "react-router";

const useLogout = () => {
  const history = useHistory();
  const { setIsLoggedIn, setLoginData } = useGlobalContext();
  return () => {
    setIsLoggedIn(false);
    setLoginData(false);
    localStorage.clear();
    history.push("/login");
  };
};
export default useLogout;
