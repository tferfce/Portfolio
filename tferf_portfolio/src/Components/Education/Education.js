import React from "react";
import { education } from "../../Values/EducationV";
import "./Education.css";
import { Courses } from "../../Values/CoursesV";
import { SkillCard } from "../Skills/SkillCard";

export const Education = (props) => {
  return (
    <div>
      <div className="edu-head">{education.heading}</div>
      <br></br>
      <br></br>
      <br></br>
      <div className="edu-subhead">{education.subheading}</div>

      <div className="edu-dep">{education.department}</div>
      <br></br>
      <div className="edu-rest">{education.place}</div>
      <br></br>
      <div className="edu-rest">{education.date}</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="edu-courses">COURSES</div>
      <p className="skill-container">
        {Courses.course.map((course) => (
          <SkillCard skill={course} />
        ))}
      </p>
    </div>
  );
};
