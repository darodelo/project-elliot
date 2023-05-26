import "../Styles/Contact.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import React from 'react'

const Contact = () => {
 
  return (

  <footer id="contact">
      <div className="background-contact">
        <a href="#products">
          <div className="contact-logo">
        
            <img
              src="./images/elliott-consulting-logo.png"
              alt="Elliot Consulting Logo"
              height="50px"
            />
        
          </div>
        </a>
        <div className="contact-SocialNetworks">
          <a href="#welcome-home">
            <TwitterIcon fontSize="large" style={{ color: 'black' }} />
          </a>
          <a href="#welcome-home">
            <InstagramIcon fontSize="large" style={{ color: 'black' }}/>
          </a>
          <a href="#welcome-home">
            <FacebookIcon fontSize="large" style={{ color: 'black' }}/>
          </a>
          <a href="#welcome-home">
            <WhatsAppIcon fontSize="large" style={{ color: 'black' }}/>
          </a>
        </div>
      </div>
    </footer>
  ) 
};

export default Contact;