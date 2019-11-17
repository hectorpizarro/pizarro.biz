import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { PAGE_HOME } from "../constants";
import BG_HOME from "../shared/images/home.png";
import Loader from "../shared/loader/loader";
import HomeContent from "./home-content";

const Home = () => {
  const [bgImage, setBgImage] = useState("");
  useEffect(() => {
    const img = document.createElement("IMG");
    img.addEventListener("load", () => {
      setBgImage(BG_HOME);
      img.remove();
    });
    img.src = BG_HOME;
  }, []);

  if (bgImage) {
    return <HomeContent />;
  }

  return (
    <Element
      name={PAGE_HOME}
      className="flex flex-col h-screen w-full  items-center justify-center"
    >
      <Loader className="text-gray-500 h-16 w-16" />
    </Element>
  );
};

export default React.memo(Home);
