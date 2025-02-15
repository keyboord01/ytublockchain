"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import {
  englishTeamMembers,
  TeamMember,
  turkishTeamMembers,
} from "@/data/TeamMembers";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

const Skeleton = () => (
  <div className="flex flex-col items-center animate-pulse">
    <div className="w-48 h-48 rounded-full bg-zinc-800 mb-6" />
    <div className="h-6 w-32 bg-zinc-800 rounded mb-2" />
    <div className="h-4 w-24 bg-zinc-800 rounded mb-4" />
    <div className="flex space-x-4">
      <div className="w-5 h-9 bg-zinc-800/0 rounded" />
    </div>
  </div>
);

const FilterSkeleton = () => (
  <div className="flex flex-wrap justify-center gap-4 animate-pulse">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="h-10 w-24 bg-zinc-800 rounded-full"
      />
    ))}
  </div>
);

type SocialLink = {
  icon: React.ComponentType<{ className?: string }>;
  link?: string;
  label: string;
};

const SocialLinks = ({
  links,
  isModal = false,
}: {
  links: SocialLink[];
  isModal?: boolean;
}) => (
  <div className="flex gap-2">
    {links.map(({ icon: Icon, link, label }, idx) => (
      <motion.a
        key={idx}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center ${
          isModal ? "gap-2 px-4 py-2 bg-zinc-800/50" : "p-2"
        } rounded-lg text-gray-300 hover:bg-[#FF8C00] hover:text-white transition-colors duration-300 ${
          link ? "block" : "hidden"
        }`}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 + idx * 0.1 }}
      >
        {link && <Icon className="w-5 h-5" />}
        {isModal && <span className="text-sm md:block hidden">{label}</span>}
      </motion.a>
    ))}
  </div>
);

export const MemberCard = ({
  member,
  onClick,
}: {
  member: TeamMember;
  onClick: (member: TeamMember, event: React.MouseEvent) => void;
}) => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  return (
    <motion.div
      className="flex flex-col items-center group cursor-pointer"
      onClick={(e) => onClick(member, e)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative mb-6">
        <motion.div
          className="w-48 h-48 rounded-full p-1 bg-[#FF8C00]"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-black p-1 relative">
            {!isImageLoaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-800/80 animate-pulse">
                <div className="w-10 h-10 bg-zinc-700 rounded-full" />
              </div>
            )}

            <Image
              src={member.image}
              alt={member.name}
              className="rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
              width={500}
              height={500}
              onLoadingComplete={() => setIsImageLoaded(true)}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 rounded-full flex items-center justify-center bg-black/50"
        >
          <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-[#FF8C00]">
            {t.teamSection.viewProfile}
          </span>
        </motion.div>
      </div>
      <motion.h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF8C00] transition-colors duration-300">
        {member.name}
      </motion.h3>
      <p className="text-gray-400 mb-4">
        {member.roles.filter((role) => role).join(" & ")}
      </p>
      <SocialLinks
        links={[
          { icon: FaGithub, link: member.github, label: "GitHub" },
          { icon: FaTwitter, link: member.twitter, label: "Twitter" },
          { icon: FaLinkedin, link: member.linkedin, label: "LinkedIn" },
        ]}
      />
    </motion.div>
  );
};

export const MemberModal = ({
  member,
  onClose,
  position,
}: {
  member: TeamMember;
  onClose: () => void;
  position: { x: number; y: number };
}) => {
  const [isModalImageLoaded, setIsModalImageLoaded] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
          x: position.x - window.innerWidth / 2,
          y: position.y - window.innerHeight / 2,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          transition: { type: "spring", duration: 0.5, bounce: 0.3 },
        }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
        className="bg-zinc-900/70 border border-[#FF8C00]/5 text-sm shadow-xl p-8 rounded-2xl max-w-2xl w-full relative backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-zinc-800/50 p-2 rounded-full transition-colors duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-[#FF8C00] relative group"
          >
            {!isModalImageLoaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-800/80 animate-pulse">
                <div className="w-12 h-12 bg-zinc-700 rounded-full" />
              </div>
            )}

            <Image
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-300"
              width={500}
              height={500}
              onLoadingComplete={() => setIsModalImageLoaded(true)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-grow"
          >
            <h3 className="text-3xl font-bold text-white mb-2">
              {member.name}
            </h3>
            <p className="text-[#FF8C00] font-medium mb-4">
              {member.roles.filter((role) => role).join(" & ")}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {member.description}
            </p>
            <SocialLinks
              links={[
                { icon: FaGithub, link: member.github, label: "GitHub" },
                { icon: FaTwitter, link: member.twitter, label: "Twitter" },
                { icon: FaLinkedin, link: member.linkedin, label: "LinkedIn" },
              ]}
              isModal={true}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TeamSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState<boolean>(true);

  const teamMembers: TeamMember[] =
    language === "tr" ? turkishTeamMembers : englishTeamMembers;

  useEffect(() => {
    setLoading(false);
  }, []);

  const uniqueRoles = Array.from(
    new Set(teamMembers.flatMap((member) => member.roles))
  )
    .filter((role) => role !== "Supreme Leader" && role !== "Üst Lider")
    .sort((a, b) => (a === "President" ? -1 : b === "President" ? 1 : 0));

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleMemberClick = (member: TeamMember, event: React.MouseEvent) => {
    const rect = (event.currentTarget as Element).getBoundingClientRect();
    setClickPosition({ x: rect.left, y: rect.top });
    setSelectedMember(member);
  };

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 md:mb-10"
        >
          <h1 className="text-center font-anton text-5xl font-black uppercase text-blue-100 sm:text-5xl md:text-7xl lg:text-8xl">
            {t.teamSection.header}
          </h1>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-4 mb-8 md:mb-12">
          {loading ? (
            <FilterSkeleton />
          ) : (
            ["all", ...uniqueRoles].map((role) => (
              <motion.button
                key={role}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleFilterChange(role)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === role
                    ? "bg-[#FF8C00] text-white"
                    : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                }`}
              >
                {role === "all" ? t.teamSection.filterAll : role}
              </motion.button>
            ))
          )}
        </div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {loading
            ? [...Array(8)].map((_, i) => <Skeleton key={i} />)
            : teamMembers
                .filter(
                  (member) => filter === "all" || member.roles.includes(filter)
                )
                .map((member) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    onClick={handleMemberClick}
                  />
                ))}
        </motion.div>

        <AnimatePresence>
          {selectedMember && (
            <MemberModal
              member={selectedMember}
              onClose={() => setSelectedMember(null)}
              position={clickPosition}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TeamSection;
