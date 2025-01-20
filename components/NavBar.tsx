"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "@/public/img/logo.png";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Events", path: "#events" },
    { name: "Roadmap", path: "#roadmap" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!isMenuOpen) {
        if (currentScrollY > 70) {
          setIsVisible(currentScrollY < lastScrollY);
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 rounded-b-md bg-black/50 backdrop-blur-sm transition-transform duration-300 ${
        isVisible || isMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-orange-500"
            >
              <Image
                width={40}
                height={40}
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  className="group relative rounded-md px-3 py-2 text-sm font-medium text-blue-50"
                  href={item.path}
                >
                  <span className="relative block h-5 overflow-hidden text-xs uppercase">
                    <span className="block font-general transition-transform duration-500 group-hover:-translate-y-full">
                      {item.name}
                    </span>
                    <span className="absolute left-0 top-full block font-general transition-transform duration-500 group-hover:-translate-y-full">
                      {item.name}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-blue-50 hover:bg-white/10 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-blue-50 "
              href={item.path}
            >
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
