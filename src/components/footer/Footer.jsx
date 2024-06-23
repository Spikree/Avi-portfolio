import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {

  return (
    <div className='footer'>
        <div className="my-links">
            <h4>Find me on</h4>
        </div>

        <div className="my-links-logo">
            <a href="https://in.linkedin.com/in/avi-mahalingpure-640248280"><FaLinkedin/></a>
            <a href="https://github.com/Spikree"><FaGithub/></a>
            <a href=""><FaTwitter/></a>
        </div>

        <div className="footer-bottom">
            <h4>
            © 2024 Avishkar Rajkumar Mahalingpure
            </h4>
        </div>
    </div>
  )
}

export default Footer;