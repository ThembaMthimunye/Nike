import React from 'react'
import logo from "../assets/download.webp"
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <header className='flex px-10 py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-w-[1440px] mx-0'>
            <a href="">
            <img width={130} height={29} src={logo} alt="" />
            
            </a>
        </nav>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden mx-[-10rem] text-slate-900'>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact Us</li>
            <li>Sign in / Explore</li>
            <li>Home</li>
        </ul>
        <div className='max-lg-block'>
            <GiHamburgerMenu/>
        </div>
        
    </header>
  )
}

export default Nav
