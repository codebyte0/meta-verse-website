import React from 'react'
import Appstorebutton from './buttons/Appstorebutton.jsx'
import Playstorebutton from "./buttons/Playstorebutton.jsx"

const Applicationstore = () => {
  return (
    <>
      <div className="container py-10 sm:min-h-[400px] sm:grid sm:place-items-center ">
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 data-aos="fade-up" className='text-2xl font-semibold text-center sm:px-20'>Get Started With Our App</h1>
          <p className='text-center' data-aos="fade-up" data-aos-delay="300">Download our app and access a world of VR games and experiences. Available now on all major platforms.</p>
          <div className='flex flex-wrap justify-center gap-4 items-center'>
            <a href="#" data-aos="fade-up" data-aos-delay="500">
              <Appstorebutton className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
            </a>
            <a href="#" data-aos="fade-up" data-aos-delay="700">
              <Playstorebutton className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
            </a>
          </div>
        </div>


      </div>
    </>
  )
}

export default Applicationstore
