import React from 'react'
import './Education.css'
import { CiLocationArrow1 } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  return (
    <div className='education'>
        <div className="education-left">
            <div className="education-title">
                <h1>Education   <FaUserGraduate /></h1>
            </div>
        </div>
            <hr />
        <div className="education-right">
        <div className="education-info">
                <ul>
                    <li><p><span className='college-name'>Sharad Institute Of Technology College of Engineering</span> Btech. Computer Science And Engineering</p></li>
                    <li><p><CiLocationArrow1 />  Maintaining a strong CGPA of 6.50 as of the 5th semester.</p></li>
                    <li><p><CiLocationArrow1 />  Proficient in fundamental software engineering subjects: DS, Algorithms, DBMS, OS, CN, SE</p></li>
                    <li><p><CiLocationArrow1 />  Expanding expertise beyond academics to encompass Full Stack development, Machine Learning, and Cloud Computing</p></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Education