"use client";
import Typewriter from "typewriter-effect";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import dictionaryTerms, { DictionaryEntry } from "@/data/dictionaryTerms";
import GridBackgroundSVG from "./assets/background.svg";

const BlockchainDictionary = () => {
  const [selectedTerm, setSelectedTerm] = useState<DictionaryEntry | null>(
    null
  );
  const [activeLetter, setActiveLetter] = useState("A");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<DictionaryEntry[]>(
    []
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const letterSections = useRef<{ [key: string]: HTMLDivElement }>({});
  const fullDictionaryRef = useRef<HTMLDivElement>(null);

  const groupedTerms = dictionaryTerms.reduce((acc, term) => {
    const firstLetter = term.term[0].toUpperCase();
    const key = /[A-Z]/.test(firstLetter) ? firstLetter : "#";
    if (!acc[key]) acc[key] = [];
    acc[key].push(term);
    return acc;
  }, {} as Record<string, DictionaryEntry[]>);

  const letters = Object.keys(groupedTerms).sort();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filtered = dictionaryTerms
        .filter((term) => term.term.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);
      setSearchSuggestions(filtered);
    } else {
      setSearchSuggestions([]);
    }
  };

  const handleSuggestionClick = (term: DictionaryEntry) => {
    setSelectedTerm(term);
    setSearchQuery("");
    setSearchSuggestions([]);
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollPosition = container.scrollTop + container.offsetTop + 50;

    const active = letters.find((letter) => {
      const section = letterSections.current[letter];
      if (!section) return false;
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
    });

    if (active && active !== activeLetter) setActiveLetter(active);
  };

  const scrollToLetter = (letter: string) => {
    const section = letterSections.current[letter];
    if (section && containerRef.current) {
      const top = section.offsetTop - containerRef.current.offsetTop - 32;
      containerRef.current.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleScrollToFullDictionary = () => {
    fullDictionaryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSurpriseMe = () => {
    const randomTerm =
      dictionaryTerms[Math.floor(Math.random() * dictionaryTerms.length)];
    setSelectedTerm(randomTerm);
  };

  const filteredGroupedTerms = Object.fromEntries(
    Object.entries(groupedTerms).map(([letter, terms]) => [letter, terms])
  );

  return (
    <div className="min-h-screen text-white">
      <div className="relative h-screen flex flex-col items-center justify-center text-center p-4">
        <div
          className="absolute -z-10 max-w-xl w-full h-1/3 touch-none"
          style={{
            backgroundImage: `url(${GridBackgroundSVG.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-6 flex flex-row">
          Explore Blockchain{" "}
          <span className="text-purple-500 pl-1.5">
            <Typewriter
              options={{
                strings: [" knowledge", " terms", " concepts", " insights"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>

        <div className="relative max-w-lg w-full mb-4">
          <input
            type="text"
            className="w-full p-2 px-4 bg-transparent rounded-full border border-gray-700 text-start outline-none"
            value={searchQuery}
            onChange={handleSearchChange}
          />

          {searchSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#000000] rounded-xl shadow-lg z-50 border border-gray-700 overflow-hidden">
              {searchSuggestions.map((term) => (
                <button
                  key={term.term}
                  onClick={() => handleSuggestionClick(term)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-700/40 transition-colors border-b border-gray-700 last:border-b-0"
                >
                  <span className="text-white">{term.term}</span>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-1">
                    {term.definition}
                  </p>
                </button>
              ))}
            </div>
          )}

          {searchQuery && searchSuggestions.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-black rounded-xl shadow-lg z-50 p-4 text-gray-400">
              No results found for `{searchQuery}`
            </div>
          )}
        </div>
        <button
          onClick={handleSurpriseMe}
          className="flex items-center gap-1 text-sm sm:text-base text-gray-400 hover:text-gray-300 border border-gray-700 rounded-full py-2 px-4 mb-4"
        >
          Surprise me!
        </button>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.button
            onClick={handleScrollToFullDictionary}
            className="flex flex-col items-center text-gray-400 hover:text-white"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="size-8 mb-1" />
            <span className="text-sm">All Words</span>
          </motion.button>
        </div>
      </div>

      <div
        ref={fullDictionaryRef}
        className="h-screen flex bg-black justify-center"
      >
        <div className="flex w-full max-w-7xl mx-auto">
          <div
            className="flex flex-col items-center justify-center pt-8 
            md:w-24 sm:w-16 w-12 
            lg:mr-[180px] md:mr-[80px] sm:mr-[40px] mr-[20px]"
          >
            {letters.map((letter) => (
              <motion.button
                key={letter}
                onClick={() => scrollToLetter(letter)}
                className="py-1 text-sm w-full text-center relative"
                animate={{
                  scale: activeLetter === letter ? 3 : 1,
                }}
                transition={{ type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.95 }}
              >
                {letter}
              </motion.button>
            ))}
          </div>

          <div
            className="flex-1 overflow-y-auto no-scrollbar 
              lg:w-[calc(100%-180px-24px)] md:w-[calc(100%-80px-24px)] w-full"
            ref={containerRef}
            onScroll={handleScroll}
          >
            <div className="max-w-2xl mx-auto py-4 pb-[70vh]">
              {letters.map(
                (letter) =>
                  filteredGroupedTerms[letter].length > 0 && (
                    <div
                      key={letter}
                      ref={(el) => {
                        if (el) {
                          letterSections.current[letter] = el;
                        }
                      }}
                      className="px-2 pb-4 relative"
                    >
                      <div className="grid gap-y-1">
                        {filteredGroupedTerms[letter].map((term) => (
                          <button
                            key={term.term}
                            onClick={() => setSelectedTerm(term)}
                            className="px-4 py-2.5 text-left hover:bg-gray-900/50 rounded-lg transition-colors w-full"
                          >
                            {term.term}
                          </button>
                        ))}
                      </div>
                      <div className="py-6 flex justify-center">
                        <span className="text-gray-600 text-xl">⋯</span>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedTerm(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-br from-gray-800 to-black rounded-3xl p-6 max-w-md w-full relative border border-purple-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTerm(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="size-5" />
              </button>

              <h3 className="text-2xl font-bold mb-4 text-white">
                {selectedTerm.term}
              </h3>
              <p className="text-gray-300 whitespace-pre-line mb-6">
                {selectedTerm.definition}
              </p>

              {selectedTerm.extraResource && (
                <div className=" flex flex-row items-center">
                  <p className="text-gray-400 text-sm">Additional resources:</p>
                  <div className="flex items-center space-x-2">
                    {(Array.isArray(selectedTerm.extraResource)
                      ? selectedTerm.extraResource
                      : [selectedTerm.extraResource]
                    ).map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 px-2  underline"
                      >
                        {index + 1}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlockchainDictionary;
