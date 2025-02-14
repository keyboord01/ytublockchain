"use client";

import React, { useState } from "react";
import { isAfter, isBefore, format, parse } from "date-fns";
import {
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";
import { classesDataEN, classesDataTR } from "@/data/classesData";
import Link from "next/link";

export interface Class {
  date: string;
  time: string;
  duration: string;
  topic: string;
  instructor: string;
  instructorImage: string;
  LumaLink?: string;
  tech: string;
  ClassLocation: string;
}
interface StatsItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

interface FilterButtonsProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

interface ClassRowProps {
  cls: Class;
}

const StatsSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const stats: StatsItemProps[] = [
    {
      icon: Clock,
      label: t.schedulePage.stats.hoursOfClasses,
      value: "200+",
    },
    {
      icon: Users,
      label: t.schedulePage.stats.studentsAttended,
      value: "500+",
    },
    {
      icon: BookOpen,
      label: t.schedulePage.stats.courses,
      value: "25+",
    },
    {
      icon: MapPin,
      label: t.schedulePage.stats.locations,
      value: "2",
    },
  ];

  return (
    <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-4">
      {stats.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 text-center backdrop-blur-sm"
        >
          <Icon className="mx-auto mb-3 size-8 text-[#FF8C00]" />
          <div className="mb-1 text-2xl font-bold text-[#c5c5d3]">{value}</div>
          <div className="text-sm text-zinc-400">{label}</div>
        </div>
      ))}
    </div>
  );
};

const FilterButtons: React.FC<FilterButtonsProps> = ({
  filter,
  onFilterChange,
}) => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="grid grid-cols-3 overflow-hidden rounded-t-lg">
      {(["upcoming", "past", "all"] as const).map((filterType) => (
        <button
          key={filterType}
          className={`px-6 py-3 text-sm font-medium transition-colors duration-200
          ${
            filter === filterType
              ? "bg-[#FF8C00] text-white"
              : "bg-zinc-900/80 text-[#c5c5d3] hover:bg-zinc-800"
          }`}
          onClick={() => onFilterChange(filterType)}
        >
          {t.schedulePage.filters[filterType]}
        </button>
      ))}
    </div>
  );
};

