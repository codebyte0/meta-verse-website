import React from 'react';
import Heroimg7 from "../assets/twonewgirl.png";

import { BiPlayCircle } from 'react-icons/bi';

const Banner2 = ({ togglePopup }) => {
    return (
        <>
            <div className="py-12 sm:py-0 relative">
                <div className="container min-h-[620px] flex items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                        {/* Text section */}
                        <div className='space-y-5 lg:pr-20 order-2 sm:order-1 relative'>
                            <div className="relative z-10 space-y-5 pt-11">
                                <h1 data-aos="fade-up" data-aos-delay="300" className='text-4xl font-semibold '>
                                    STEP INTO THE FUTURE OF <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>VR GAMING & CINEMA</span>
                                </h1>
                                <p data-aos="fade-up" data-aos-delay="500">
                                    Immerse yourself in cutting-edge virtual experiences that blend gaming and cinema. Explore new worlds, play epic games, and watch movies like never before.
                                </p>
                                <div className='flex gap-6'>
                                    <button data-aos="fade-up" data-aos-delay="700" className='primary-btn'>Get Started</button>
                                    <button data-aos="fade-up" data-aos-delay="900" onClick={togglePopup} className='flex items-center gap-2'>
                                        <BiPlayCircle className='text-3xl' /> Watch Trailer
                                    </button>
                                </div>
                            </div>
                            {/* Background color blob */}
                            <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary rounded-full to-secondary absolute bottom-[180px] left-[550px] blur-3xl opacity-50 z-[9999]'></div>
                        </div>
                        {/* Image section */}
                        <div data-aos="fade-up" className='order-1 sm:order-2'>
                            <img src={Heroimg7} className='relative w-full max-w-[600px]' alt="VR Experience" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner2;
