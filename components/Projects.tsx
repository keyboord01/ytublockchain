"use client";

import { useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { ExternalLink, Calendar, Award } from "lucide-react";
import EventMap from "@/components/common/EventMap";
import { eventData } from "@/data/EventData";
import { isMobile } from "react-device-detect";
import Image from "next/image";

interface ProjectsCardProps {
  src: string;
  title: React.ReactNode;
  description?: string;
  isComingSoon?: boolean;
  projectUrl?: string;
  date?: string;
  awards?: string[];
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({
  src,
  title,
  description,
  isComingSoon,
  projectUrl,
  date,
  awards = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const maxDescriptionLength = 80;

  const truncateDescription = (text: string): string => {
    if (text.length <= maxDescriptionLength) return text;
    return text.slice(0, maxDescriptionLength).trim() + "...";
  };

  return (
    <div
      className="group relative size-full cursor-pointer overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/20 to-black/90" />

      {projectUrl && (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute right-3 top-3 z-20 rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all 
            duration-300 hover:scale-105 hover:bg-white/20 md:right-5 md:top-5 
            md:p-3 ${
              isHovered || isMobile
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
        >
          <ExternalLink className="size-4 text-white md:size-5" />
        </a>
      )}

      <div className="relative z-10 flex size-full flex-col p-4 sm:p-6 md:p-8">
        <div className="space-y-4 transition-all duration-300 md:space-y-6">
          <h1 className="projects-cards bc-font text-3xl text-white sm:text-4xl md:text-5xl ">
            {title}
          </h1>

          {awards.length > 0 && (
            <div className="flex flex-wrap gap-2 transition-all duration-300 md:gap-2">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs 
                    text-white backdrop-blur-sm transition-all duration-300 
                    group-hover:bg-white/20 sm:text-sm md:gap-1 md:px-2 md:py-1 md:text-base"
                >
                  <Award className="size-3 text-yellow-300 md:size-4" />
                  <span className="whitespace-nowrap font-normal">{award}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-auto pt-4 transition-all duration-300 md:pt-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {description && (
              <p
                className="max-w-2xl text-sm leading-relaxed text-gray-300 transition-all duration-300 
              group-hover:text-white sm:text-base md:text-lg"
              >
                {truncateDescription(description)}
              </p>
            )}
            {date && (
              <div className="flex items-center gap-1.5 text-sm text-gray-300 group-hover:text-white md:gap-2 md:text-base">
                <Calendar className="size-4 md:size-5" />
                <span>{date}</span>
              </div>
            )}

            {isComingSoon && (
              <span
                className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 
                text-sm text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 
                md:px-4 md:py-2 md:text-base"
              >
                <TiLocationArrow className="text-lg" />
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>

      <Image
        src={src}
        alt={typeof title === "string" ? title : "Project Image"}
        fill
        className="object-cover object-center transition-all duration-500 ease-out group-hover:scale-105"
      />
    </div>
  );
};

const ViewAllCard: React.FC = () => (
  <div className="projects-cards group cursor-pointer overflow-hidden rounded-lg">
    <div
      className="relative flex size-full flex-col justify-between bg-gradient-to-br 
      from-[#000560] to-[#030642] p-4 transition-all duration-300  
      sm:p-6 md:p-8"
    >
      <div className="space-y-4 md:space-y-6">
        <h1
          className="projects-cards bc-font text-3xl text-white transition-all duration-300 
           sm:text-6xl md:text-7xl lg:text-[150px]"
        >
          View All Projects
        </h1>
      </div>

      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-wrap gap-2 transition-all duration-300  md:gap-4">
          <div
            className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1.5 text-xs 
            text-white/90 transition-all duration-300 group-hover:bg-white/20 sm:text-sm md:gap-2 
            md:px-4 md:py-2 md:text-base"
          >
            <Award className="size-3.5 md:size-5" />
            20+ Projects
          </div>
          <div
            className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1.5 text-xs 
            text-white/90 transition-all duration-300 group-hover:bg-white/20 sm:text-sm md:gap-2 
            md:px-4 md:py-2 md:text-base"
          >
            <Award className="size-3.5 md:size-5" />
            5+ Hackathon Wins
          </div>
        </div>
        <div className="self-end transition-all duration-300 group-hover:translate-x-3">
          <div
            className="rounded-full bg-white/10 p-3 transition-all duration-300 group-hover:bg-white/20 
          md:p-4"
          >
            <TiLocationArrow className="scale-150 text-white md:scale-[2]" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => (
  <section
    id="projects"
    className="bg-gradient-to-b from-zinc-950 to-black pb-24 md:pb-52"
  >
    <div className="container mx-auto px-4 md:px-10">
      <div className="py-12 md:py-24">
        <h2 className="mb-6 font-circular-web text-2xl text-blue-50 sm:text-3xl md:text-4xl">
          Explore Our Blockchain Journey
        </h2>
        <p className="max-w-md font-circular-web text-base text-blue-50/80 md:text-lg">
          Embark on a journey through the world where innovation, collaboration,
          and technology converge to redefine the future of the internet.
        </p>
      </div>

      <div
        className="relative mb-6 h-64 w-full overflow-visible rounded-lg border border-white/20 sm:h-96 
        md:mb-10 md:h-[65vh]"
      >
        <EventMap events={eventData} />
      </div>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
        <div className="projects-cards">
          <ProjectsCard
            src="/img/projects/cosmocProof.jpg"
            title={
              <>
                Cosmic<b>P</b>roof
              </>
            }
            description="Our Cosmic Proof project revolutionizes blockchain interoperability by implementing zero-knowledge proofs across multiple chains. This groundbreaking solution secured multiple victories at Lambda Hack Week, demonstrating its potential to reshape cross-chain communication..."
            projectUrl="https://example.com/cosmic-proof"
            date="March 2024"
            awards={["1st Place Cosmos", "1st Place Mina", "3rd Overall"]}
          />
        </div>
        <div className="projects-cards">
          <ProjectsCard
            src="/img/projects/orchave.jpg"
            title={
              <>
                Or<b>ch</b>ave
              </>
            }
            description="Orchave is a modular decentralized oracle solution that streamlines the process of verifying and delivering off-chain data to blockchains. It features a Provider App for users to easily become data providers, a lightweight Verifier Network that enables rapid data verification without relying on traditional consensus mechanisms, and a user-friendly dashboard for accessing the best archive endpoints. By integrating Filecoin for persistent storage, Avail for fast block ordering finality, and dynamic social reputation mechanisms, Orchave establishes a scalable, trustless, and efficient ecosystem for decentralized data access and monetization."
            projectUrl="https://example.com/orchave"
            date="ETHGlobal Brussels"
            awards={[
              "1st Place Filecoin Track",
              "Pool Prize AvailProject Track",
            ]}
          />
        </div>

        <div className="projects-cards">
          <ProjectsCard
            src="/img/projects/nevo.jpg"
            title={
              <>
                Ne<b>VO</b>
              </>
            }
            description="NEVO seamlessly integrates Near Protocol's Cross-Chain Signatures with MACI's secure, zero-knowledge proof-powered voting system to deliver a smooth, private, and bribe-resistant voting experience. By leveraging these groundbreaking technologies, NEVO ensures that even users with minimal tech experience can participate confidently in elections, paving the way for MACI to be adopted in national elections while maintaining accessibility and security for all voters."
            projectUrl="https://example.com/nevo"
            date="ETHGlobal Brussels"
            awards={["Won in 2 Tracks", "Multiple Prizes"]}
          />
        </div>

        <ViewAllCard />
      </div>
    </div>
  </section>
);

export default Projects;
