import "../Styles/AboutUs.css";
import { TEAMMEMBERS } from "./TeamMembersDB";


import React from 'react'

const AboutUs = () => {
  return (
    <div className="background-about">
      <h2 id='aboutus' className="title-aboutus">About Us</h2>
        <div className="members">
          {TEAMMEMBERS.map((member) => (
            <div className="members-card" key={member.Id}>
              <img className="members-img" src={member.Img} alt={member.Alt} />
              <h3 className="members-name">{member.Name}</h3>
              <p className="members-description">{member.Description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default AboutUs;