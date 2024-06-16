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
            <FaLinkedin/>
            <FaGithub/>
            <FaTwitter/>
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