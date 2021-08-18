import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalContextMain = ({ children }) => {
  const [login, setLogin] = useState(false);

  return (
    <GlobalContext.Provider value={login}>{children}</GlobalContext.Provider>
  );
};
