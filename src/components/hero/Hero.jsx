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
                Welcome to a realm where web development transcends boundaries, shaping not just pages but societal landscapes. I'm on a mission to architect digital ecosystems that aren't just functional; they're transformative.
                </p>
            </div> 

        </div>

        <div className="bottom-button">
        <div className="resume-button">
                <button>Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Hero