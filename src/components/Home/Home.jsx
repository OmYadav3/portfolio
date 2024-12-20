import React from 'react'

const Home = () => {
  return (
    <section className='mt-3 h-[25.6rem]   '>
      <div className="flex justify-center align-center h-full">
      <div className="w-full flex flex-col justify-center items-center">

      <p className='font-semibold text-zinc-500 tracking-widest mb-4'>FULL STACK WEB DEVELOPER</p>
      <div className=' text-sm font-sans'>Hello, I'm</div>
      <div className=' text-7xl font-sans font-bold'>Om Yadav</div>
      <div className=' text-xl font-sans font-semibold'>MERN STACK DEVELOPER</div>
      <div>
        <button className='py-2 px-4 mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-[0.22rem] '>
          Resume
        </button>
        <button className='mx-2 py-2 px-4 mt-4 bg-black text-white hover:text-black hover:bg-white rounded-[0.22rem] border border-black '>
          Github
        </button>
      </div>
      </div>
      <div className="z-0 w-[90%] flex items-end ">
        <img className='w-[35rem]' src="Omm.png" alt="photo" />
      </div>
      </div>
    </section>
  )
}

export default Home
