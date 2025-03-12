"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-transparent z-30">
      <div className="flex-shrink-0">
        <AnimatedLogo />
      </div>

      <nav className="hidden md:flex items-center space-x-4 font-sans">
        <button className="border border-px px-6 py-2 border-[#8512F5]  hover:border-[#8312f5ea] hover:text-gray-300">
          Schedule
        </button>
        <button className="border border-px px-6 py-2 border-[#8512F5]  hover:border-[#8312f5ea] hover:text-gray-300">
          Speakers
        </button>
        <button className="border border-px px-6 py-2 border-[#8512F5]  hover:border-[#8312f5ea] hover:text-gray-300">
          Sponsors
        </button>
      </nav>

      <button
        className="md:hidden focus:outline-none z-40"
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
      >
        <MenuIcon />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <button
              className="absolute top-8 right-6"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X />
            </button>

            <ul className="flex flex-col items-center space-y-6 font-sans text-lg mt-10">
              <li>
                <button className="border border-px px-4 py-2 border-[#8512F5]">
                  Schedule
                </button>
              </li>
              <li>
                <button className="border border-px px-4 py-2 border-[#8512F5]">
                  Speakers
                </button>
              </li>
              <li>
                <button className="border border-px px-4 py-2 border-[#8512F5]">
                  Sponsors
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
