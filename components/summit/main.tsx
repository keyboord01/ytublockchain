import React from "react";
import Hero from "./Hero";
import { daysOne } from "@/fonts";
import About from "./About";
import Schedule from "./schedule";
import Speakers from "./speakers";

const main = () => {
  return (
    <div
      className={`${daysOne.variable} font-days-one relative flex flex-col items-center justify-center bg-black text-white`}
    >
      <Hero />
      <About />
      <Schedule />
      <Speakers />
    </div>
  );
};

export default main;
