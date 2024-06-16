import React from 'react'
import TextReveal from 'text-reveal';
import './WhatIDo.css'
import { GoArrowRight } from "react-icons/go";

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