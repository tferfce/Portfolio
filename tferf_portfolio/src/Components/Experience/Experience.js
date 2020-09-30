import React from "react";
import "./Experience.css";
import { experience } from "../../Values/ExperienceV";

export const Experience = (props) => {
  return (
    <div>
      <div className="edu-head">EXPERIENCE</div>
      <br></br>
      <br></br>

      <div>
        <div className="exp-type">{experience.type}</div>
        <div className="exp-place">{experience.place}</div>
        <div className="exp-tasks">
          <li>{experience.task1}</li>
          <li>{experience.task2}</li>
        </div>
        <div className="exp-date">{experience.date}</div>
      </div>
      <br></br>
      <br></br>
      <div>
        <div className="sem1-title">{experience.seminar1}</div>
        <div className="sem1-place">{experience.seminar1place}</div>
        <li className="sem1-desc">{experience.seminar1desc}</li>
        <div className="sem1-date">{experience.date}</div>
      </div>
      <br></br>
      <br></br>
      <div className="sem1-title">{experience.seminar2}</div>
      <div className="sem1-place">{experience.seminar2place}</div>
      <li className="sem1-desc">{experience.seminar2desc}</li>
      <div className="sem1-date">{experience.seminar2date}</div>
    </div>
  );
};
