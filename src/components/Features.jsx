import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'

const FeaturesData = [
  {
    name: "Experience Reality",
    icon: (
      <SlNote className='text-5xl text-primary group-hover:text-black duration-300' />
    ),
    link: "#",
    description: "Step into fully immersive virtual worlds where reality meets imagination.",
    aosDelay: "300",
  },
  {
    name: "Captivating videos",
    icon: (
      <FaCameraRetro className='text-5xl text-primary group-hover:text-black duration-300' />
    ),
    link: "#",
    description: "Watch breathtaking VR videos with stunning detail and cinematic quality.",
    aosDelay: "500",
  },
  {
    name: "Safe Transactions",
    icon: (
      <GiNotebook className='text-5xl text-primary group-hover:text-black duration-300' />
    ),
    link: "#",
    description: "Enjoy secure and hassle-free transactions, ensuring your peace of mind.",
    aosDelay: "700",
  },
]

const Features = () => {
  return (
    <>
      <div className="container py-11 sm:min-h-[500px] ">
        <div>
          <h1 data-aos="fade-up" className='text-3xl mb-12 font-semibold text-center sm:text-4xl'>Why Choose Us?</h1>
          {/* Card section  */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
            {FeaturesData.map((data) => (
              <div data-aos="fade-up" data-aos-delay={data.aosDelay} className='text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark cursor-pointer hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300'>
                <div className='grid place-items-center'>{data.icon}</div>
                <h1 className='text-2xl'>{data.name}</h1>
                <p>{data.description}</p>
                <a href={data.link} className='inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300'>Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
