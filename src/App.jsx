import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Footer from './components/footer/Footer'
import { Routes , Route } from 'react-router-dom'
import Project from './pages/project/Project'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <div className='app'>
        <Navbar className="nav-bar"/>

        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Home/>}/>
        </Routes>

        <Footer/>
    </div>
  )
}

export default App