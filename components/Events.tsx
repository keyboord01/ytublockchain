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
      name: "Near Protocol Meetup",
      type: "Educational",
      date: "February 23, 2023",
    },
    {
      name: "Aleo ZK Deep Dive",
      type: "Workshop",
      date: "February 27, 2024",
    },
    {
      name: "DePIN Revolution Summit",
      type: "Educational",
      date: "May 17, 2024",
    },
    {
      name: "DEX Trading Masterclass",
      type: "Workshop",
      date: "May 20, 2024",
    },
    {
      name: "Blockchain Foundations",
      type: "Educational",
      date: "October 16, 2024",
    },
    {
      name: "Bitcoin: Past, Present & Future",
      type: "Panel",
      date: "October 31, 2024",
    },
    {
      name: "Ethereum Development Summit",
      type: " Workshop",
      date: "November 7, 2024",
    },
    {
      name: "Web3 Careers: The Future is Now",
      type: "Panel",
      date: "December 25, 2024",
    },
  ];

  return (
    <div
      id="events"
      className="relative w-screen bg-black text-blue-50"
    >
      <div className="relative h-[100vh]">
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
          <h1 className="text-center font-zentry text-5xl font-black uppercase text-blue-100 sm:text-5xl md:text-7xl lg:text-8xl">
            join our events <br /> shape your future
          </h1>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-6xl pt-44 px-4"
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
          <a
            href="/schedule"
            target="_"
            className="flex items-center justify-center mt-12"
          >
            <Button
              id="schedule-btn"
              title="view full schedule"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
