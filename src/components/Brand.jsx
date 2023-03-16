import React from "react";
import brand from "../assets/dinner4k.png";
import "./brand.css";
import vid from "./showreel nuevo.mp4";
import { useState } from "react";

const Brand = () => {
  const [show, setShow] = useState(true);
  const [showVid, setShowVid] = useState(false);

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
            onClick={() => setShowVid(!showVid)}
          />
        ) : ( 
          
          <div className="div-vid text-right">
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
                class="m-3 text-white drop-shadow-lg right-23  cursor-pointer text-[32px] uil uil-times-circle "
              ></i>
            
          </div>
        )}
      </div>
    </section>
  );
};

export default Brand;
