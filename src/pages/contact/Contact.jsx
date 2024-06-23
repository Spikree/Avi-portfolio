import React from 'react'
import './Contact.css'
import { CiLinkedin } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <div className='contact-me'>
        <div className="top">
            <h2>Get in touch</h2>
            <p>I am available on linkedin and you can also email me. you can message me and I will reply within 24 hours 
            feel free to reach out to me for collaborations, projects, or just a friendly chat!
            </p>
        </div>

        <div className="bottom">
            <h1>Contact Me</h1>
            <div className="contacts">
                <a href="https://in.linkedin.com/in/avi-mahalingpure-640248280"><CiLinkedin /></a>
                <a href="mailto:avimahalingpure10@gmail.com"><BiLogoGmail /></a>
            </div>
        </div>
    </div>
  )
}

export default Contact