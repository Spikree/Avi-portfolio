import React from 'react'
import WhoIAm from '../../components/who I am/WhoIAm'
import Education from '../../components/education/Education'
import Experience from '../../components/experience/Experience'

const About = () => {
  return (
    <div className='about'>
      <WhoIAm/>
      <Education/>
      <Experience/>
    </div>
  )
}

export default About