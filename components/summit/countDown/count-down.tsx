"use client";

import React, { useState, useEffect } from "react";
import CountdownDigitBlock from "./countdown-digit-block";

export default function Countdown() {
  const [secondsLeft, setSecondsLeft] = useState(0);

  const calculateTimeLeft = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const marSeventh = new Date(currentYear, 4, 7);
    return Math.floor((marSeventh.getTime() - now.getTime()) / 1000);
  };

  useEffect(() => {
    setSecondsLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setSecondsLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(secondsLeft / 86400);
  const hours = Math.floor((secondsLeft % 86400) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="w-full flex flex-col items-center p-4 gap-3">
      <div className="w-full grid grid-cols-2 gap-5 sm:gap-4 md:grid-cols-4 md:gap-12 max-w-4xl">
        <CountdownDigitBlock
          label="Days"
          timeLeft={days.toString().padStart(2, "0")}
        />
        <CountdownDigitBlock
          label="Hours"
          timeLeft={hours.toString().padStart(2, "0")}
        />
        <CountdownDigitBlock
          label="Minutes"
          timeLeft={minutes.toString().padStart(2, "0")}
        />
        <CountdownDigitBlock
          label="Seconds"
          timeLeft={seconds.toString().padStart(2, "0")}
        />
      </div>
    </div>
  );
}
