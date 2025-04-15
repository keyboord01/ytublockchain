"use client";
import Typewriter from "typewriter-effect";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, InfoIcon, Globe } from "lucide-react";
import dictionaryTerms, { DictionaryEntry } from "@/data/dictionaryTerms";
import GridBackgroundSVG from "./assets/background.svg";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const BlockchainDictionary = () => {
  const [selectedTerm, setSelectedTerm] = useState<DictionaryEntry | null>(
    null
  );
  const [showInfoModal, setShowInfoModal] = useState(false);
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

  const toggleInfoModal = () => {
    setShowInfoModal(!showInfoModal);
  };

  const filteredGroupedTerms = Object.fromEntries(
    Object.entries(groupedTerms).map(([letter, terms]) => [letter, terms])
  );

  return (
    <div className={`min-h-dvh text-white`}>
      <div className="relative h-screen flex flex-col items-center justify-center text-center p-4">
        <div
          className="absolute -z-10 max-w-xl w-full h-1/3 touch-none"
          style={{
            backgroundImage: `url(${GridBackgroundSVG.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <button
          className="absolute top-4 right-4 text-[#BCBFC2] hover:text-white"
          title="Info"
          onClick={toggleInfoModal}
        >
          <InfoIcon />
        </button>
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-6 flex flex-row">
          Blockchain dünyasını
          <span className="text-purple-500 pl-1.5">
            <Typewriter
              options={{
                strings: [" keşfet", " tanı", " anla", " öğren"],
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
          Kendimi Şanslı Hissediyorum
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
            <span className="text-sm">tüm kelimeler</span>
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
                <div className="flex flex-row items-center">
                  <p className="text-gray-400 text-sm">Ekstra :</p>
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
                        className="text-purple-400 hover:text-purple-300 px-2 underline"
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

        {/* Info Modal */}
        {showInfoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setShowInfoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-br from-gray-800 to-black rounded-3xl p-6 max-w-lg w-full relative border border-purple-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowInfoModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="size-5" />
              </button>

              <h3 className="text-2xl font-bold mb-4 text-white">
                Blockchain Sözlüğü
              </h3>
              <p className="text-gray-300 whitespace-pre-line mb-8">
                Blockchain Sözlüğü, YTU Blockchain Topluluğu tarafından,
                blockchain teknolojisinin sırlarını çözmek ve bu yenilikçi alanı
                herkes için erişilebilir hale getirmek amacıyla hayata
                geçirildi. Temel kavramlardan güncel gelişmelere kadar uzanan
                geniş bir yelpazede bilgi sunan bu sözlük, blockchain`in
                potansiyelini anlamak isteyenler için rehber bir kaynak olmayı
                amaçlıyor. Türkiye`de blockchain ekosistemini güçlendirmek ve
                meraklılarına ilham vermek için burada!
              </p>

              <div className="absolute bottom-6 left-6 flex space-x-4">
                <a
                  href="https://www.instagram.com/ytu_blockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@YTUBlockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="#9CA3AF"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.ytublockchain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Globe size={20} />
                </a>
                <a
                  href="https://x.com/blockchainytu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/ytu-blockchain/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlockchainDictionary;
