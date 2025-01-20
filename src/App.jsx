import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { ContactUs } from './components/ContactUs/ContactUs'
import Project from './components/Projects/Project'


const App = () => {
  return (
    <div className='cursior-smooth'>
      <Navbar/>
      <Home/>
      <Project/>
      {/* <ContactUs/> */}
    </div>
  )
}

export default App
