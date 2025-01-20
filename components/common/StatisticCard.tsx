"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface StatisticCardProps {
  icon?: LucideIcon;
  value: number;
  label: string;
  description?: string;
  delay?: number;
  titleClassName?: string;
  labelClassName?: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  icon: Icon,
  value,
  label,
  description,
  delay = 0,
  titleClassName,
  labelClassName,
}) => {
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.from(numberRef.current, {
      scrollTrigger: {
        trigger: numberRef.current,
        start: "top center+=400",
      },
      textContent: 0,
      duration: 0.8,
      delay,
      snap: { textContent: 1 },
      onUpdate: function () {
        if (numberRef.current) {
          numberRef.current.textContent = Math.ceil(
            Number(this.targets()[0].textContent)
          ).toString();
        }
      },
    });
  });

  return (
    <div className="flex flex-col items-center justify-center">
      {Icon && (
        <Icon
          className="mb-4 size-8 text-[#000560] transition-transform duration-300"
          strokeWidth={1.5}
        />
      )}
      <div className="ml-4 flex items-baseline gap-1">
        <span
          ref={numberRef}
          className={`text-5xl font-bold text-[#000560] ${titleClassName}`}
        >
          {value}
        </span>
        <span className="text-2xl font-bold text-[#FF8C00]">+</span>
      </div>
      <p className={`mt-2 text-lg font-medium text-gray-800 ${labelClassName}`}>
        {label}
      </p>
      {description && (
        <p className="mt-2 max-w-xs text-center text-sm text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
};

export default StatisticCard;
