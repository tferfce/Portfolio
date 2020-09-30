import React from "react";
import "./SideNav.css";
import { Button } from "@material-ui/core";

export const SideNav = ({ clickSection }) => {
  return (
    <div className="side-nav">
      <img
        className="avatar"
        alt="avatar"
        src="https://scontent.fskg1-1.fna.fbcdn.net/v/t1.0-9/108832338_10217763543180769_5362685147918753023_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=POa3OHmuL_IAX_akb9O&_nc_ht=scontent.fskg1-1.fna&oh=e11bf7d9210046e7808fd7c892b0dcd9&oe=5F95B1AC"
      />
      <h1>Thomas Ferfelis</h1>
      <p className="subt">"Computer & Communication Engineer"</p>
      <list className="list">
        <Button variant="outlined" onClick={() => clickSection("contact")}>
          About Me
        </Button>
        <br></br>
        <br></br>
        <Button variant="outlined" onClick={() => clickSection("education")}>
          Education
        </Button>
        <br></br>
        <br></br>
        <Button variant="outlined" onClick={() => clickSection("experience")}>
          Experience
        </Button>
        <br></br>
        <br></br>
        <Button variant="outlined" onClick={() => clickSection("projects")}>
          Projects
        </Button>
        <br></br>
        <br></br>
        <Button variant="outlined" onClick={() => clickSection("skill")}>
          Technical Skills
        </Button>
        <br></br>
        <br></br>
      </list>
    </div>
  );
};
