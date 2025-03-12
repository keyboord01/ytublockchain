import React from "react";
import Hero from "./Hero";
import { daysOne } from "@/fonts";
import About from "./About";
import Schedule from "./schedule";
import Speakers from "./speakers";
import Sponsors from "./sponsors";

const main = () => {
  return (
    <div
      className={`${daysOne.variable} font-days-one relative flex flex-col items-center justify-center bg-black text-white`}
    >
      <Hero />
      <About />
      <Schedule />
      <Speakers />
      <Sponsors />
    </div>
  );
};

export default main;
