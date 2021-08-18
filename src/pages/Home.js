import React from "react";
import { useGlobalContext } from "../components/Context";
import { homeData } from "../homedata";
import "./Home.css";

const Home = () => {
  const { login, setLogin } = useGlobalContext();

  return (
    <div className=".home-container">
      {homeData.map((location) => {
        return (
          <section
            className="home-section"
            style={{ background: `url(${location.image}) center/cover` }}
          >
            <h1>{location.location}</h1>
          </section>
        );
      })}
    </div>
  );
};

export default Home;
