import React from 'react'
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from 'react';

const Darkmode = () => {
    const [theme, settheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : "light"
    );
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem('theme', 'dark');
        }
        else {
            element.classList.remove("dark");
            localStorage.setItem('theme', 'light');
        }
    }, [theme])

    return (
        <>
            <div className="fixed top-24 md:right-8 md:top-7 right-4">
                {
                    theme === "dark" ? (
                        <FaSun className='text-2xl cursor-pointer' onClick={() => {
                            settheme("light")
                        }} />
                    ) : (
                        <FaMoon className='text-2xl cursor-pointer' onClick={() => {
                            settheme("dark")
                        }} />
                    )
                }
            </div>
        </>
    )
}

export default Darkmode
