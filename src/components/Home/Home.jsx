import React from 'react'

const Home = () => {
  return (
    <section className='lg:mt-3 lg:h-[39rem] h-[25rem]  shadow-lg '>
      <div className="flex justify-center align-center h-full">
      <div className="w-full flex flex-col justify-center items-center">

      <p className='text-xs lg:text-xl font-semibold text-zinc-500 lg:tracking-widest mb-4'>FULL STACK WEB DEVELOPER</p>
      <div className=' text-sm font-sans'>Hello, I'm</div>
      <div className='text-3xl  lg:text-8xl font-sans font-bold'>Om Yadav</div>
      <div className=' text-xl font-sans font-semibold mt-2'>MERN STACK DEVELOPER</div>
      <div className='mt-4 text-xs lg:text-lg'>
        <a className='py-2 lg:py-3 px-3 lg:px-4 mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-[0.22rem] '>
          Resume
        </a>
        <a className='mx-2 py-2 lg:py-3 px-3 lg:px-4  mt-4 bg-black text-white hover:text-black hover:bg-white rounded-[0.22rem] border border-black' href='https://github.com/OmYadav3' >
          Github
        </a>
      </div>
      </div>
      <div className="hidden lg:flex items-end lg:visible ">
        <img className='' src="Omm.png" alt="photo" />
      </div>
      </div>
    </section>
  )
}

export default Home
