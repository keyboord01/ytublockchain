"use client";
import { useState } from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const footerSections = [
    {
      title: "Content",
      links: [
        { label: "X", href: "https://www.x.com/blockchainytu/" },
        {
          label: "Instagram",
          href: "https://www.instagram.com/ytu_blockchain/",
        },
      ],
    },
    {
      title: "Extra",
      links: [
        {
          label: "Brand Kit",
          href: "https://www.instagram.com/ytu_blockchain/",
        },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-black !font-sans">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:pt-[200px] pt-[50px]">
        <div className="flex flex-col justify-between lg:flex-row gap-16">
          <div className="max-w-[500px] flex flex-col items-start text-left">
            <div className="relative flex items-center space-x-3">
              <Image
                src="/img/logo.png"
                width={64}
                height={64}
                alt="YTU Blockchain Club Logo"
                className="relative rounded-lg bg-white/5 p-2 transition-transform duration-300"
              />
              <h2 className="relative text-2xl font-bold text-white">
                YTUBlockchain
              </h2>
            </div>
            <p className="mt-6 text-lg font-light leading-relaxed ">
              Pioneering the future of blockchain technology through innovation,
              education, and community engagement.
            </p>
          </div>

          <div className="w-fit flex flex-wrap gap-8">
            {footerSections.map((section) => (
              <div
                key={section.title}
                className="flex flex-col items-center sm:items-start min-w-[150px]"
              >
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#A0F562]">
                  {section.title}
                </h3>
                <ul className="flex flex-col space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target="_"
                        className="relative text-gray-400 transition-colors hover:text-white"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#A0F562] transition-all duration-300 group-hover:w-full hover:w-full" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-end gap-6 border-t border-white/10 pt-8 md:flex-row">
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="group relative flex items-center gap-2 rounded-full bg-[#A0F562]/10 px-4 py-2 text-sm text-[#A0F562] transition-all hover:bg-[#A0F562]/20"
          >
            <span>Back To Top</span>
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
