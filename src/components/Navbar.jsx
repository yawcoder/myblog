import React, { useState } from 'react';
import { HiBars3 } from "react-icons/hi2"
import { CiSearch } from "react-icons/ci"
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';
import logo from '../assets/logo.jpg';

const Navbar = ({isAuth, setIsAuth}) => {
    const [showLinks, setShowLinks] = useState(false);
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
    }



    const signUserOut = () => {
        signOut(auth).then(() => {
          localStorage.clear();
          setIsAuth(false);
          window.location.pathname = "/signin";
        })
      }


  return (
    <nav className={`${showLinks ? "flex justify-between relative py-3 px-5 transition duration-300 bg-white z-10 md:px-10 md:static md:shadow-xl" : "flex justify-between relative py-3 px-5 shadow-xl transition duration-300 bg-white md:px-10 md:static"}`}>
        <div className="w-1/4 md:w-[10%]">
            <img src={logo} alt="logo" className="w-full cursor-pointer" onClick={goToHome}/>
        </div>
        <div onClick={() => setShowLinks(false)} className={`${showLinks ? "fixed top-20 right-0 w-full h-full z-[9] bg-[rgba(0,0,0,0.4)] duration-300 md:hidden" : "fixed top-20 right-0 w-0 h-full z-[9] bg-[rgba(0,0,0,0.4)] duration-300 md:hidden"}`}></div>
        <ul className={`${showLinks ? "list-none mt-5 absolute top-12 right-0 w-full text-center duration-300 bg-white shadow-lg z-10 border-t-[1px] border-t-[rgba(0,0,0,0.3)] overflow-hidden md:static md:w-1/2 md:shadow-none md:flex justify-start md:border-none" : "list-none mt-5 absolute top-12 right-0 w-0 text-center duration-300 bg-white shadow-lg z-10 overflow-hidden md:static md:w-1/2 md:shadow-none md:flex justify-start md:border-none"}`}>
            <li className="my-4 md:m-0 md:mx-10" onClick={() => setShowLinks(false)}>
                {
                    isAuth ? <Link to="/dashboard">Dashboard</Link> : <Link to="/">Home</Link>
                }
            </li>
            <li className="my-4 md:m-0 md:mx-10" onClick={() => setShowLinks(false)}>
                <Link to="/tags">Tags</Link>
            </li>
            <li className="my-4 md:m-0 md:mx-10" onClick={() => setShowLinks(false)}>
                <Link to="/about">About</Link>
            </li>
            {
                isAuth && showLinks? 
                <li>
                    <button onClick={signUserOut} className="py-1 px-2 rounded-md border-[1px] border-[#1c1c1c] my-[0.6rem] md:hidden hover:bg-black hover:text-white duration-300 active:scale-90">Sign Out</button>
                </li>:
                <>
                    <li className="my-4">
                        <Link to="/signin" className="py-1 px-2 rounded-md border-[1px] border-[#1c1c1c] my-[0.6rem] md:hidden hover:bg-black hover:text-white duration-300 active:scale-90" onClick={() => setShowLinks(false)}>Sign In</Link>
                    </li>
                </>
            }
        </ul>
        <div className="w-1/5 flex justify-end">
            <button className="text-2xl mx-5"><CiSearch/></button>
            <button className={`${showLinks ? "text-3xl rotate-90 duration-300 md:hidden" : "text-3xl duration-300 md:hidden"}`} onClick={() => setShowLinks(!showLinks)}><HiBars3/></button>
            {
                !isAuth ? 
                <Link to="/signin" className="py-1 px-2 rounded-md border-[1px] border-[#1c1c1c] hidden md:block my-[0.6rem] hover:bg-black hover:text-white duration-300 active:scale-90">Sign In</Link> : 
                <button onClick={signUserOut} className="hidden md:block py-1 px-2 rounded-md border-[1px] border-[#1c1c1c] my-[0.6rem] hover:bg-black hover:text-white duration-300 active:scale-90">Sign Out</button>
            }
        </div>
    </nav>
  )
}

export default Navbar