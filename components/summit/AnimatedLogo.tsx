"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedLogo = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          type: "spring",
          duration: 2.5,
          bounce: 0,
          delay: i * 0.1,
        },
        opacity: { duration: 0.5, delay: i * 0.1 },
      },
    }),
  };

  return (
    <motion.svg
      width={50}
      height={50}
      viewBox="0 0 66 70"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        custom={0}
        variants={pathVariants}
        d="M22.3914 23.5901L28.9876 6L37.0497 28.354H59.7702L41.4473 42.2795L47.6771 63.9006L28.9876 51.0745"
        stroke="#FFFFFF"
        strokeWidth="2"
      />

      <motion.path
        custom={1}
        variants={pathVariants}
        d="M24.9565 41.1801L30.4534 35.3168H7L30.4534 52.1739L12 64.5L15 55"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
    </motion.svg>
  );
};

export default AnimatedLogo;
