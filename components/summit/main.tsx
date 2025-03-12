"use client";
import React from "react";
import { motion } from "framer-motion";
import World from "./assets/world";
import Countdown from "./countDown/count-down";

import { daysOne } from "@/fonts";
import Star from "./assets/stars";
import Navbar from "./summit-nav";

const ComingSoon = () => {
  const TOTAL_STARS = 10;

  return (
    <section
      className={`${daysOne.variable} font-days-one relative flex flex-col items-center justify-center h-[80vh] overflow-hidden bg-black text-white`}
    >
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>

      {[...Array(TOTAL_STARS)].map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 80;
        const randomDelay = Math.random() * 2;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${randomY}%`,
              left: `${randomX}%`,
              transform: `translate(-50%, -50%) )`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: randomDelay,
            }}
          >
            <Star />
          </motion.div>
        );
      })}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="relative w-[600px] h-[600px] max-w-full max-h-[80vh]"
        >
          <World className="w-full h-full text-white" />
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <Countdown />
      </motion.div>
    </section>
  );
};

export default ComingSoon;
