import React from 'react'

const AboutMe = () => {
  return (
       <section className=' lg:h-screen h-[22rem] mx-2 lg:mx-4 lg:shadow-lg flex' id='about'>
        <div className='lg:mt-3 '>
        <div className="flex align-center h-full">
      <div className="hidden lg:flex items-end lg:w-full lg:visible">
        <img className='' src="Omm.png" alt="photo" />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
    
      <div className="heading text-center text-3xl lg:text-9xl mb-[1rem] drop-shadow-2xl">About <span className='text-blue-600 '>Me</span></div>
      <p className='text-xs font-semibold text-zinc-500 lg:tracking-widest mb-4 '>FULL STACK WEB DEVELOPER</p>
      <div className="classname text-center lg:text-2xl text-blue- font-bold drop-shadow-lg">Hello, </div>
      <div className='text-xs lg:text-lg font-sans text-center text-zinc-600 w-auto lg:w-[40rem] drop-shadow-lg'>I am Software Engineer with 2 months of internship experience as a Web Developer. I have developed apps using Html5, CSS3, Bootstrap5, TailwindCSS, Git&Github, JavaScript, ReactJS, NodeJS, ExpressJs and MongoDB. I am constantly learning new technologies and upgrading my skillset.
      Currently, I am focusing on NextJs Projects to become a better developer.
      </div>
      <a href='https://drive.google.com/file/d/1cDLxai8DxBsAGXKi5sZbi1Liu3MoSRrC/view' className='text-xs lg:text-xl py-2 px-4 mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-[0.22rem] shadow-lg'>
          Download Resume
        </a>
      </div>
      </div>
        </div>
    </section>
  )
}

export default AboutMe
