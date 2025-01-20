import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { ContactUs } from './components/ContactUs/ContactUs'


const App = () => {
  return (
    <div className='cursior-smooth'>
      <Navbar/>
      <Home/>
      {/* <ContactUs/> */}
    </div>
  )
}

export default App
