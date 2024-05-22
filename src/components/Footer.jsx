import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t-2 w-full bg-gray-100 py-8 md:flex flex-wrap md:px-60 md:pt-20">
            <div className="w-1/2 mx-auto md:w-1/2 md:flex md:items-end flex-col md:pr-14">
                <img src={logo} alt="logo" className="sm:w-3/4 md:w-full lg:w-2/3 xl:w-1/2 2xl:w-[350px] my-0"/>
                <p className="my-3 text-center">Thanks for Reading!</p>
            </div>
            <div className="w-full flex justify-center md:justify-start gap-20 md:w-1/2 md:pl-14">
                <div className="flex flex-col gap-3">
                    <Link to="/tags" className="hover:underline">Tags</Link>
                    <Link to="/about" className="hover:underline">About</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <a href="" className="hover:underline">GitHub</a>
                    <a href="" className="hover:underline">LinkedIn</a>
                    <a href="" className="hover:underline">RSS</a>
                </div>
            </div>
            <div className="w-full">
                <p className="text-xs text-center mb-0 md:text-sm">©2024-present Isaac Anim. All Rights Reserved</p>
            </div>
    </footer>
  )
}

export default Footer