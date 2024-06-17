import React from 'react'
import TextReveal from 'text-reveal';
import './WhatIDo.css'
import { GoArrowRight } from "react-icons/go";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiFirebase } from "react-icons/di";

const WhatIDo = () => {
  return (
    <div className='what-i-do'>
        <div className="left-what-i-do">
        <TextReveal
            text={['What', 'I', 'Do', '?']}
            textColor="grey" 
            fillColor="white"
        />
        </div>

        <div className="right">
            <div className="right-head-text">
                <h2 className='head-text'>Full Stack Developement</h2>
            </div>

            <div className="tools">
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <FaReact />
            <FaNodeJs />
            <SiMongodb />
            <DiFirebase />
            </div>

            <div className="tech-stack">
                <ul>
                    <li><GoArrowRight/>React with next and react native for frontend</li>
                    <li><GoArrowRight/>Backend Architect: Node.js & Express Luminary</li>
                    <li><GoArrowRight/>Database Dynamo: MongoDB, MySQL, Firebase</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WhatIDo;