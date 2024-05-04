import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub} from 'react-icons/fa';
import logo from "../assets/logo.png"
import { LiaBarsSolid } from "react-icons/lia";
import { GoRss } from "react-icons/go";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);



  return (
    <nav className="py-6 flex justify-between bg-orange-100 md:px-10 md:py-10">
        <div className="w-1/3 md:w-1/5"> 
          <Link to="/">
            <img src={logo} alt="logo" className="ml-5 w-full"/>
          </Link>
        </div>
        <ul onClick={() => {setShowLinks()}} className={`${showLinks ? "absolute top-0 right-0 w-full h-screen text-center justify-center flex flex-col space-y-16 backdrop-blur-md duration-200 md:static md:flex-row md:w-[50%] md:h-10 md:space-y-0 md:gap-10" : "absolute top-0 right-0 w-0 h-screen text-center justify-center flex flex-col space-y-16 backdrop-blur-md duration-200 overflow-x-hidden md:static md:flex-row md:w-3/5 md:h-10 md:space-y-0 md:gap-10"}`}>
          <li className="text-4xl md:text-lg"><Link to="/tags">Tags</Link></li>
          <li className="text-4xl md:text-lg"><Link to="/about">About</Link></li>
          <li className="text-4xl md:text-lg"><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="flex md:w-1/5 md:justify-end">
          <button className="text-2xl"><FaGithub/></button>
          <button className="text-2xl hidden md:inline-block ml-5"><GoRss/></button>
          <button onClick={() => {setShowLinks(true)}} className="text-4xl ml-4 mr-5 md:hidden"><LiaBarsSolid/></button>
        </div>
    </nav>
  )
}

export default Navbar