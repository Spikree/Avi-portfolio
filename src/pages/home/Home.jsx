import React from 'react'
import './Home.css'
import Hero from '../../components/hero/Hero.jsx'
import WhatIDo from '../../components/what I do/WhatIDo.jsx'

const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <WhatIDo/>
    </div>
  )
}

export default Home