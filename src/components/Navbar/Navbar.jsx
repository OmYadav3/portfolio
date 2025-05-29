import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <section className="shadow-lg w-full ">
      <div className="hidden lg:visible hearder lg:px-32 h-[2rem] lg:flex justify-end items-center border">
        {/* <button className="z-50  text-xs cursor-pointer border-2 border-black px-2 rounded-sm py-1 hover:bg-black hover:text-white">Github</button> */}
      </div>
      <div className=" py-8 px-4 lg:px-32 flex items-center justify-between  z-50 ">
        <div className="Logo text-2xl lg:text-4xl font-bold ">Portfolio</div>
        <nav className="lg:flex space-x-4 hidden lg:visible">
          <a
            className="hover:text-red-600 hover:underline cursor-pointer"
            href="/"
          >
            Home
          </a>
          {/* <a href="#about">AboutMe</a> */}
          <a
            className="hover:text-red-600 hover:underline cursor-pointer"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="hover:text-red-600 hover:underline cursor-pointer"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:text-red-600 hover:underline cursor-pointer"
            href="#contact"
          >
            Contact
          </a>
        </nav>
        <div className="z-50 flex text-xs lg:text-lg ">
          {/* <FontAwesomeIcon className='border-2' icon={faMagnifyingGlass} /> */}
          <div className="cursor-pointer hover:text-red-600">Day/</div>
          <div className="cursor-pointer hover:text-red-600 ">Night</div>
        </div>
      </div>
    </section>
  );
};
