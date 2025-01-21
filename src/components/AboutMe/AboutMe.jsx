import React from 'react'

const AboutMe = () => {
  return (
       <section className='h-screen mx-4 shadow-lg flex'>
        <div className='mt-3 border'>
        <div className="flex align-center h-full">
      <div className="flex items-end w-full">
        <img className='' src="Omm.png" alt="photo" />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
    
      <div className="heading text-center text-9xl mb-[1rem] drop-shadow-2xl">About <span className='text-blue-600 '>Me</span></div>
      <p className='font-semibold text-zinc-500 tracking-widest mb-4 '>FULL STACK WEB DEVELOPER</p>
      <div className="classname text-center text-2xl text-blue- font-bold drop-shadow-lg">Hello, </div>
      <div className=' text-md font-sans text-center text-zinc-600 w-[40rem] drop-shadow-lg'>I am Software Engineer with 2 months of internship experience as a Web Developer. I have developed apps using Html5, CSS3, Bootstrap5, TailwindCSS, Git&Github, JavaScript, ReactJS, NodeJS, ExpressJs and MongoDB. I am constantly learning new technologies and upgrading my skillset.
      Currently, I am focusing on NextJs Projects to become a better developer.
      </div>
      <button className='py-2 px-4 mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-[0.22rem] '>
          Download Resume
        </button>
      </div>
      </div>
        </div>
    </section>
  )
}

export default AboutMe
