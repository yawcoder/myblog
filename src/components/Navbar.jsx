import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub} from 'react-icons/fa';
import logo from "../assets/logo.jpg"
import { LiaBarsSolid } from "react-icons/lia";
import { GoRss } from "react-icons/go";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);



  return (
    <nav className="py-4 flex justify-between bg-orange-100 md:px-20 md:py-14">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="ml-5" width={100}/>
          </Link>
        </div>
        <ul onClick={() => {setShowLinks()}} className={`${showLinks ? "absolute top-0 right-0 w-full h-screen text-center justify-center flex flex-col space-y-16 backdrop-blur-md duration-200 md:static md:flex-row md:w-[50%] md:h-5 md:justify-start md:space-y-0 md:gap-10" : "absolute top-0 right-0 w-0 h-screen text-center justify-center flex flex-col space-y-16 backdrop-blur-md duration-200 md:static md:flex-row md:w-[50%] md:h-5 md:justify-start md:space-y-0 md:gap-10"}`}>
          <li className="text-4xl md:text-lg"><Link to="/tags">Tags</Link></li>
          <li className="text-4xl md:text-lg"><Link to="/about">About</Link></li>
          <li className="text-4xl md:text-lg"><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="flex">
          <button className="text-2xl"><FaGithub/></button>
          <button className="text-2xl hidden md:inline-block ml-5"><GoRss/></button>
          <button onClick={() => {setShowLinks(true)}} className="text-4xl ml-4 mr-5 md:hidden"><LiaBarsSolid/></button>
        </div>
    </nav>
  )
}

export default Navbar