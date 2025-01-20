"use client";

import { useState } from "react";
import { ChevronRight, ExternalLink, BookOpen } from "lucide-react";
import Button from "@/components/common/Button";
import { motion, AnimatePresence } from "framer-motion";

interface Subsection {
  id: string;
  title: string;
  subsections?: Subsection[];
}

interface Section {
  id: string;
  title: string;
  subsections: Subsection[];
}

const RoadmapSection = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const roadmapData: Section[] = [
    {
      id: "0",
      title: "Guide to the Guide",
      subsections: [],
    },
    {
      id: "1",
      title: "What is Blockchain?",
      subsections: [],
    },
    {
      id: "2",
      title: "A detailed look at Bitcoin",
      subsections: [
        { id: "2.1", title: "Bitcoin History & Decentralization" },
        { id: "2.2", title: "Distributed Systems" },
        { id: "2.3", title: "More Hash related content" },
        { id: "2.4", title: "Digital Signatures and Asymmetric Cryptography" },
        { id: "2.5", title: "Proof of Work" },
      ],
    },
    {
      id: "3",
      title: "Ethereum",
      subsections: [
        {
          id: "3.1",
          title: "How Does Ethereum Work?",
          subsections: [
            { id: "3.1.1", title: "Consensus Mechanisms" },
            { id: "3.1.2", title: "Nodes, Validators and Mining" },
            { id: "3.1.3", title: "Ethereum Virtual Machine (EVM)" },
            { id: "3.1.4", title: "Gas Fees" },
            { id: "3.1.5", title: "Smart Contracts" },
            { id: "3.1.6", title: "Merkle Tree" },
          ],
        },
        { id: "3.2", title: "History of Ethereum" },
        { id: "3.3", title: "Difference Between Bitcoin and Ethereum" },
      ],
    },
    {
      id: "4",
      title: "Blockchain Ecosystem",
      subsections: [
        { id: "4.1", title: "Decentralized Applications (Dapps)" },
        { id: "4.2", title: "Wallets" },
        { id: "4.3", title: "Interacting with Web3" },
      ],
    },
    {
      id: "5",
      title: "Blockchain Application Areas and Concepts",
      subsections: [
        { id: "5.1", title: "DeFi" },
        { id: "5.2", title: "Stablecoins" },
        { id: "5.3", title: "Non-Fungible Token (NFT)" },
        { id: "5.4", title: "DAO (Decentralized Autonomous Organizations)" },
        { id: "5.5", title: "Other Blockchain Application Areas" },
        { id: "5.6", title: "Tokenomics" },
        { id: "5.7", title: "Oracle" },
      ],
    },
    {
      id: "6",
      title: "Advanced Blockchain Concepts",
      subsections: [],
    },
  ];

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
              Available in full guide
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
            your journey starts here
          </p>
          <h2 className="mt-2 font-family text-3xl font-black uppercase text-white sm:text-4xl md:text-5xl">
            our Web3 Roadmap
          </h2>
          <p className="mt-3 text-xs text-white/80 sm:mt-4 sm:text-sm">
            A comprehensive guide to help you navigate the world of blockchain
            and Web3
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
                title="view full guide"
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
