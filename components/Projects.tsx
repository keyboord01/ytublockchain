import React from "react";

import EventMap from "./common/EventMap";
import { eventData } from "@/data/EventData";
import projectsData from "@/data/projectsData";
import { ProjectsCard } from "./projects/ProjectsCard";
import ViewAllCards from "./projects/ViewAllCards";

const visibleProjects = projectsData.slice(0, 3);

const Projects: React.FC = () => (
  <section
    id="projects"
    className="bg-gradient-to-b from-zinc-950 to-black pb-24 md:pb-52"
  >
    <div className="container mx-auto px-4 md:px-10">
      <div className="py-12 md:py-24">
        <h2 className="mb-6 font-circular-web text-2xl text-blue-50 sm:text-3xl md:text-4xl">
          Explore Our Blockchain Journey
        </h2>
        <p className="max-w-md font-circular-web text-base text-blue-50/80 md:text-lg">
          Embark on a journey through the world where innovation, collaboration,
          and technology converge to redefine the future of the internet.
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
              description={project.description}
              projectUrl={project.projectUrl}
              date={project.date}
              awards={project.awards}
              location={project.location}
            />
          </div>
        ))}
        <ViewAllCards />
      </div>
    </div>
  </section>
);

export default Projects;
