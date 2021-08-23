import React from "react";
import { useGlobalContext } from "../components/Context";
import MainContainer from "../components/MainPageComp/MainContainer";
import "./Home.css";

const Home = () => {
  const { login, setLogin } = useGlobalContext();

  return (
    <div className="home-container">
      <MainContainer />
    </div>
  );
};

export default Home;
