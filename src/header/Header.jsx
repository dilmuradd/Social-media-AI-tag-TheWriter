import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Player } from "@lottiefiles/react-lottie-player"

const Header = () => {
window.addEventListener('scroll',()=>{
  let scrollPX = window.scrollY
  if(scrollPX > 50){
    document.querySelector('.header').style.backgroundColor = 'white'
    document.querySelector('.header').style.padding = '5px'

  }else{
    document.querySelector('.header').style.backgroundColor = 'transparent'

  }
})

  return (
    <div className='  p-[15px] fixed w-full top-0 z-10 header  flex items-center justify-between '>
      <h1 className='font-semibold text-[34px]'>LOGO</h1>
      <div className='sm:flex hidden items-center justify-center gap-5'>
        <a href="#" className='text-[18px]'>HOME</a>
        <a href="#" className='text-[18px]'>ABOUT</a>
        <a href="#" className='text-[18px]'>GROUP</a>
        <a href="#" className='text-[18px]'>CONTACT</a>

      </div>
      <div className='flex items-center justify-center'>

      <button className="text-white text-[20px] p-[0] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br scale-[0.97] transition-all active:scale-[1] focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 sm:w-[150px] sm:h-[40px]  py-2.5 text-center me-2 mb-2">
        Kirish <i className="ri-arrow-right-line"></i>
        </button>

        <Player
        src="https://lottie.host/0aa1b7f1-1d80-46b5-b268-e471cb4a40df/lhM8iqSuVV.json"
        background="transparent"
        speed={8}
        className="h-[40px] w-[40px] scale-[1.4] relative bottom-[4px] sm:hidden"
        autoplay
      />
   
      </div>


    </div>
  )
}

export default Header
