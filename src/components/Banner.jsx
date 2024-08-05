import React from 'react';
import Bannerimg from "../assets/banner1.png";
import { BiPlayCircle } from 'react-icons/bi';

const Banner = ({ togglePopup }) => {
    return (
        <>
            <div className="py-12 sm:py-0 relative">
                <div className="container min-h-[620px] flex items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                        {/* Image section */}
                        <div data-aos="fade-up" data-aos-once="false">
                            <img src={Bannerimg} className='relative w-full max-w-[400px]' alt="VR Gaming Experience" />
                        </div>
                        {/* Text section */}
                        <div className=' lg:pr-20 relative'>
                            <div className='relative z-10 space-y-5'>
                                <h1 data-aos="fade-up" data-aos-delay="300" className='text-4xl font-semibold '>
                                    DISCOVER THE ULTIMATE <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>VR EXPERIENCE</span>
                                </h1>
                                <p data-aos="fade-up" data-aos-delay="500">
                                    Dive into immersive virtual worlds where gaming meets cinematic brilliance. Our platform is designed to deliver unparalleled VR adventures for gamers and movie enthusiasts alike.
                                </p>
                                <div className='flex gap-6'>
                                    <button data-aos="fade-up" data-aos-delay="700" className='primary-btn'>Join Now</button>
                                    <button data-aos="fade-up" data-aos-delay="700" onClick={togglePopup} className='flex items-center gap-2'>
                                        <BiPlayCircle className='text-3xl' /> Watch Demo
                                    </button>
                                </div>
                                {/* Background color blob */}
                                <div className='h-[300px] w-[300px] rounded-full bg-gradient-to-r from-primary to-secondary absolute bottom-[160px] right-[800px] blur-3xl opacity-50 z-[9999]'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
