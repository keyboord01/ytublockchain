"use client";
import Image from "next/image";
import { useRef } from "react";

interface Partner {
  name: string;
  logo: string;
  url: string;
}

const Partners = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  const partners: Partner[] = [
    {
      name: "Union",
      logo: "/img/partners/union.png",
      url: "https://union.build",
    },
    {
      name: "Aleo",
      logo: "/img/partners/aleo.png",
      url: "https://aleo.org",
    },
    {
      name: "Mina",
      logo: "/img/partners/mina.png",
      url: "https://minaprotocol.com",
    },
    {
      name: "Sui",
      logo: "/img/partners/sui.png",
      url: "https://sui.io",
    },
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

  const bgColors = ["#8512F5", "#A0F562", "#562BFF"];

  return (
    <div className="bg-black text-white w-full px-0 py-24 ">
      <h2 className="text-3xl sm:text-4xl md:text-[52px] text-center mb-8 sm:mb-12 md:mb-16">
        PARTNERS
      </h2>

      <div className="flex-row-center text-sm text-[#4B5563] w-full">
        <div
          ref={constraintsRef}
          className="relative w-full overflow-x-auto no-scrollbar"
        >
          <div className="flex w-fit items-center gap-8 px-4">
            {allPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group relative cursor-pointer"
                onClick={() => {
                  window.open(partner.url, "_blank", "noopener noreferrer");
                }}
              >
                <div
                  className="relative flex h-20 w-52 flex-col items-center justify-center p-4 shadow-lg transition-all duration-300 hover:shadow-xl md:h-20 md:w-40"
                  style={{
                    backgroundColor: bgColors[index % bgColors.length],
                  }}
                >
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
