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
            <div className={classes["left-side-main"]}>
              <h1 ref={boxRef}>{location.location}</h1>
              <div className={classes["previous-next"]}>
                <button>Previous</button>
                <span></span>
                <button>Next</button>
              </div>
            </div>
            <div className={classes["right-side-main"]}>
              <p>{location.description}</p>
              <div className={classes["images-right-side"]}>
                <img src={location.moreImages[0]} alt="" />
                <img src={location.moreImages[1]} alt="" />
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default MainContainer;
