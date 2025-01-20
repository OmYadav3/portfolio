// import {faMagnifyingGlass} from "@fortawesome/react-fontawesome"
import "./Navbar.css"

export const Navbar = () => {
    return (
    <section className="bg-white ">
        <div className="hearderr px-32 h-[2rem] flex justify-end items-center">
            {/* <button className="z-50  text-xs cursor-pointer border-2 border-black px-2 rounded-sm py-1 hover:bg-black hover:text-white">Github</button> */}
            </div>
       <div className=" py-8 px-32 border-2 flex items-center justify-between z-50 ">
        <div className="Logo text-4xl font-bold ">Portfolio</div>
        <div className="flex space-x-4 ">
            <ul className="hover:text-red-600 hover:underline cursor-pointer">Home</ul>
            <ul className="hover:text-red-600 hover:underline cursor-pointer">Projects</ul>
            <ul className="z-50 hover:text-red-600 hover:underline cursor-pointer">AboutUs</ul>
            <ul className="z-50 hover:text-red-600 hover:underline cursor-pointer">ContactUs</ul>
        </div>
        <div className="z-50 flex text-sm ">
        {/* <FontAwesomeIcon className='border-2' icon={faMagnifyingGlass} /> */}
            <div className="cursor-pointer hover:text-red-600">Day/</div>
            <div className="cursor-pointer hover:text-red-600 ">Night</div>
            
        </div>
       </div>
    </section>
    )
}

 