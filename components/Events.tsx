"use client";

import React from "react";
import { motion } from "framer-motion";
import StatisticCard from "./common/StatisticCard";
import Button from "./common/Button";
import Image from "next/image";

interface Event {
  name: string;
  type: string;
  date: string;
}

const Events = () => {
  const events: Event[] = [
    {
      name: "Web3 Masterclass Series",
      type: "Educational",
      date: "March 15-16",
    },
    {
      name: "Blockchain Ideathon 2024",
      type: "In-Person",
      date: "April 22-23",
    },
    { name: "Smart Contract Workshop", type: "Educational", date: "May 10" },
    { name: "Industry Leaders Panel", type: "Keynote", date: "June 5" },
    {
      name: "Hackathon: Build the Future",
      type: "In-Person",
      date: "July 18-20",
    },
    { name: "DeFi Deep Dive Course", type: "Educational", date: "August 3" },
    { name: "Web3 Security Summit", type: "Keynote", date: "September 12" },
    { name: "Blockchain Career Fair", type: "In-Person", date: "October 8" },
  ];

  return (
    <div
      id="events"
      className="relative w-screen bg-black text-blue-50"
    >
      <div className="relative h-dvh">
        <Image
          src="/img/events/panel.png"
          alt="Events background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-between">
        <motion.div
          viewport={{ once: true }}
          className="flex flex-col items-center md:-mt-28"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-general text-sm uppercase text-[#FF8C00] md:text-[10px]">
            events organized
          </p>
          <h1 className="text-center font-family text-5xl font-black uppercase text-blue-100 sm:text-5xl md:text-7xl lg:text-8xl">
            join our events <br /> shape your future
          </h1>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-6xl px-4"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -120 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
            <div className="text-center md:text-left">
              <StatisticCard
                value={40}
                titleClassName="font-circular-web text-6xl font-bold !text-[#FF8C00]"
                labelClassName="mt-2 font-general text-sm uppercase !text-[#fff]"
                label="Events And Classes"
                delay={0.6}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="text-center text-xs opacity-80 transition-opacity hover:opacity-100"
                >
                  <p className="font-circular-web">{event.name}</p>
                  <div className="flex items-center justify-center mb-2 text-xs font-semibold text-[#FF8C00]">
                    <p>{event.type}</p>
                    <p className="ml-1 font-general">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-12">
            <Button
              id="schedule-btn"
              title="view full schedule"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
