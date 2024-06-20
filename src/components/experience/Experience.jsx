import React from 'react'
import './Experience.css'
import { GrUserExpert } from "react-icons/gr";
import { CiLocationArrow1 } from "react-icons/ci";

const Experience = () => {
  return (
    <div className='experience'>
        <div className="exp-left">
            <h1>Experience<GrUserExpert /></h1>
        </div>
        <hr />
        <div className="exp-right">
            <ul>
                <li><CiLocationArrow1 />3 months of experience as a frontend software developer intern in edutantra software services </li>
            </ul>
        </div>
    </div>
  )
}

export default Experience