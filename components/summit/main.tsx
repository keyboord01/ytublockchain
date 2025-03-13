import React from "react";
import Hero from "./Hero";
import { daysOne } from "@/fonts";
import About from "./About";
import Schedule from "./schedule";
import Speakers from "./speakers";
import Sponsors from "./sponsors";
import Partners from "./partners";
import Location from "./location";

const Main = () => {
  return (
    <div
      className={`${daysOne.variable} font-days-one bg-black text-white w-full`}
    >
      <div className="max-w-[1400px] mx-auto">
        <Hero />
        <About />
        <Schedule />
        <Speakers />
        <Sponsors />
      </div>
      <Partners />
      <div className="max-w-[1400px] mx-auto">
        <Location />
      </div>
    </div>
  );
};

export default Main;
