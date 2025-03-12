"use client";
import React from "react";

const Arrow = () => (
  <svg
    width={10}
    height={11}
    viewBox="0 0 10 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.14072 7.69744L9.01975 3.56856"
      stroke="#F3F2FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.15967 1.47705L9.01971 3.52194L7.57653 8.86993"
      stroke="#F3F2FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Schedule = () => {
  const scheduleItems = [
    {
      id: 1,
      time: "10.00 - 10.20",
      title: "Opening Ceremony",
    },
    {
      id: 2,
      time: "10.20 - 11.40",
      title: "Speaking Session",
    },
    {
      id: 3,
      time: "11.40 - 12.10",
      title: "Break",
    },
    {
      id: 4,
      time: "12.10 - 13.30",
      title: "Speaking Session",
    },
    {
      id: 5,
      time: "13.30 - 14.30",
      title: "Break",
    },
    {
      id: 6,
      time: "14.30 - 16.00",
      title: "Speaking Session",
    },
    {
      id: 7,
      time: "16.00 - 16.20",
      title: "Break",
    },
    {
      id: 8,
      time: "16.20 - 17.30",
      title: "Speaking Session",
    },
    {
      id: 9,
      time: "17.30 - 18.00",
      title: "Closing Ceremony",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-14 py-10 sm:py-14 md:py-20">
      <h2 className="text-3xl sm:text-4xl md:text-[52px] text-center mb-8 sm:mb-12 md:mb-16">
        SCHEDULE
      </h2>

      <div className="relative">
        {scheduleItems.map((item) => (
          <div
            key={item.id}
            className="relative group"
          >
            <div className="border-t border-green-500/30 py-4 sm:py-6">
              <div className="flex flex-col md:flex-row items-start md:items-center ml-3 md:ml-9 space-y-2 md:space-y-0 md:space-x-14 font-sans font-extralight">
                <div className="text-xl sm:text-2xl md:text-3xl md:pr-16 lg:pr-32 w-fit">
                  {item.time}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl">
                  {item.title}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-green-500/30 mt-4 sm:mt-6"></div>
      </div>

      <div className="flex justify-center mt-8 sm:mt-12">
        <button
          className="font-sans bottom-0 px-6 py-2 hover:text-gray-300 flex gap-1 justify-center items-center "
          style={{
            border: "1px solid transparent",
            borderImage: "linear-gradient(to right, #A0F562, #8512F5) 1",
          }}
        >
          View Full Schedule <Arrow />
        </button>
      </div>
    </div>
  );
};

export default Schedule;
