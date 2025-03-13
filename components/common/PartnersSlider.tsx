import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

interface Partner {
  name: string;
  logo: string;
  url: string;
}

const PartnersSlider = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { language } = useLanguage();
  const t = useTranslation(language);

  const partners: Partner[] = [
    {
      name: "Union",
      logo: "/img/partners/union.png",
      url: "https://union.build",
    },
    { name: "Aleo", logo: "/img/partners/aleo.png", url: "https://aleo.org" },
    {
      name: "Mina",
      logo: "/img/partners/mina.png",
      url: "https://minaprotocol.com",
    },
    { name: "Sui", logo: "/img/partners/sui.png", url: "https://sui.io" },
    {
      name: "Scroll",
      logo: "/img/partners/scroll.png",
      url: "https://scroll.io",
    },
    {
      name: "Celestia",
      logo: "/img/partners/celestia.png",
      url: "https://celestia.org",
    },
    {
      name: "Node101",
      logo: "/img/partners/node101.png",
      url: "https://node101.io",
    },
  ];

  const allPartners = [...partners, ...partners, ...partners];

  return (
    <div className="relative w-full bg-[#c5c5d3]">
      <div className="relative py-12">
        <div className="mb-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-[#000560]">
            {t.partners.title}
          </h3>
          <div className="flex-row-center gap-2 text-sm text-[#4B5563]">
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
                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
              />
            </svg>
            <span>{t.partners.dragHint}</span>
          </div>
        </div>

        <motion.div
          ref={constraintsRef}
          className="relative"
        >
          <motion.div
            className="flex w-fit cursor-grab items-center gap-8 px-4 md:gap-16 md:px-8"
            drag="x"
            dragConstraints={constraintsRef}
            whileTap={{ cursor: "grabbing" }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            animate={{
              x: ["0%", "-10%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {allPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group relative"
                onClick={() => {
                  if (!isDragging) {
                    window.open(partner.url, "_blank", "noopener noreferrer");
                  }
                }}
              >
                <div className="relative flex h-20 w-36 flex-col items-center justify-center rounded-xl bg-white/40 p-4 shadow-lg transition-all duration-300 hover:shadow-xl md:h-20 md:w-40">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur transition-opacity duration-300 group-hover:opacity-20" />

                  <div className="flex-row-center relative">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={140}
                      height={48}
                      className="max-h-10 w-auto max-w-[120px] rounded-lg object-contain transition-all duration-300 group-hover:scale-110 md:max-h-12 md:max-w-[140px]"
                      draggable={false}
                      priority
                    />

                    <ExternalLink
                      className="absolute -right-1 -top-1 text-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      size={16}
                    />
                  </div>

                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-indigo-950 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersSlider;
