import React from 'react';
import Heroimg4 from "../assets/girltop-t.png";

import { BiPlayCircle } from 'react-icons/bi';

const Hero = ({ togglePopup }) => {
    return (
        <>
            <div className='py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden'>
                <div className="container min-h-[700px] flex relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
                        {/* Hero text section */}
                        <div className='space-y-5 lg:pr-20 order-2 sm:order-1 relative z-30'>
                            <h1 data-aos="fade-up" className='text-4xl font-semibold '>
                                EMBRACE THE FUTURE OF ENTERTAINMENT
                            </h1>
                            <p data-aos="fade-up" data-aos-delay="300">
                                Dive into a world where your imagination is the only limit. Whether you're looking to conquer new worlds in VR games or lose yourself in immersive VR movies, we've got you covered.
                            </p>
                            <div className='flex gap-6'>
                                <button data-aos="fade-up" data-aos-delay="500" className='primary-btn hover:scale-x-125'>Get Started</button>
                                <button data-aos="fade-up" data-aos-delay="500" onClick={togglePopup} className='flex items-center gap-2'>
                                    <BiPlayCircle className='text-3xl' /> View Demo
                                </button>
                            </div>
                        </div>

                        {/* Image section */}
                        <div data-aos="fade-up" data-aos-offset="0" className='order-1 sm:order-2 pb-28'>
                            <img src={Heroimg4} alt="VR Adventure" className='max-h-[600px]' />
                        </div>
                    </div>
                    {/* Animated blob */}
                    <div className='h-[300px] w-[300px] rounded-full bg-gradient-to-r from-primary to-secondary absolute top-0 left-0 blur-3xl animated-wrapper'></div>
                </div>
            </div>
        </>
    );
}

export default Hero;
