import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Inicio.css";

import Informacion from "../informacion/Informacion";
import Koifish from "../Koifish/Koifish";

gsap.registerPlugin(ScrollTrigger);

const Inicio = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".wrapper",
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: true,
            // markers: true,
          },
        })
        .to("img", {
          scale: 2,
          z: 350,
          transformOrigin: "center center",
          ease: "power1.inOut",
        })
        .to(
          ".section.hero",
          {
            scale: 1.1,
            transformOrigin: "center center",
            ease: "power1.inOut",
          },
          "<"
        );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef}>
      <div className="wrapper">
        <div className="content">
          <section className="section hero"></section>
          <div className="bird-wrapper">
            <div className="bird-container bird-container-one">
              <div className="bird bird-one"></div>
            </div>
            <div class="bird-container bird-container-two">
              <div className="bird bird-two"></div>
            </div>
            <div className="bird-container bird-container-three">
              <div className="bird bird-three"></div>
            </div>
            <div className="bird-container bird-container-four">
              <div className="bird bird-four"></div>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img
            src="/images/isabella-correa-banner-Photoroom.png"
            alt="Banner de Isabella Correa"
          />
        </div>
      </div>
      <Informacion />
      <Koifish />
    </div>
  );
};

export default Inicio;
