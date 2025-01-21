import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { ContactUs } from './components/ContactUs/ContactUs'
import Project from './components/Projects/Project'
import AboutMe from './components/AboutMe/AboutMe'


const App = () => {
  return (
    <div className='cursior-smooth'>
      <Navbar/>
      <Home/>
      <Project/>
      <AboutMe/>
      <ContactUs/>
    </div>
  )
}

export default App
