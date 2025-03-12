"use client";
import React from "react";

interface DigitBlockProps {
  label: string;
  timeLeft: string;
}

export default function CountdownDigitBlock({
  label,
  timeLeft,
}: DigitBlockProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative flex justify-center items-center ">
        <span
          className={` text-[35px] sm:text-[90px] md:text-[110px] lg:text-[140px] text-white [text-shadow:5px_10px_15px_rgba(0,0,0,0.25)]
          `}
        >
          {timeLeft}
        </span>
      </div>
      <span
        className={`
          text-xs sm:text-sm md:text-md lg:text-lg font-medium leading-[26px] capitalize text-white [text-shadow:3px_6px_4px_rgba(0,0,0,0.25)]`}
      >
        {label}
      </span>
    </div>
  );
}
