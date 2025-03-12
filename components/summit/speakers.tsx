"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Speakers = () => {
  const [speakers] = useState([
    { id: 1, name: "TO BE ANNOUNCED...", color: "green", profile: null },
    { id: 2, name: "TO BE ANNOUNCED...", color: "purple", profile: null },
    { id: 3, name: "TO BE ANNOUNCED...", color: "green", profile: null },
    { id: 4, name: "TO BE ANNOUNCED...", color: "purple", profile: null },
    { id: 5, name: "TO BE ANNOUNCED...", color: "purple", profile: null },
    { id: 6, name: "TO BE ANNOUNCED...", color: "green", profile: null },
    { id: 7, name: "TO BE ANNOUNCED...", color: "purple", profile: null },
    { id: 8, name: "TO BE ANNOUNCED...", color: "green", profile: null },
  ]);

  const getGradientStyle = (color: string) => {
    if (color === "green") {
      return {
        background:
          "radial-gradient(circle, rgba(160,245,98,0.6) 0%, rgba(0,0,0,1) 100%)",
      };
    } else {
      return {
        background:
          "radial-gradient(circle, rgba(133,18,245,0.6) 0%, rgba(0,0,0,1) 100%)",
      };
    }
  };

  return (
    <div className="bg-black text-white w-full px-0 sm:px-6 md:px-8 lg:px-14 py-24 sm:py-14 md:py-20">
      <h2 className="text-3xl sm:text-4xl md:text-[52px] text-center mb-8 sm:mb-12 md:mb-16">
        SPEAKERS
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
          {speakers.map((speaker) => (
            <SwiperSlide key={speaker.id}>
              <div
                className="aspect-square w-full relative mt-6"
                style={getGradientStyle(speaker.color)}
              >
                <div className="absolute top-4 left-4 text-white font-light text-xs">
                  {speaker.name}
                </div>
                {speaker.profile && (
                  <Image
                    src={speaker.profile}
                    alt={speaker.name}
                    width={400}
                    height={400}
                    className="absolute bottom-0 right-0 w-full h-full object-contain"
                    style={{ maxHeight: "80%" }}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="relative"
          >
            <div
              className="aspect-square w-full relative"
              style={getGradientStyle(speaker.color)}
            >
              <div className="absolute top-4 left-4 text-white font-light text-lg">
                {speaker.name}
              </div>
              {speaker.profile && (
                <Image
                  src={speaker.profile}
                  alt={speaker.name}
                  width={400}
                  height={400}
                  className="absolute bottom-0 right-0 w-full h-full object-contain"
                  style={{ maxHeight: "80%" }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
