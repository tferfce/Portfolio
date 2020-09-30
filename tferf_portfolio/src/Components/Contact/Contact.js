import React from "react";
import "./Contact.css";
import { contact } from "../../Values/ContactV";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export const Contact = (props) => {
  return (
    <div>
      <div className="title">WELCOME TO MY PORTFOLIO</div>
      <br></br>
      <br></br>
      <br></br>

      <div className="info">
        My name is Thomas Ferfelis. Im 27 years old and i currently live in
        Skydra. Im an entry level computer engineering graduate with much love
        for Software Development. Not long ago i fulfilled my military
        obligation and now im in search of a job as a Junior Java or Javascript
        developer.
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="port">👨‍💻</div>
      <div className="port">👨‍💻👨‍💻</div>
      <div className="port">👨‍💻👨‍💻👨‍💻</div>
      <div className="port">👨‍💻👨‍💻👨‍💻👨‍💻</div>
      <div className="port">👨‍💻👨‍💻👨‍💻</div>
      <div className="port">👨‍💻👨‍💻</div>
      <div className="port">👨‍💻</div>
      <div className="contact-base">
        <div>
          <MailIcon />
          {contact.email}
        </div>
        <br></br>
        <div>
          <PhoneIcon />
          {contact.phone}
        </div>
        <br></br>
        <div>
          <GitHubIcon />
          {contact.github}
        </div>
        <br></br>
        <div>
          <LinkedInIcon />
          {contact.linkedin}
        </div>
      </div>
    </div>
  );
};
