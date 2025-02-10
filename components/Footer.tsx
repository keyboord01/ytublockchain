"use client";
import { useState } from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

const Footer = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const footerSections = [
    {
      title: t.footer.about,
      links: [
        { label: t.footer.team, href: "/team" },
        // { label: t.footer.vision, href: "#" },
      ],
    },
    {
      title: t.footer.resources,
      links: [
        // { label: t.footer.documentation, href: "#" },
        // { label: t.footer.whitepaper, href: "#" },
        { label: t.footer.blog, href: "https://medium.com/ytublockchain" },
      ],
    },
    {
      title: t.footer.community,
      links: [
        // { label: t.footer.discord, href: "#" },
        { label: t.footer.events, href: "/schedule" },
        // { label: t.footer.forum, href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      label: t.footer.registration,
      href: "https://forms.example.com",
      icon: (
        <svg
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "https://x.com/BlockchainYtu",
      icon: <FaTwitter size={24} />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ytu_blockchain?r=nametag",
      icon: <FaInstagram size={24} />,
    },
    {
      label: "Medium",
      href: "https://medium.com/ytublockchain",
      icon: <FaMedium size={24} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/ytu-blockchain/posts/?feedView=all",
      icon: <FaLinkedin size={24} />,
    },
    {
      label: "Discord",
      href: "https://discord.gg/nFmUGsNZZY",
      icon: <FaDiscord size={24} />,
    },
    {
      label: "Spotify",
      href: "https://open.spotify.com/show/5bA9wkC2zxASZCOKzu5EOX?dd=1&nd=1&si=S76JgCmhR7im9vmQHyByXw&utm_medium=share&utm_source=linktree",
      icon: <FaSpotify size={24} />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-black">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent opacity-30">
        <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative flex items-center space-x-3">
                <Image
                  src="/img/logo.png"
                  width={64}
                  height={64}
                  alt="YTU Blockchain Club Logo"
                  className="relative rounded-lg bg-white/5 p-2 transition-transform duration-300"
                />
                <h2 className="relative text-2xl font-bold text-white">
                  YTU<span className="text-[#FF8C00]">Blockchain</span>
                </h2>
              </div>
              <p className="mt-6 text-lg font-light leading-relaxed text-gray-400">
                {t.footer.description}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_"
                    rel="noopener noreferrer"
                    className="group relative"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex-row-center relative rounded-full bg-white/5 p-3 transition-all duration-300 hover:bg-white/10">
                      <span
                        className={`transition-all duration-300 ${
                          hoveredItem === index
                            ? "scale-110 text-[#FF8C00]"
                            : "text-gray-400"
                        }`}
                      >
                        {link.icon}
                      </span>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {link.label}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-3">
            {footerSections.map((section) => (
              <div
                key={section.title}
                className="flex flex-col items-center lg:items-start"
              >
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#FF8C00]">
                  {section.title}
                </h3>
                <ul className="flex flex-col items-center space-y-4 lg:items-start">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_"
                        className="relative text-gray-400 transition-colors hover:text-white"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#FF8C00] transition-all duration-300 hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            Developed with
            <span className="mx-1 inline-block text-[#FF8C00]">❤️</span>
            by
            <a
              href="https://x.com/keyyyy01"
              target="_"
              rel="noopener noreferrer"
              className="ml-1 text-[#FF8C00] transition-colors hover:text-[#FF8C00]/80"
            >
              @keyyyy01
            </a>
          </p>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="group relative flex items-center gap-2 rounded-full bg-[#FF8C00]/10 px-4 py-2 text-sm text-[#FF8C00] transition-all hover:bg-[#FF8C00]/20"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp
              className={`size-4 transition-transform duration-300 ${
                isButtonHovered ? "-translate-y-1" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
