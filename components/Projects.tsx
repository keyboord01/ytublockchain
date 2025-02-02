"use client";
import React from "react";

import EventMap from "./common/EventMap";
import { eventData } from "@/data/EventData";
import projectsData from "@/data/projectsData";
import { ProjectsCard } from "./projects/ProjectsCard";
import ViewAllCards from "./projects/ViewAllCards";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

const visibleProjects = projectsData.slice(0, 3);

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-zinc-950 to-black pb-24 md:pb-52"
    >
      <div className="container mx-auto px-4 md:px-10">
        <div className="py-12 md:py-24">
          <h2 className="mb-6 font-circular-web text-2xl text-blue-50 sm:text-3xl md:text-4xl">
            {t.projects.heading}
          </h2>
          <p className="max-w-md font-circular-web text-base text-blue-50/80 md:text-lg">
            {t.projects.description}
          </p>
        </div>

        <div
          className="relative mb-6 h-64 w-full overflow-visible rounded-lg border border-white/20 sm:h-96 
            md:mb-10 md:h-[65vh]"
        >
          <EventMap events={eventData} />
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="projects-cards"
            >
              <ProjectsCard
                src={project.src}
                title={<>{project.title}</>}
                description={
                  t.projectsData.descriptions[project.descriptionKey]
                }
                projectUrl={project.projectUrl}
                date={project.date}
                awards={project.awards.map(
                  (award) => t.projectsData.awards[award]
                )}
                location={
                  project.location === undefined
                    ? ""
                    : t.projectsData.locations[project.location]
                }
              />
            </div>
          ))}
          <ViewAllCards Projects={projectsData.length} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
