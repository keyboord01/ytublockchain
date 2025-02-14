"use client";

import dynamic from "next/dynamic";
import { FaCalendarCheck } from "react-icons/fa";
import Image from "next/image";
import Button from "./common/Button";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";
import Link from "next/link";

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

const HeroContent = () => {
  const { language } = useLanguage();

  const t = useTranslation(language);

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center">
      <div className="mt-24 flex max-w-4xl flex-col items-center justify-center px-5 text-center sm:px-10">
        <h1 className="font-anton hero-header text-blue-100">
          {t.hero.titleLine1}
          <br />
          {t.hero.titleLine2}
        </h1>
        <div className="max-w-2xl mt-2">
          <h2
            className="mt-4 text-lg font-bold text-blue-100 sm:text-xl"
            dangerouslySetInnerHTML={{ __html: t.hero.subtitle }}
          />
          <p className="mb-6 mt-4 font-robert-regular text-blue-100">
            {t.hero.description}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSebf0dzOSg3335jiYzOOLgX0x5BAzJwUVSZaTUG_2wV3gqsAQ/viewform"
          >
            <Button
              id="Join-us"
              title={t.hero.joinUs}
              containerClass="!bg-[#FF8C00] flex items-center justify-center gap-1 px-6 py-2"
            />
          </a>
          <Link href="/schedule">
            <Button
              id="Upcoming-events"
              title={t.hero.events}
              leftIcon={<FaCalendarCheck />}
              containerClass="!bg-[#FF8C00] flex items-center justify-center gap-2 px-6 py-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
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
