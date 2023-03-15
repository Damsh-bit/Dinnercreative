import React from "react";
import brand from "../assets/dinner4k.png";
import "./brand.css";
import vid from "./showreel nuevo.mp4";
import { useState } from "react";

const Brand = () => {
  //usar ustestate en vez de js vanilla para estas transcisiones
  const [show, setShow] = useState(true);

  return (
    <section className="brand ">
      <div
        
        className="logo-main flex items-center justify-center"
      >
        {show ? (
          <img
            className="object-cover cursor-pointer block h-screen"
            src={brand}
            alt="Dinner Logo"
            id="brand"
            onClick={() => setShow(!show)}
          />
        ) : (
          <div className="div-vid">
            {" "}
            <video
              id="fm-video"
              autoPlay
              loop
              controls
              playsInline
              className="object-cover"
            >
              <source src={vid} type="video/mp4" />
            </video>
            <i
                onClick={() => setShow(!show)}
                alt="Close"
                class=" absolute text-white top-5 drop-shadow-lg right-10 cursor-pointer text-[39px] uil uil-times-circle "
              ></i>
            
          </div>
        )}
      </div>
    </section>
  );
};

export default Brand;
