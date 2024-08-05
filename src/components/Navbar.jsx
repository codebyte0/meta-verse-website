import React from 'react'
import logo from "../assets/logo.png"
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { useState } from 'react';
import Darkmode from "../components/Darkmode"

const NavLinks = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'About', url: '/' },
    { id: 3, name: 'Products', url: '/' },
    { id: 4, name: 'Contact', url: '/' },
]

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false)
    const toggleMenu = () =>{
        setshowMenu(!showMenu)
    }
    return (
        <div className='text-black dark:text-white duration-300 relative z-[999] '>
            <div className="container py-2 md:py-0">
                <div className="flex justify-between items-center">
                    {/* logo section */}
                    <div className="flex item-center gap-3 mt-2">
                        <img src={logo} alt="logo" className='h-16' />
                        <p className="text-3xl mt-2">
                            <span className='font-bold'>VR</span> WORLD
                        </p>
                    </div>
                    {/* desktop menu section  */}
                    <div>
                        <nav className='md:block hidden'>
                            <ul className='flex items-center gap-8'>
                                {
                                    NavLinks.map(({ id, url, name }) => {
                                        return (
                                            <li key={id} className='py-4'>
                                                <a className=' text-xl font-semibold hover:text-primary hover:border-b-2 hover:border-secondary transition-colors duration-500 py-2 ' href={url}>{name}</a>
                                            </li>
                                        )
                                    })
                                }
                                {/* Darkmode  */}
                                <Darkmode/>
                            </ul>
                        </nav>
                        {/* Mobile View Sidebar  */}
                        <div className='md:hidden block '>
                        <Darkmode/>
                            {  showMenu ? (<HiMenuAlt1 className='cursor-pointer' size={30} onClick={toggleMenu}/>) : (<HiMenuAlt3 className='cursor-pointer' size={30} onClick={toggleMenu}/>) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
