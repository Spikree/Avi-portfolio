import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App