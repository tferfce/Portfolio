import React from "react";
import "./TechnicalSkills.css";
import { skill } from "../../Values/TechnicalSkillsV";
import { SkillCard } from "../Skills/SkillCard";
export const TechnicalSkills = () => {
  return (
    <div>
      <div className="t-head">TECHNICAL SKILLS</div>
      <p className="skill-container">
        {skill.techskills.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </p>
    </div>
  );
};
