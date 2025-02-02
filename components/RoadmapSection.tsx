"use client";

import { useState } from "react";
import { ChevronRight, ExternalLink, BookOpen } from "lucide-react";
import Button from "@/components/common/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";
import {
  englishRoadmapData,
  turkishRoadmapData,
  Section,
  Subsection,
} from "@/data/roadmapData";

const RoadmapSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const roadmapData =
    language === "tr" ? turkishRoadmapData : englishRoadmapData;

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const renderSection = (section: Section | Subsection, depth = 0) => {
    const isExpanded = expandedSections.has(section.id);
    const hasSubsections =
      section.subsections && section.subsections.length > 0;
    const isHovered = hoveredSection === section.id;

    return (
      <motion.div
        key={section.id}
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => hasSubsections && toggleSection(section.id)}
          onHoverStart={() => setHoveredSection(section.id)}
          onHoverEnd={() => setHoveredSection(null)}
          className={`group flex w-full items-center gap-2 rounded-lg px-4 py-3 text-left transition-all
            ${depth === 0 ? "bg-zinc-900/10" : ""}
            ${
              hasSubsections
                ? "cursor-pointer bg-zinc-900/20"
                : "cursor-default"
            }
            ${isExpanded ? "bg-opacity-20" : ""}`}
        >
          <div className="flex-row-center w-6 shrink-0">
            {hasSubsections ? (
              <motion.span
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="size-4 text-[#FF8C00]" />
              </motion.span>
            ) : (
              <BookOpen className="size-4 text-[#FF8C00]/50" />
            )}
          </div>

          <span
            style={{ marginLeft: `${depth * 10}px` }}
            className={`min-w-0 flex-1 font-general text-sm transition-colors duration-200 sm:text-base
              ${
                isHovered && hasSubsections ? "text-[#FF8C00]" : "text-blue-50"
              }`}
          >
            {section.id}. {section.title}
          </span>

          {!hasSubsections && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="hidden shrink-0 text-xs text-[#FF8C00]/50 sm:block"
            >
              {t.roadMap.availableInFullGuide}
            </motion.span>
          )}
        </motion.button>

        <AnimatePresence>
          {isExpanded && hasSubsections && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#FF8C00]/20 pl-4">
                {section.subsections &&
                  section.subsections.map((subsection) =>
                    renderSection(subsection, depth + 1)
                  )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div
      id="roadmap"
      className="w-screen bg-gradient-to-b from-black to-zinc-950 px-4 pb-16 pt-12 text-blue-50 sm:pb-24"
    >
      <div className="mb-16 h-px bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent opacity-10" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-general text-xs uppercase text-[#FF8C00] sm:text-sm md:text-[10px]">
            {t.roadMap.header}
          </p>
          <h2 className="mt-2 font-zentry text-3xl font-black uppercase text-white sm:text-4xl md:text-5xl">
            {t.roadMap.title}
          </h2>
          <p className="mt-3 text-xs text-white/80 sm:mt-4 sm:text-sm">
            {t.roadMap.description}
          </p>
        </motion.div>

        <motion.div
          className="relative mt-6 rounded-xl bg-zinc-900/20 p-4 backdrop-blur-sm sm:mt-8 sm:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            {roadmapData.map((section) => renderSection(section))}
          </div>

          <motion.div
            className="mt-6 flex justify-center sm:mt-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="https://yildizblockchain.notion.site/YTU-Blockchain-Web3-Yol-Haritas-2678282cd53e490fb77111a87880369c"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                title={t.roadMap.fullGuideButton}
                leftIcon={<ExternalLink />}
                containerClass="flex-row-center gap-2 px-6 py-2 w-full sm:w-auto"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoadmapSection;
