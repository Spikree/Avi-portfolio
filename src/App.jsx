import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Footer from './components/footer/Footer'
import { Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
        <Navbar/>

        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

        </Routes>

        <Footer/>
    </div>
  )
}

export default App