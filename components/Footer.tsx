"use client";
import { JSX, useState } from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

interface Link {
  label: string;
  href: string;
  icon?: JSX.Element;
}

interface Section {
  title: string;
  links: Link[];
}

const Footer = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const footerSections: Section[] = [
    {
      title: "About",
      links: [
        { label: "Team", href: "#" },
        { label: "Vision", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Whitepaper", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Discord", href: "#" },
        { label: "Events", href: "#" },
        { label: "Forum", href: "#" },
      ],
    },
  ];

  const socialLinks: Link[] = [
    {
      label: "2024-2025 Registration",
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
      href: "https://twitter.com",
      icon: (
        <svg
          className="size-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 003.96 9.824a4.647 4.647 0 01-2.11-.583v.06a4.66 4.66 0 003.737 4.568 4.692 4.692 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995 9.5 9.5 0 01-1.112-.065 13.175 13.175 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 002.323-2.41z" />
        </svg>
      ),
    },
    {
      label: "Website",
      href: "https://example.com",
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
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg
          className="size-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  const [isButtonHovered, setIsButtonHovered] = useState(false);

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
                  className="relative  rounded-lg bg-white/5 p-2 transition-transform duration-300"
                />
                <h2 className="relative text-2xl font-bold text-white">
                  YTU<span className="text-[#FF8C00]">Blockchain</span>
                </h2>
              </div>
              <p className="mt-6 text-lg font-light leading-relaxed text-gray-400">
                Pioneering the future of blockchain technology through
                innovation, education, and community engagement.
              </p>

              <div className="mt-8 flex justify-center space-x-4 lg:justify-start">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
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
              target="_blank"
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
            <span>Back to top</span>
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
