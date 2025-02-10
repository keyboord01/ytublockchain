"use client";
import { useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Users, Globe, Trophy, Rocket, ArrowDown } from "lucide-react";

import StatisticCard from "@/components/common/StatisticCard";
import PartnersSlider from "@/components/common/PartnersSlider";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

gsap.registerPlugin(ScrollTrigger);

const ScrollIndicator = ({ progress = 0 }) => {
  return (
    <div className="hidden md:flex flex-col items-center gap-3 rounded-full py-1">
      <div className="relative h-32 w-[3px] rounded-full overflow-hidden">
        <div
          className="absolute bottom-0 w-full bg-black transition-all duration-300 rounded-full"
          style={{
            height: `${progress}%`,
            transition: "height 0.3s ease-out",
          }}
        />
      </div>
      <div className="rounded-full flex items-center justify-center">
        <ArrowDown
          className={`w-8 h-8 text-black transition-all duration-500 ${
            progress < 100 ? "animate-bounce" : ""
          }`}
        />
      </div>
    </div>
  );
};

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { language } = useLanguage();
  const t = useTranslation(language);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            setScrollProgress(Math.round(self.progress * 100));
          },
        },
      });

      clipAnimation.to(".sliding-image", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });
    });
  });

  return (
    <>
      <PartnersSlider />
      <div
        id="about"
        className="min-h-screen w-screen"
      >
        <div className="relative mb-8 flex flex-col items-center gap-5">
          <div className="relative">
            <h2
              className="text-center font-anton text-3xl font-black uppercase sm:text-4xl md:text-5xl lg:text-7xl tracking-wider !leading-tight"
              dangerouslySetInnerHTML={{ __html: t.about.heading }}
            />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-3xl bg-gradient-to-r from-[#000560]/10 to-[#FF8C00]/10 opacity-70" />
          </div>
          <div className="stats-grid grid grid-cols-1 gap-14 p-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <StatisticCard
              icon={Users}
              value={1400}
              label={t.about.stats.members}
              description={t.about.stats.membersDescription}
              delay={0}
            />
            <StatisticCard
              icon={Globe}
              value={15}
              label={t.about.stats.countries}
              description={t.about.stats.countriesDescription}
              delay={0.2}
            />
            <StatisticCard
              icon={Trophy}
              value={25}
              label={t.about.stats.hackathons}
              description={t.about.stats.hackathonsDescription}
              delay={0.4}
            />
            <StatisticCard
              icon={Rocket}
              value={50}
              label={t.about.stats.projects}
              description={t.about.stats.projectsDescription}
              delay={0.6}
            />
          </div>

          <div className="subtext translate-y-12 sm:translate-y-0 md:block hidden">
            <p>{t.about.description}</p>
            <p className="text-gray-500">{t.about.subtext}</p>
          </div>
        </div>

        <div
          className="h-[100vh] w-screen pb-8 md:pb-0 md:block hidden "
          id="clip"
        >
          <div className="sliding-image left-0 translate-x-0 md:left-1/2 md:-translate-x-1/2 h-[60vh] w-96 origin-center overflow-hidden rounded-3xl md:w-[30vw]">
            <Image
              src="/img/about.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-x-0 bottom-12 flex justify-center z-10">
            <ScrollIndicator progress={scrollProgress} />
          </div>
        </div>

        <div className="relative h-[70vh] translate-y-1 w-screen md:hidden block">
          <div className="absolute inset-0 rounded-t-lg overflow-hidden">
            <Image
              src="/img/about.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-circular-web text-lg tracking-tighter text-center bg-black/60 backdrop-blur-[1px] shadow-xl rounded-sm py-2 px-2 mx-2">
              <p
                className="text-white"
                dangerouslySetInnerHTML={{ __html: t.about.mobileText }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
