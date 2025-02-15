"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Globe,
  Users,
  Trophy,
  ExternalLink,
  ArrowRight,
  Target,
} from "lucide-react";

const researchAreas = [
  {
    title: "Zero-Knowledge Proofs",
    description:
      "Pioneering privacy-preserving blockchain solutions through advanced cryptographic techniques.",
    stats: { papers: 12, projects: 8, impact: "High" },
  },
  {
    title: "DeFi Security",
    description:
      "Developing next-generation security protocols for decentralized finance applications.",
    stats: { papers: 8, projects: 15, impact: "Critical" },
  },
  {
    title: "Layer 2 Scaling",
    description:
      "Researching innovative scaling solutions for blockchain networks.",
    stats: { papers: 5, projects: 12, impact: "Medium" },
  },
];

const flagshipProjects = [
  {
    title: "ZKbridge Protocol",
    status: "Live",
    metrics: {
      tvl: "$5M+",
      transactions: "100K+",
      chains: 5,
    },
    description:
      "Cross-chain bridge utilizing zero-knowledge proofs for secure and private asset transfers across multiple blockchain networks. Winner of ETHGlobal 2024.",
    tech: ["ZK-SNARKs", "Solidity", "Rust"],
  },
  {
    title: "DeFiGuard AI",
    status: "Beta",
    metrics: {
      protected: "$50M+",
      accuracy: "99.9%",
      alerts: "500+",
    },
    description:
      "AI-powered DeFi security protocol protecting against flash loan attacks and exploits. Featured in top blockchain security conferences.",
    tech: ["Python", "TensorFlow", "Ethereum"],
  },
];

const AboutUsSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("research");
  const [animatedNumbers, setAnimatedNumbers] = useState({
    projects: 0,
    members: 0,
    events: 0,
    papers: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep === steps) {
        clearInterval(timer);
        return;
      }

      setAnimatedNumbers({
        projects: Math.min(Math.floor((45 * currentStep) / steps), 45),
        members: Math.min(Math.floor((1500 * currentStep) / steps), 1500),
        events: Math.min(Math.floor((120 * currentStep) / steps), 120),
        papers: Math.min(Math.floor((25 * currentStep) / steps), 25),
      });

      currentStep++;
    }, interval);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const handleScrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleSectionChange = (section: React.SetStateAction<string>) => {
    setActiveSection(section);
  };

  const renderActiveContent = () => {
    switch (activeSection) {
      case "research":
        return (
          <div className="space-y-12">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-bold text-[#FF8C00]">
                      {area.title}
                    </h3>
                    <div className="flex gap-4">
                      {Object.entries(area.stats).map(([key, value]) => (
                        <div
                          key={key}
                          className="text-right"
                        >
                          <div className="text-2xl font-bold">{value}</div>
                          <div className="text-sm text-zinc-500 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-lg text-zinc-400">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "projects":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {flagshipProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 rounded-xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#FF8C00] mb-2">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-[#FF8C00]/20 text-[#FF8C00] text-sm rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-zinc-400 mb-6">{project.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center p-4 bg-black/20 rounded-lg"
                    >
                      <div className="text-xl font-bold text-[#FF8C00]">
                        {value}
                      </div>
                      <div className="text-sm text-zinc-500 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 text-sm rounded-full text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "community":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-5xl font-bold leading-tight">
                Building a
                <span className="text-[#FF8C00] block">Global Community</span>
              </h2>
              <p className="text-xl text-zinc-400">
                Our community extends beyond Istanbul, connecting blockchain
                enthusiasts, researchers, and industry professionals worldwide.
              </p>
              <ul className="space-y-4">
                {[
                  "Regular workshops and hackathons",
                  "Industry networking events",
                  "Research presentations",
                  "Technical training sessions",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-zinc-400"
                  >
                    <ArrowRight className="w-4 h-4 text-[#FF8C00]" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, label: "Global Impact", value: "30+ Countries" },
                { icon: Users, label: "Active Members", value: "1500+" },
                { icon: Trophy, label: "Awards", value: "15+" },
                { icon: Target, label: "Events", value: "120+ Annual" },
              ].map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                >
                  <Icon className="w-6 h-6 text-[#FF8C00] mb-4" />
                  <div className="text-2xl font-bold mb-1">{value}</div>
                  <div className="text-sm text-zinc-500">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#FF8C00]/20 via-transparent to-black"
          style={{
            transform: `translateY(${scrollPosition * 0.5}px)`,
          }}
        />

        <div className="absolute inset-0">
          <div className="h-full flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center relative z-10 max-w-7xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.h1
                  className="text-7xl md:text-9xl font-black tracking-tight mb-8"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  YTU
                  <span className="text-[#FF8C00]"> Blockchain</span>
                </motion.h1>

                <div className="max-w-3xl mx-auto space-y-6 mb-16">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl md:text-3xl text-zinc-400"
                  >
                    Where Innovation Meets Implementation
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg text-zinc-500"
                  >
                    Istanbuls premier blockchain research & development hub,
                    bridging academic excellence with enterprise solutions.
                  </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                  {[
                    { label: "Projects", value: animatedNumbers.projects },
                    { label: "Members", value: animatedNumbers.members },
                    { label: "Events", value: animatedNumbers.events },
                    { label: "Papers", value: animatedNumbers.papers },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="text-center relative group"
                    >
                      <div className="absolute inset-0" />
                      <h3 className="text-4xl md:text-5xl font-bold text-[#FF8C00] mb-2">
                        {stat.value}+
                      </h3>
                      <p className="text-zinc-400 font-medium">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  onClick={handleScrollToContent}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
                >
                  <span>Explore</span>
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white/5 rounded-full p-1">
              {[
                { id: "research", label: "Research" },
                { id: "projects", label: "Projects" },
                { id: "community", label: "Community" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleSectionChange(tab.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSection === tab.id
                      ? "bg-[#FF8C00] text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderActiveContent()}
          </motion.div>
        </div>
      </div>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF8C00]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Whether youre a researcher, developer, or industry partner, theres
              a place for you in our community.
            </p>
            <button className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 group">
              Connect With Us
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
