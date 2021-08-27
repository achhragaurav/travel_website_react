import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalContextMain = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ login, setLogin, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
