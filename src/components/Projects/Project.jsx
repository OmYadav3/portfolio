import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <section className=''>
      <div className="main-container mt-[2rem] border- border-black ">
       <div className='text-5xl font-bold text-center mt-2 text-zinc-600'>Projects</div>
       <div className="projectsshowoff border-2 border-red-60 m-4 p-2 grid grid-cols-3 shadow-lg">
            <div className="project-card mt-2 rounded bg-white shadow-xl">
                <div className=' w-full h-[20rem] overflow-hidden '>
                <img
                  className="w-full h-full"
                  src="desktop-preview-recipe-page.jpg"
                  alt="project"
                />
                </div>                
                <div className="project-info p-4 ">
                  <h2 className="text-4xl font-bold">Recipe Page</h2>
                  <p className="text-gray-600 mb-2">It's a recipe page of Simple Omelette . Mentions their Ingredients , Instructions to make and Nutrients table. </p>
                  <a href="https://omyadav-notification-page.netlify.app/" className="text-white hover:underline border-2 p-2 bg-red-500 rounded-md">
                    Live Preview
                  </a>
                  <a href="https://github.com/OmYadav3/frontend_mentor_projects/tree/main/Recipe-page" className="text-white ml-4 border-2 p-2 bg-black rounded-md ">
                    Github Repo
                  </a>
                </div>
            </div>
            <div className="project-card mt-2 rounded bg-white shadow-xl">
                <div className='w-full h-[20rem] overflow-hidden '>
                <img
                  className="w-full h-full "
                  src="notification-page.jpg"
                  alt="project"
                />
                </div>                
                <div className="project-info p-4">
                  <h2 className="text-4xl font-bold">Notification Page</h2>
                  <p className="text-gray-600 mb-2">It's a simple notification page which shows that how to read the notification by click on it. </p>
                  <a href="https://omyadav-notification-page.netlify.app" className="text-white hover:underline border-2 p-2 bg-red-500 rounded-md">
                    Live Preview
                  </a>
                  <a href="https://github.com/OmYadav3/frontend_mentor_projects/tree/main/Notification-Page" className="text-white ml-4 border-2 p-2 bg-black rounded-md ">
                    Github Repo
                  </a>
                </div>
            </div>
            <div className="project-card mt-2 rounded bg-white shadow-xl">
                <div className=' w-full h-[20rem] overflow-hidden'>
                <img
                  className="w-full h-full "
                  src="koinx-desktop.png"
                  alt="project"
                />
                </div>                
                <div className="project-info p-4">
                  <h2 className="text-4xl font-bold">KoinX Website</h2>
                  <p className="text-gray-600 mb-2">It's a simple website which shows real time data of Bitcoin Graph  </p>
                  <a href="https://omyadav-koinx-assignment.netlify.app/" className="text-white hover:underline border-2 p-2 bg-red-500 rounded-md">
                    Live Preview
                  </a>
                  <a href="https://github.com/OmYadav3/KoinX" className="text-white ml-4 border-2 p-2 bg-black rounded-md ">
                    Github Repo
                  </a>
                </div>
            </div>
            <div className="project-card mt-2 rounded bg-white shadow-xl">
                <div className='w-full h-[20rem] overflow-hidden '>
                <img
                  className="w-full "
                  src="Utube.jpg"
                  alt="project"
                />
                </div>                
                <div className="project-info p-4">
                  <h2 className="text-4xl font-bold">Youtube Backend</h2>
                  <p className="text-gray-600 mb-2"> It is a complete backend project with all the features a backend project should have.</p>
                  <a href="" className="text-white hover:underline border-2 p-2 bg-red-500 rounded-md">
                    Live Preview
                  </a>
                  <a href="https://github.com/OmYadav3/youtube-backend" className="text-white ml-4 border-2 p-2 bg-black rounded-md ">
                    Github Repo
                  </a>
                </div>
            </div>
       </div>
      </div>
    </section>
  )
}

export default Project
