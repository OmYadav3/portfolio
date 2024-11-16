// import {faMagnifyingGlass} from "@fortawesome/react-fontawesome"
import "./Navbar.css"

export const Navbar = () => {
    return (
    <section className="bg-white ">
       <div className="mt-8 p-8 border-2 flex items-center justify-between">
        <div className="Logo text-4xl font-bold hover:text-red-400 ">Portfolio</div>
        <div className="flex space-x-6 text-sm  ">
            <ul className="hover:text-red-600 hover:underline cursor-pointer">Home</ul>
            <ul className="hover:text-red-600 hover:underline cursor-pointer">Projects</ul>
            <ul className="hover:text-red-600 hover:underline cursor-pointer">AboutUs</ul>
            <ul className="hover:text-red-600 hover:underline cursor-pointer">Contact</ul>
        </div>
        <div className="flex">
        {/* <FontAwesomeIcon className='border-2' icon={faMagnifyingGlass} /> */}
            <div className="cursor-pointer hover:text-red-600">Day/</div>
            <div className="cursor-pointer hover:text-red-600 ">Night</div>
            
        </div>
       </div>
    </section>
    )
}

 