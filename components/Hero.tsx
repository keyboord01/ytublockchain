"use client";

import dynamic from "next/dynamic";
import { FaCalendarCheck } from "react-icons/fa";
import Image from "next/image";
import Button from "./common/Button";

const VideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
  loading: () => <VideoLoadingPlaceholder />,
});

const VideoLoadingPlaceholder = () => (
  <div className="absolute z-[10] h-[100vh] w-screen overflow-hidden bg-black">
    <Image
      src="/img/hero.png"
      alt="Hero background"
      layout="fill"
      objectFit="cover"
      priority
      className="absolute left-0 top-0 z-10"
    />
  </div>
);

const HeroContent = () => (
  <div className="absolute inset-0 z-40 flex items-center justify-center">
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
            containerClass="!bg-[#FF8C00] flex items-center justify-center gap-1 px-6 py-2"
          />
        </a>
        <a href="/schedule">
          <Button
            id="Upcoming-events"
            title="Upcoming Events"
            leftIcon={<FaCalendarCheck />}
            containerClass="!bg-[#FF8C00] flex items-center justify-center gap-2 px-6 py-2"
          />
        </a>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative h-[100vh] w-screen overflow-x-hidden bg-[#0A0506]">
      <div className="relative h-[100vh] w-screen overflow-hidden">
        <VideoPlayer
          webmSrc="https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/hero-mobile.webm"
          mp4Src="https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/hero-1.mp4"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
