"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Calendar,
  Award,
  X,
  MapPin,
  Pointer,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import Button from "../common/Button";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";
import Link from "next/link";

interface ProjectsCardProps {
  src: string;
  title: React.ReactNode;
  description?: string;
  isComingSoon?: boolean;
  projectUrl?: string;
  date?: string;
  awards?: string[];
  location?: string;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({
  src,
  title,
  description,
  projectUrl,
  date,
  awards = [],
  location,
}) => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const [isExpanded, setIsExpanded] = useState(false);
  const maxDescriptionLength = 80;

  const truncateDescription = (text: string): string => {
    if (!text) return "";
    if (text.length <= maxDescriptionLength) return text;
    return text.slice(0, maxDescriptionLength).trim() + "...";
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) return;
    setIsExpanded(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsExpanded(false);
    document.body.style.overflow = "";
  };

  const cardContent = (
    <>
      <div className="relative z-10 flex size-full flex-col p-4 sm:p-6 md:p-8">
        <h1 className="projects-title font-anton text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="absolute right-2 top-6 z-20 rounded-full p-1.5 backdrop-blur-sm sm:right-3 sm:top-3 sm:p-2 md:right-5 md:top-8 md:p-3">
          <Pointer className="size-3 text-white sm:size-4 md:size-5" />
        </div>
        {awards?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs 
                    text-white backdrop-blur-sm sm:text-sm md:gap-1 md:px-2 md:py-1"
              >
                <Award className="size-3 text-yellow-300 md:size-4" />
                <span className="whitespace-nowrap text-xs font-normal sm:text-sm">
                  {award}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto pt-3 sm:pt-4 md:pt-6">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
            {description && (
              <p className="max-w-2xl text-xs text-gray-300 sm:text-sm md:text-base">
                {truncateDescription(description)}
              </p>
            )}
            {date && (
              <div className="flex items-center gap-1.5 text-xs text-gray-300 sm:text-sm md:gap-2 md:text-base">
                <Calendar className="size-3 sm:size-4 md:size-5" />
                <span>{date}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <motion.div
        className="group relative size-full cursor-pointer overflow-hidden rounded-lg"
        onClick={handleCardClick}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/20 to-black/90" />
        {cardContent}
        <Image
          src={src}
          alt={typeof title === "string" ? title : "Project Image"}
          fill
          className="object-cover object-center transition-all duration-500 ease-out group-hover:scale-105"
        />
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 
                backdrop-blur-sm p-4 "
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-h-[90dvh] overflow-y-auto bg-zinc-900 md:max-w-6xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={handleClose}
                className="absolute right-3 top-3 z-50 rounded-full bg-white/10 p-1.5 text-white 
                    backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-4 sm:top-4 sm:p-2"
              >
                <X className="size-4 sm:size-5" />
              </motion.button>

              <div className="flex flex-col md:flex-row">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative h-[250px] w-full sm:h-[350px] md:h-[600px] md:w-1/2"
                >
                  <Image
                    src={src}
                    alt={typeof title === "string" ? title : "Project Image"}
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex w-full flex-col p-4 sm:p-6 md:w-1/2 md:p-8"
                >
                  <h2 className="projects-title font-anton text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    {title}
                  </h2>

                  {awards?.length > 0 && (
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2"
                    >
                      {awards.map((award, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 
                              text-xs text-white backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-sm"
                        >
                          <Award className="size-3 text-yellow-300 sm:size-4" />
                          <span>{award}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                  <div className="flex items-center justify-start gap-4">
                    {date && (
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-3 flex items-center gap-1 text-gray-300 sm:mt-4 sm:gap-2"
                      >
                        <Calendar className="size-4 sm:size-5" />
                        <span className="text-sm sm:text-base">{date}</span>
                      </motion.div>
                    )}

                    {location && (
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-3 flex items-center gap-1 text-gray-300 sm:mt-4 sm:gap-2"
                      >
                        <MapPin className="size-4 sm:size-5" />
                        <span className="text-sm sm:text-base">{location}</span>
                      </motion.div>
                    )}
                  </div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 flex-grow sm:mt-6"
                  >
                    <p className="text-sm text-gray-300 sm:text-base md:text-lg">
                      {description}
                    </p>
                  </motion.div>

                  {projectUrl && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-4 sm:mt-6"
                    >
                      <Link
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          title={t.projects.viewProject}
                          containerClass="px-3 py-1.5 sm:px-4 sm:py-2"
                          rightIcon={
                            <ExternalLink className="size-4 sm:size-5" />
                          }
                        />
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
