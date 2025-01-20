"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Users, Globe, Trophy, Rocket } from "lucide-react";
import StatisticCard from "@/components/common/StatisticCard";
import PartnersSlider from "@/components/common/PartnersSlider";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
        },
      });

      clipAnimation.to(".sliding-image", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });
    });

    mm.add("(max-width: 767px)", () => {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=400 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
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
          <h2 className="text-center font-zentry text-3xl font-black uppercase text-[#000560] sm:text-4xl md:text-5xl lg:text-7xl">
            A thriving community of <br className="hidden md:block" />{" "}
            blockchain enthusiasts
          </h2>

          <p className="mx-auto mb-8 mt-4 max-w-2xl text-center text-lg text-gray-600">
            Join us in building the future of Web3 through innovation,
            collaboration, and continuous learning
          </p>

          <div className="grid grid-cols-1 gap-14 p-6 md:grid-cols-2 lg:grid-cols-4 ">
            <StatisticCard
              icon={Users}
              value={1400}
              label="Active Members"
              description="Growing community of developers, designers, and blockchain enthusiasts"
              delay={0}
            />
            <StatisticCard
              icon={Globe}
              value={15}
              label="Countries"
              description="Global presence with members from across different continents"
              delay={0.2}
            />
            <StatisticCard
              icon={Trophy}
              value={25}
              label="Hackathons"
              description="Competitive events where innovative solutions come to life"
              delay={0.4}
            />
            <StatisticCard
              icon={Rocket}
              value={50}
              label="Projects Built"
              description="Successful projects launched by our community members"
              delay={0.6}
            />
          </div>

          <div className="subtext translate-y-12 sm:translate-y-0">
            <p>
              Our blockchain club is more than just numbers. We&apos;re a
              community dedicated
            </p>
            <p className="text-gray-500">
              to learning, building, and innovating together. Whether
              you&apos;re a beginner or an experienced developer, there&apos;s a
              place for you here.
            </p>
          </div>
        </div>
        <div
          className="h-dvh w-screen pb-8 md:pb-0"
          id="clip"
        >
          <div className="sliding-image">
            <Image
              src="/img/about.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
