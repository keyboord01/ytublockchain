"use client";

import React, { useEffect, useState } from "react";
import { parseISO, isAfter, isBefore, format, parse } from "date-fns";
import {
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

interface Class {
  date: string;
  time: string;
  duration: string;
  topic: string;
  instructor: string;
  instructorImage: string;
  githubLink: string;
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
  t: (str: string) => string;
}

interface ClassRowProps {
  cls: Class;
}

const StatsSection = () => {
  const stats: StatsItemProps[] = [
    { icon: Clock, label: "Hours of classes", value: "200+" },
    { icon: Users, label: "Students Attended", value: "500+" },
    { icon: BookOpen, label: "Courses", value: "25+" },
    { icon: MapPin, label: "Locations", value: "2" },
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
}) => (
  <div className="grid grid-cols-3 overflow-hidden rounded-t-lg">
    {["upcoming", "past", "all"].map((filterType) => (
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
        {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
      </button>
    ))}
  </div>
);

const ClassRow: React.FC<ClassRowProps> = ({ cls }) => {
  const classDate = parseISO(cls.date);
  const isUpcoming = isAfter(classDate, new Date());

  const addToGoogleCalendar = (cls: Class) => {
    const startTime = parse(
      `${cls.date} ${cls.time}`,
      "yyyy-MM-dd h:mm a",
      new Date()
    );
    const endTime = new Date(startTime);
    const durationParts = cls.duration.split(" ");

    if (durationParts[1] === "hours" || durationParts[1] === "hour") {
      endTime.setHours(startTime.getHours() + parseInt(durationParts[0]));
    } else if (
      durationParts[1] === "minutes" ||
      durationParts[1] === "minute"
    ) {
      endTime.setMinutes(startTime.getMinutes() + parseInt(durationParts[0]));
    }

    const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      cls.topic
    )}&dates=${format(startTime, "yyyyMMdd'T'HHmmss'Z'")}%2F${format(
      endTime,
      "yyyyMMdd'T'HHmmss'Z'"
    )}&details=${encodeURIComponent(
      `Instructor: ${cls.instructor}\nGitHub: ${cls.githubLink}`
    )}&location=${encodeURIComponent(
      cls.ClassLocation || "EFF104"
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
                    className="rounded-full bg-zinc-800"
                  />
                )}
                <span className="text-zinc-300">{cls.instructor}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {isUpcoming && (
                <button
                  onClick={() => addToGoogleCalendar(cls)}
                  className="rounded-full bg-zinc-800 p-2 transition-colors duration-200 hover:bg-[#FF8C00]/20"
                  title="Add to Google Calendar"
                >
                  <Calendar className="size-5 text-[#FF8C00]" />
                </button>
              )}
              {!isUpcoming && (
                <a
                  href={cls.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-zinc-800 p-2 transition-colors duration-200 hover:bg-zinc-700"
                >
                  <ChevronRight className="size-5 text-[#FF8C00]" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoadingState = () => (
  <div className="space-y-4 p-4">
    <div className="h-10 animate-pulse rounded-lg bg-zinc-900/50" />
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="h-24 animate-pulse rounded-lg bg-zinc-900/50"
      />
    ))}
  </div>
);

const Hero = () => (
  <div className="mb-24 text-center">
    <h1 className="mb-6 text-5xl font-bold text-[#FF8C00]">Events Schedule</h1>
    <p className="mx-auto max-w-2xl text-lg text-zinc-300">
      Explore our comprehensive course schedule and join hands-on workshops led
      by industry experts. Build your skills with practical experience and
      real-world projects.
    </p>
  </div>
);

const InfoSection = () => (
  <div className="mt-24 grid gap-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm md:grid-cols-2">
    <div>
      <h2 className="mb-4 text-2xl font-bold text-[#FF8C00]">
        Location Information
      </h2>
      <p className="mb-4 text-zinc-300">
        All classes are held at our main campus unless otherwise specified. The
        EEF104 classroom is equipped with modern facilities to ensure the best
        learning experience.
      </p>
      <ul className="space-y-2 text-zinc-400">
        <li className="flex items-center gap-2">
          <MapPin className="size-4" /> Main Campus - EEF104
        </li>
        <li className="flex items-center gap-2">
          <Clock className="size-4" /> Classes typically run for 2-3 hours
        </li>
      </ul>
    </div>
    <div>
      <h2 className="mb-4 text-2xl font-bold text-[#FF8C00]">
        Course Information
      </h2>
      <p className="mb-4 text-zinc-300">
        Our courses are designed to provide hands-on experience with modern
        technologies. Each session includes practical exercises and real-world
        examples.
      </p>
      <ul className="space-y-2 text-zinc-400">
        <li>✓ Interactive learning environment</li>
        <li>✓ Project-based curriculum</li>
        <li>✓ Industry-experienced instructors</li>
        <li>✓ Access to online resources</li>
      </ul>
    </div>
  </div>
);

const Schedule = () => {
  const [filter, setFilter] = useState<string>("upcoming");
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setClasses([
        {
          date: "2025-07-12",
          time: "10:00 AM",
          duration: "2 hours",
          topic: "Introduction to Blockchain",
          instructor: "John Doe",
          instructorImage:
            "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718066507048_Pesonal%20Picture.png",
          githubLink: "https://github.com/instructor/repo",
          tech: "Blockchain, Ethereum",
          ClassLocation: "EEF111",
        },
        {
          date: "2025-07-13",
          time: "12:00 PM",
          duration: "1 hour",
          topic: "Advanced React",
          instructor: "Jane Smith",
          instructorImage:
            "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718075712286_YTUBC.png",
          githubLink: "https://github.com/instructor/repo",

          tech: "React, JavaScript",
          ClassLocation: "EEF112",
        },
        {
          date: "2025-05-14",
          time: "10:00 AM",
          duration: "2 hours",
          topic: "Introduction to Blockchain",
          instructor: "John Doe",
          instructorImage:
            "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718066507048_Pesonal%20Picture.png",
          githubLink: "https://github.com/instructor/repo",
          tech: "Blockchain, Ethereum",
          ClassLocation: "EEF113",
        },
        {
          date: "2025-06-04",
          time: "12:00 PM",
          duration: "1 hour",
          topic: "Advanced React",
          instructor: "Jane Smith",
          instructorImage:
            "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718075712286_YTUBC.png",
          githubLink: "https://github.com/instructor/repo",
          tech: "React, JavaScript",
          ClassLocation: "EEF114",
        },
        {
          date: "2024-05-03",
          time: "10:00 AM",
          duration: "2 hours",
          topic: "Introduction to Blockchain",
          instructor: "John Doe",
          instructorImage:
            "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718066507048_Pesonal%20Picture.png",
          githubLink: "https://github.com/instructor/repo",
          tech: "Blockchain, Ethereum",
          ClassLocation: "EEF115",
        },
        {
          date: "2024-12-28",
          time: "12:00 PM",
          duration: "1 hour",
          topic: "Advanced React",
          instructor: "Jane Smith",
          instructorImage:
            "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718075712286_YTUBC.png",
          githubLink: "https://github.com/instructor/repo",
          tech: "React, JavaScript",
          ClassLocation: "EEF116",
        },
        {
          date: "2024-07-24",
          time: "10:00 AM",
          duration: "2 hours",
          topic: "Introduction to Blockchain",
          instructor: "John Doe",
          instructorImage:
            "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718066507048_Pesonal%20Picture.png",
          githubLink: "https://github.com/instructor/repo",
          tech: "Blockchain, Ethereum",
          ClassLocation: "EEF117",
        },
        {
          date: "2024-08-04",
          time: "12:00 PM",
          duration: "1 hour",
          topic: "Advanced React",
          instructor: "Jane Smith",
          instructorImage:
            "https://ytublockchain.s3.eu-central-1.amazonaws.com/uploads/1718075712286_YTUBC.png",
          githubLink: "https://github.com/instructor/repo",
          tech: "React, JavaScript",
          ClassLocation: "EEF112",
        },
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  const filteredClasses = classes.filter((cls) => {
    const classDate = parseISO(cls.date);
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
            t={(str) => str}
          />

          {loading ? (
            <LoadingState />
          ) : (
            <div className="divide-y divide-zinc-800">
              {filteredClasses.map((cls, index) => (
                <React.Fragment key={index}>
                  {(index === 0 ||
                    format(parseISO(cls.date), "yyyy-MM-dd") !==
                      format(
                        parseISO(filteredClasses[index - 1].date),
                        "yyyy-MM-dd"
                      )) && (
                    <div className="bg-zinc-800/50 px-4 py-2 text-sm text-zinc-400">
                      {format(parseISO(cls.date), "EEEE, MMMM d, yyyy")}
                    </div>
                  )}
                  <ClassRow cls={cls} />
                </React.Fragment>
              ))}
            </div>
          )}
        </div>

        <InfoSection />
      </div>
    </section>
  );
};

export default Schedule;
