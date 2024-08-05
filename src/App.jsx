import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Quotes from './components/Quotes'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Features from './components/Features'
import Applicationstore from './components/Applicationstore'
import Footer from './components/Footer'
import Popupplayer from './components/Popupplayer'
import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [showPopup, setshowPopup] = useState(false)
  const togglePopup = () => {
    setshowPopup(!showPopup)
  }

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-sine',
      offset: 100,
      delay: 100
    });
    Aos.refresh()
  }, [])

  return (
    <>
      <main className='overflow-x-hidden bg-white dark:bg-black dark:text-white text-black duration-300'>
        <Navbar />
        <Hero togglePopup={togglePopup} />
        <Quotes />
        <Banner togglePopup={togglePopup}/>
        <Banner2 togglePopup={togglePopup}/>
        <Features/>
        <Applicationstore/>
        <Footer/>
        <Popupplayer showPopup={showPopup} togglePopup={togglePopup}/>
      </main>
    </>
  )
}

export default App
