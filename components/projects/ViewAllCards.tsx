"use client";
import React, { useState } from "react";
import { Award, X } from "lucide-react";
import { TiLocationArrow } from "react-icons/ti";

import { motion, AnimatePresence } from "framer-motion";
import projectsData from "@/data/projectsData";
import { ProjectsCard } from "./ProjectsCard";

const ViewAllCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div
        className="projects-cards group cursor-pointer overflow-hidden rounded-lg"
        onClick={handleOpen}
      >
        <div className="relative flex size-full flex-col justify-between bg-gradient-to-br from-[#000560] to-[#030642] p-4 transition-all duration-300 sm:p-6 md:p-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="projects-title bc-font text-3xl text-white transition-all duration-300 sm:text-6xl md:text-7xl lg:text-[150px]">
              View All Projects
            </h1>
          </div>

          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-wrap gap-2 transition-all duration-300 md:gap-4">
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1.5 text-xs text-white/90 transition-all duration-300 group-hover:bg-white/20 sm:text-sm md:gap-2 md:px-4 md:py-2 md:text-base">
                <Award className="size-3.5 md:size-5" />
                20+ Projects
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1.5 text-xs text-white/90 transition-all duration-300 group-hover:bg-white/20 sm:text-sm md:gap-2 md:px-4 md:py-2 md:text-base">
                <Award className="size-3.5 md:size-5" />
                5+ Hackathon Wins
              </div>
            </div>
            <div className="self-end transition-all duration-300 group-hover:translate-x-3">
              <div className="rounded-full bg-white/10 p-3 transition-all duration-300 group-hover:bg-white/20 md:p-4">
                <TiLocationArrow className="scale-150 text-white md:scale-[2]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-7xl bg-zinc-900 rounded-lg max-h-[90vh] overflow-y-scroll"
            >
              <div className="sticky top-0 z-50 flex items-center justify-between bg-zinc-900/80 backdrop-blur-sm p-4 border-b border-white/10">
                <div></div>
                <h2 className="text-xl text-center font-zentry text-white sm:text-2xl">
                  All Projects
                </h2>
                <button
                  onClick={handleClose}
                  className="rounded-full bg-white/10 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:p-2"
                >
                  <X className="size-4 sm:size-5" />
                </button>
              </div>

              <div className="overflow-y-auto p-4 sm:p-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                  {projectsData.map((project, index) => (
                    <div
                      key={index}
                      className="projects-cards"
                    >
                      <ProjectsCard
                        src={project.src}
                        title={project.title}
                        description={project.description}
                        projectUrl={project.projectUrl}
                        date={project.date}
                        awards={project.awards}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ViewAllCards;
