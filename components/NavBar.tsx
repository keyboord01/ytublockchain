"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/public/img/logo.png";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

interface TranslationKeys {
  nav: {
    home: string;
    team: string;
    about: string;
    events: string;
    roadmap: string;
  };
}

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const { language, setLanguage } = useLanguage();
  const t = useTranslation(language);

  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "home", path: "/" },
    { name: "team", path: "/team" },
    { name: "about", path: "/#about" },
    { name: "events", path: "/#events" },
    { name: "roadmap", path: "/#roadmap" },
  ];

  const handleNavClick = async (path: string) => {
    const [route, hash] = path.split("#");
    if (route !== pathname) router.push(route);
    if (hash) {
      const element = document.getElementById(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!isMenuOpen) {
        setIsVisible(currentScrollY < 100 || currentScrollY < lastScrollY);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const menuVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 },
  };

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-lg transition-all duration-300 ${
        isVisible || isMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="z-50"
          >
            <motion.div
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                width={40}
                height={40}
                src={Logo}
                alt="logo"
                className="rounded-lg transition-opacity duration-200 hover:opacity-80"
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ opacity: 0.8 }}
                  className="group relative px-3 py-2"
                  onClick={() => handleNavClick(item.path)}
                >
                  <span className="text-sm uppercase font-medium text-blue-50 relative block overflow-hidden h-6">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      {t.nav[item.name as keyof TranslationKeys["nav"]]}
                    </span>
                    <span className="absolute inset-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-orange-500">
                      {t.nav[item.name as keyof TranslationKeys["nav"]]}
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="ml-4 flex gap-2 border-l border-white/20 pl-4">
              {["en", "tr"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as "tr" | "en")}
                  className={`px-3 py-1 rounded-md text-sm uppercase ${
                    language === lang
                      ? "text-orange-500"
                      : "text-blue-50 opacity-50 hover:opacity-80"
                  } transition-opacity`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ opacity: 0.8 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 rounded-lg p-2 text-blue-50 md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  variants={itemVariants}
                  className="text-xl font-medium text-blue-50 relative"
                  onClick={() => handleNavClick(item.path)}
                >
                  <span className="pb-1 hover:opacity-80 transition-opacity">
                    {t.nav[item.name as keyof TranslationKeys["nav"]]}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-orange-500 scale-0 transition-transform duration-300 hover:scale-100" />
                  </span>
                </motion.button>
              ))}

              <motion.div
                variants={itemVariants}
                className="mt-8 flex gap-4"
              >
                {["en", "tr"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang as "tr" | "en")}
                    className={`px-4 py-2 rounded-md text-sm uppercase ${
                      language === lang ? "text-orange-500" : "text-blue-50/50"
                    } hover:opacity-80 transition-opacity`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
