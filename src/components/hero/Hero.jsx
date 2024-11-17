import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="left">
            <div className="name">
                <h1>I'm Avi a Computer Science Student</h1>
            </div>
                <hr />
            <div className="desc">
                <p>
                Hello I'm Avi, I am a full stack developer, I use react with next js for the frontend and I use mongoDb with node js for the backend. I am currently a computer science student and learning many new technologies.
                </p>
            </div> 

        </div>

        <div className="bottom-button">
        <div className="resume-button">
                <a href="/Avishkar Mahalingpure.pdf" download><button>Resume</button></a>
            </div>
        </div>
    </div>
  )
}

export default Hero