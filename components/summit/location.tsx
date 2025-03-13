"use client";
import { MapPin } from "lucide-react";
import React from "react";
import Palace from "./assets/palace";

const Location = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="mx-auto px-3 sm:px-6 md:px-8 lg:px-14 py-16 sm:py-24 md:py-32">
        <h2 className="text-3xl sm:text-4xl md:text-[52px] text-center mb-8 sm:mb-12 md:mb-16">
          LOCATION
        </h2>

        <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-12 xl:space-x-24">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight mb-6 text-[#8512F5] text-center md:text-left  uppercase">
              conference hall
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-5 max-w-[700px] text-center lg:text-left font-sans">
              Lorem ipsum dolor sit amet consectetur. Nullam magna sed sed
              lacinia. Ultrices lorem volutpat sapien faucibus nunc amet cum
              donec. Amet feugiat diam non adipiscing nulla convallis metus
              netus orci. Magna pulvinar lorem libero quis euismod sodales a.
            </p>
            <div className="flex flex-row items-center space-x-2 text-sm sm:text-base lg:text-lg font-extralight font-sans text-gray-300">
              <MapPin />
              <span>Davutpaşa, Davutpaşa Cd., 34220 Güngören/İstanbul</span>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <Palace />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
