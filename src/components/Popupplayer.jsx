import React from 'react'
import { IoClose } from 'react-icons/io5'

const Popupplayer = ({ showPopup, togglePopup }) => {
    return (
        <>
            {
                showPopup && (
                    <div className='fixed z-[99999] top-0 left-0 w-full h-full  bg-black/70 backdrop-blur-sm'>
                        <div className='absolute left-1/2 w-fullsm:max-w-[600px] top-1/2 -translate-x-1/2 -translate-y-1/2 '>
                            <div className='bg-white dark:bg-[#0A0A0A] m-3 p-5 rounded-lg shadow-md '>
                                {/* header section  */}
                                <div className='flex items-center justify-between pb-3'>
                                    <h1 className='text-2xl font-semibold'>Metaverse</h1>
                                    <IoClose onClick={togglePopup} className='text-4xl cursor-pointer hover:scale-110 duration-300 text-black' />
                                </div>
                                {/* video player  */}
                                <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hEdzv7D4CbQ?si=--hOXozvspJoUrgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Popupplayer
