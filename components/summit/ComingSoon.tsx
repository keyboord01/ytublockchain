"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import AnimatedLogo from "./AnimatedLogo";

const ComingSoon = () => {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"
        style={{
          transform: `scale(1.1)`,
          transition: "transform 0.2s ease-out",
        }}
      />
      <motion.div
        className="absolute bg-opacity-40 backdrop-blur-xl rounded-full"
        initial={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          scale: 1.2,
        }}
        animate={
          introComplete
            ? {
                top: "2rem",
                left: "50%",
                x: "-50%",
                y: 0,
                scale: 0.5,
              }
            : {
                scale: 1.2,
              }
        }
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        <AnimatedLogo
          width={240}
          height={240}
        />
      </motion.div>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute size-1 bg-[#FF8C00] rounded-full opacity-20"
          animate={{
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
            scale: [1, Math.random() + 0.5],
            opacity: [0.2, 0.5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <motion.div
        className="relative z-10 text-center px-4 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: introComplete ? 1 : 0,
          y: introComplete ? 0 : 20,
        }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: "easeOut",
        }}
      >
        <motion.div className="text-xs font-bold tracking-widest text-[#FF8C00] mb-4">
          YTU BLOCKCHAIN
        </motion.div>

        <h1 className="font-anton text-5xl sm:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-[#FF8C00]">
          SUMMIT 2025
        </h1>

        <motion.div
          className="text-2xl sm:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] to-orange-300"
          animate={{ opacity: [0.7, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Coming Soon
        </motion.div>

        <Link
          href="https://twitter.com/ytublockchain"
          target="_blank"
        >
          <motion.button
            className="group relative overflow-hidden rounded-lg p-px"
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative flex items-center gap-2 rounded-lg bg-black px-6 py-3 transition-all duration-300 group-hover:bg-black/80">
              <FaTwitter
                className="text-[#FF8C00] transition-colors duration-300 group-hover:text-white"
                size={20}
              />
              <span className="font-semibold text-[#FF8C00] transition-colors duration-300 group-hover:text-white">
                Follow for Updates
              </span>
            </div>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ComingSoon;
