import React, { Component } from "react";
import "./App.css";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { education } from "./Values/EducationV";
import { skill } from "./Values/TechnicalSkillsV";
import { projects } from "./Values/ProjectsV";
import { contact } from "./Values/ContactV";
import { experience } from "./Values/ExperienceV";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedSection: "",
      education: null,
      skill: null,
      projects: null,
      contact: null,
      experience: null,
    };
  }
  componentDidMount() {
    this.setState({
      selectedSection: "contact",
      skill,
      education,
      projects,
      contact,
      experience,
    });
  }

  clickSection = (section) => {
    this.setState({
      selectedSection: section,
    });
  };

  render() {
    return (
      <div className="App">
        <Portfolio
          clickSection={this.clickSection}
          selectedSection={this.state.selectedSection}
          education={this.state.education}
          skill={this.state.skill}
          projects={this.state.projects}
          contact={this.state.contact}
          experience={this.state.experience}
        />
      </div>
    );
  }
}

export default App;
