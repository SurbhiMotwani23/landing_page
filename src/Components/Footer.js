import React from "react";
// import TeamFlow from "../Assets/TeamFlow.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import Company_Logo from '../Assets/Company_Logo.png';
import '/home/surbhimotwani/task_surbhi/src/App.css';


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Company_Logo} alt="" />
        </div>
        <div className="footer-icons">
          <FaFacebookF />
          <FaInstagram />
          <BsTwitter />
          <BsYoutube />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <h2>Product</h2>
          <span>Product</span>
          <span>Pricing</span>
          <span>Enterprise</span>
          <span>Partners</span>
          <span>Affiliate</span>
          <span>Integrations</span>
          <span>Developers</span>
          <span>Students</span>
          <span>Work OS</span>
        </div>
        <div className="footer-section-columns">
          <h2>Team</h2>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Careers</span>
          <span>Find a Partner</span>
          <span>In the News</span>
        </div>
        <div className="footer-section-columns">
          <h2>Solutions</h2>
          <span>Project Management</span>
          <span>Marketing</span>
          <span>CRM and Sales</span>
          <span>Software Development</span>
          <span>Constructions</span>
          <span>Creative Production</span>
          <span>Remote Work</span>
          <span>HR</span>
          <span>IT</span>
          <span>See More Solution</span>
        </div>
        <div className="footer-section-columns">
          <h2>Resources</h2>
          <span>Knowledge Base</span>
          <span>Guides</span>
          <span>Daily Webinars</span>
          <span>Community</span>
          <span>Customer Stories</span>
          <span>Templates</span>
          <span>Professionals Services</span>
          <span>Video Tutorials</span>
          <span>Blog</span>
          <span>Podcast</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
