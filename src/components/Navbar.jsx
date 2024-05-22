import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import logo from "../assets/logo.svg"
import { LiaBarsSolid } from "react-icons/lia";
import { GoRss } from "react-icons/go";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);



  return (
    <nav className="py-4 flex justify-between md:px-10 md:py-3 border-b-2">
        <div className="w-[40%] md:w-[16%]"> 
          <Link to="/">
            <img src={logo} alt="logo" className="ml-5 mt-1 w-full my-0"/>
          </Link>
        </div>
        <ul onClick={() => {setShowLinks()}} className={`${showLinks ? "fixed top-0 right-0 w-full h-screen text-center flex flex-col justify-center items-center space-y-16 backdrop-blur-md duration-200 md:static md:flex-row md:w-[40%] md:h-10 md:space-y-0 md:gap-10" : "fixed top-0 right-0 w-0 h-screen text-center flex flex-col justify-center md:items-center space-y-16 backdrop-blur-md duration-200 overflow-x-hidden md:static md:flex-row md:w-[40%] md:h-10 md:space-y-0 md:gap-10 md:mt-2"}`}>
          <li className="text-4xl md:text-lg hover:underline"><Link to="/tags">Tags</Link></li>
          <li className="text-4xl md:text-lg hover:underline"><Link to="/about">About</Link></li>
          <li className="text-4xl md:text-lg hover:underline"><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="flex md:w-1/5 md:justify-end md:gap-5 md:pr-5">
          <button className="text-2xl md:hover:scale-125 duration-300"><a href="https://github.com/yawcoder" target="_blank"><FaGithub/></a></button>
          <button className="text-2xl hidden md:inline-block ml-5 md:hover:scale-125 duration-300"><GoRss/></button>
          <button onClick={() => {setShowLinks(true)}} className="text-3xl ml-4 mr-5 md:hidden"><LiaBarsSolid/></button>
        </div>
    </nav>
  )
}

export default Navbar