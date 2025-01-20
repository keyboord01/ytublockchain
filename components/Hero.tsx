"use client";

import { TiLocationArrow } from "react-icons/ti";
import dynamic from "next/dynamic";
import Button from "./common/Button";

const VideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
  loading: () => (
    <>
      <div className="flex-row-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </>
  ),
});

const HeroContent = () => (
  <div className="flex-row-center absolute inset-0 z-40 size-full">
    <div className="mt-24 flex max-w-4xl flex-col items-center justify-center px-5 text-center sm:px-10">
      <h1 className="bc-font hero-header text-blue-100">
        Building the new
        <br />
        internet
      </h1>
      <div className="max-w-2xl">
        <h2 className="mt-4 text-lg font-bold text-blue-100 sm:text-xl">
          Join the Blockchain Revolution
          <br className="hidden sm:block" />
          with YTU Blockchain Club
        </h2>
        <p className="mb-6 mt-4 font-robert-regular text-blue-100">
          Get hands-on with blockchain technology through hackathons, workshops,
          and a thriving community that fosters real-world growth.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSebf0dzOSg3335jiYzOOLgX0x5BAzJwUVSZaTUG_2wV3gqsAQ/viewform"
        >
          <Button
            title="Join Us"
            containerClass="!bg-[#FF8C00] flex-row-center gap-1 px-6 py-2"
          />
        </a>
        <a href="#roadmap">
          <Button
            id="explore-guide"
            title="Explore The Guide"
            leftIcon={<TiLocationArrow />}
            containerClass="!bg-[#FF8C00] flex-row-center gap-2 px-6 py-2"
          />
        </a>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-dvh w-screen overflow-x-hidden"
    >
      <div
        id="video-frame"
        className="relative h-dvh w-screen overflow-hidden rounded-lg"
      >
        <VideoPlayer
          src="/videos/hero-1.mp4"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
