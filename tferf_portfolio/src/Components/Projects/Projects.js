import React from "react";
import { projects } from "../../Values/ProjectsV";
import { SkillCard } from "../Skills/SkillCard";
import "./Projects.css";

export const Projects = (props) => {
  return (
    <div>
      <div className="project-head">PROJECTS</div>
      <p className="skill-container">
        {projects.projects.map((projects) => (
          <SkillCard skill={projects} />
        ))}
      </p>
    </div>
  );
};
