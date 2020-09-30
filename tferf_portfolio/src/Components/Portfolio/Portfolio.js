import React from "react";
import { SideNav } from "../SideNav/SideNav";
import "./Portfolio.css";
import { SectionContainer } from "../SectionContainer/SectionContainer";

export const Portfolio = ({
  clickSection,
  selectedSection,
  education,
  skill,
  projects,
  contact,
  experience,
}) => {
  return (
    <div className="Portfolio-container">
      <div className="sidenav-container">
        <SideNav clickSection={clickSection} />
      </div>
      <div className="main-container">
        <SectionContainer
          selectedSection={selectedSection}
          education={education}
          skill={skill}
          projects={projects}
          contact={contact}
          experience={experience}
        />
      </div>
    </div>
  );
};
