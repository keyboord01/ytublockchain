"use client";
import React from "react";
import { motion } from "framer-motion";
// import Link from "next/link";
import World from "./assets/world";
import Countdown from "./countDown/count-down";
import { daysOne } from "@/fonts";
const ComingSoon = () => {
  return (
    <section
      className={`${daysOne.variable} font-days-one relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black text-white`}
    >
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
