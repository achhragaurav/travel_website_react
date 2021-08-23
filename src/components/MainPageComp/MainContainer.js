import React, { useRef } from "react";
import { homeData } from "./homedata";
import classes from "./MainContainer.module.css";
import gsap from "gsap";

const MainContainer = () => {
  const boxRef = useRef(null);
  return (
    <section>
      {homeData.map((location, index) => {
        return (
          <section
            key={index}
            className={classes["home-section"]}
            style={{ background: `url(${location.image}) center/cover` }}
            onDoubleClick={() => {
              console.log(boxRef.current);
              gsap.to(boxRef.current, { rotation: "+=360" });
            }}
          >
            <h1 ref={boxRef}>{location.location}</h1>
          </section>
        );
      })}
    </section>
  );
};

export default MainContainer;
