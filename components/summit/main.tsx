"use client";
import React from "react";
import { motion } from "framer-motion";
// import Link from "next/link";
import World from "./assets/world";
import Countdown from "./countDown/count-down";
import { daysOne } from "@/fonts";
const ComingSoon = () => {
  const TOTAL_STARS = 40;

  return (
    <section
      className={`${daysOne.variable} font-days-one relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black text-white`}
    >
      {" "}
      {[...Array(TOTAL_STARS)].map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomSize = Math.random() * 2 + 0.5;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              top: `${randomY}%`,
              left: `${randomX}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        );
      })}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-[600px] h-[600px] max-w-full max-h-[80vh]"
        >
          <World className="w-full h-full text-white" />
        </motion.div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6">
        <Countdown />
      </div>
    </section>
  );
};

export default ComingSoon;