const ClassRow: React.FC<ClassRowProps> = ({ cls }) => {
  const classDate = parse(cls.date, "dd.MM.yyyy", new Date());
  const isUpcoming = isAfter(classDate, new Date());
  const { language } = useLanguage();
  const t = useTranslation(language);

  const addToGoogleCalendar = (cls: Class) => {
    const startTime = parse(
      `${cls.date} ${cls.time}`,
      "dd.MM.yyyy HH:mm",
      new Date()
    );
    const endTime = new Date(startTime);
    const durationParts = cls.duration.split(" ");
    const durationValue = parseFloat(durationParts[0].replace(",", "."));

    if (["hours", "hour", "saat"].includes(durationParts[1].toLowerCase())) {
      const wholeHours = Math.floor(durationValue);
      const extraMinutes = Math.round((durationValue - wholeHours) * 60);
      endTime.setHours(startTime.getHours() + wholeHours);
      endTime.setMinutes(startTime.getMinutes() + extraMinutes);
    } else if (
      ["minutes", "minute", "dakika"].includes(durationParts[1].toLowerCase())
    ) {
      endTime.setMinutes(startTime.getMinutes() + durationValue);
    }

    const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      cls.topic
    )}&dates=${format(startTime, "yyyyMMdd'T'HHmmss'Z'")}%2F${format(
      endTime,
      "yyyyMMdd'T'HHmmss'Z'"
    )}&details=${encodeURIComponent(
      `Instructor: ${cls.instructor}\nGitHub: ${cls.LumaLink || ""}`
    )}&location=${encodeURIComponent(
      cls.ClassLocation || "EEF104"
    )}&sf=true&output=xml`;

    window.open(googleCalendarLink, "_blank");
  };

  return (
    <div className="group border-b border-zinc-800 bg-zinc-900/50 p-4 transition-colors duration-200 hover:bg-zinc-800/50">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="w-full md:w-1/4">
          <div className="flex flex-col space-y-1">
            <span className="font-medium text-[#FF8C00]">{cls.time}</span>
            <span className="text-sm text-zinc-400">{cls.duration}</span>
            <span className="text-sm font-medium text-[#c5c5d3]">
              {cls.ClassLocation || "EEF104"}
            </span>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#c5c5d3] transition-colors duration-200 group-hover:text-[#FF8C00]">
                {cls.topic}
              </h3>
              <div className="mt-2 flex items-center space-x-2">
                {cls.instructorImage && (
                  <Image
                    src={cls.instructorImage}
                    alt={`${cls.instructor}'s profile`}
                    width={32}
                    height={32}
                    className="rounded-full max-h-8 max-w-8 bg-zinc-800"
                  />
                )}
                <span className="text-zinc-300">{cls.instructor}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {isUpcoming ? (
                <button
                  onClick={() => addToGoogleCalendar(cls)}
                  className="rounded-full bg-zinc-800 p-2 transition-colors duration-200 hover:bg-[#FF8C00]/20"
                  title={t.schedulePage.calendar.addToCalendar}
                >
                  <Calendar className="size-5 text-[#FF8C00]" />
                </button>
              ) : (
                <Link
                  href={cls.LumaLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-zinc-800 p-2 transition-colors duration-200 hover:bg-zinc-700"
                >
                  <ChevronRight className="size-5 text-[#FF8C00]" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  return (
    <div className="mb-24 text-center">
      <h1 className="mb-6 text-5xl font-bold text-[#FF8C00]">
        {t.schedulePage.hero.title}
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-zinc-300">
        {t.schedulePage.hero.description}
      </p>
    </div>
  );
};

const InfoSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  return (
    <div className="mt-24 grid gap-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm md:grid-cols-2">
      <div>
        <h2 className="mb-4 text-2xl font-bold text-[#FF8C00]">
          {t.schedulePage.location.title}
        </h2>
        <p className="mb-4 text-zinc-300">
          {t.schedulePage.location.description}
        </p>
        <ul className="space-y-2 text-zinc-400">
          <li className="flex items-center gap-2">
            <MapPin className="size-4" /> {t.schedulePage.location.mainCampus}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="size-4" /> {t.schedulePage.location.classDuration}
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-bold text-[#FF8C00]">
          {t.schedulePage.course.title}
        </h2>
        <p className="mb-4 text-zinc-300">
          {t.schedulePage.course.description}
        </p>
        <ul className="space-y-2 text-zinc-400">
          {t.schedulePage.course.features.map(
            (feature: string, index: number) => (
              <li key={index}>✓ {feature}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

const Schedule = () => {
  const { language } = useLanguage();

  const classes: Class[] = language === "tr" ? classesDataTR : classesDataEN;

  const [filter, setFilter] = useState<string>("upcoming");

  const filteredClasses = classes.filter((cls) => {
    const classDate = parse(cls.date, "dd.MM.yyyy", new Date());
    const currentDate = new Date();
    if (filter === "all") return true;
    return filter === "upcoming"
      ? isAfter(classDate, currentDate)
      : isBefore(classDate, currentDate);
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-950 to-black">
      <div className="mx-auto max-w-7xl px-4 py-24">
        <Hero />
        <StatsSection />

        <div className="mb-24 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
          <FilterButtons
            filter={filter}
            onFilterChange={setFilter}
          />

          <div className="divide-y divide-zinc-800">
            {filteredClasses.map((cls, index) => (
              <React.Fragment key={index}>
                {(index === 0 ||
                  format(
                    parse(cls.date, "dd.MM.yyyy", new Date()),
                    "yyyy-MM-dd"
                  ) !==
                    format(
                      parse(
                        filteredClasses[index - 1].date,
                        "dd.MM.yyyy",
                        new Date()
                      ),
                      "yyyy-MM-dd"
                    )) && (
                  <div className="bg-zinc-800/50 px-4 py-2 text-sm text-zinc-400">
                    {format(
                      parse(cls.date, "dd.MM.yyyy", new Date()),
                      "EEEE, MMMM d, yyyy"
                    )}
                  </div>
                )}
                <ClassRow cls={cls} />
              </React.Fragment>
            ))}
          </div>
        </div>

        <InfoSection />
      </div>
    </section>
  );
};

export default Schedule;
