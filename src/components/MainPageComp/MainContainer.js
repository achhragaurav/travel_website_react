import React, { useRef } from "react";
import { homeData } from "./homedata";
import classes from "./MainContainer.module.css";
import gsap from "gsap";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MainContainer = () => {
  const boxRef = useRef(homeData.map(() => React.createRef()));
  return (
    <section>
      {homeData.map((location, index) => {
        return (
          <section
            key={index}
            className={classes["home-section"]}
            style={{ background: `url(${location.image}) center/cover` }}
          >
            <div className={classes["left-side-main"]}>
              <span id={classes["heading-span"]}>
                <Tween
                  to={{
                    y: "-8vw",
                    scrollTrigger: {
                      trigger: `#heading${index}`,
                      toggleAction: "play none none play",
                    },
                  }}
                >
                  <h1 id={`heading${index}`} ref={boxRef.current[index]}>
                    {location.location}
                  </h1>
                </Tween>
              </span>
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
