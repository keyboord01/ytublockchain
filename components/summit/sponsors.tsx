"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const Sponsors = () => {
  const [sponsors] = useState([
    { id: 1, name: "TO BE ANNOUNCED..." },
    { id: 2, name: "TO BE ANNOUNCED..." },
    { id: 3, name: "TO BE ANNOUNCED..." },
    { id: 4, name: "TO BE ANNOUNCED..." },
  ]);

  const getGradientStyle = () => ({
    backgroundColor: "black",
    border: "1px solid transparent",
    borderImage: "linear-gradient(to bottom, #8514F4, #8DD858) 1",
  });

  return (
    <div className="bg-black text-white w-full px-0 sm:px-6 md:px-8 lg:px-14 py-24">
      <h2 className="text-3xl sm:text-4xl md:text-[52px] text-center mb-8 sm:mb-12 md:mb-16">
        SPONSORS
      </h2>

      <div className="md:hidden mb-16">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
              centeredSlides: false,
            },
          }}
        >
          {sponsors.map((sponsor) => (
            <SwiperSlide key={sponsor.id}>
              <div
                className="aspect-square w-full relative mt-6"
                style={getGradientStyle()}
              >
                <div className="absolute top-4 left-4 text-white font-light text-xs">
                  {sponsor.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-14 mb-16">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="relative"
          >
            <div
              className="aspect-square w-full relative"
              style={getGradientStyle()}
            >
              <div className="absolute top-4 left-4 text-white font-light text-lg">
                {sponsor.name}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 sm:mt-12">
        <button
          className="font-sans bottom-0 px-6 py-2 hover:text-gray-300 flex gap-1 justify-center items-center "
          style={{
            border: "1px solid transparent",
            borderImage: "linear-gradient(to right, #A0F562, #8512F5) 1",
          }}
        >
          Become a Sponsor <Arrow />
        </button>
      </div>
    </div>
  );
};

export default Sponsors;
