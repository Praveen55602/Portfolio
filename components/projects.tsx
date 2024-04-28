"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} className="scroll-mt-28" id="projects">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((data, index) => (
          <React.Fragment key={index}>
            <Project {...data} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
