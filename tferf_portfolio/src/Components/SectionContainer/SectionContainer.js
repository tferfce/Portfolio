import React from "react";
import { Education } from "../Education/Education";
import { TechnicalSkills } from "../TechnicalSkills/TechnicalSkills";
import "./SectionContainer.css";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";
import { Experience } from "../Experience/Experience";

export const SectionContainer = ({ selectedSection, education, skill }) => {
  return (
    <div className="section-container">
      <div className="main-head"></div>
      <div>
        {
          {
            education: <Education />,
            skill: <TechnicalSkills />,
            projects: <Projects />,
            contact: <Contact />,
            experience: <Experience />,
          }[selectedSection]
        }
      </div>
    </div>
  );
};
