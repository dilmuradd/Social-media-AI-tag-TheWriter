import React, { useContext, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import burger from './pngtree-linear-ui-icon-for-perfect-pixel-hamburger-menu-with-gradient-design-png-image_12836308-removebg-preview.png'
import { Link } from 'react-router-dom'
import { RegisterContext } from '../Context/RegisterContext'
const Header = () => {
window.addEventListener('scroll',()=>{
  let scrollPX = window.scrollY
  if(scrollPX > 50){
    document.querySelector('.header').style.backgroundColor = 'white'
    document.querySelector('.header').style.padding = '5px'
    document.querySelector('.header').classList.add('sm-shadow')

  }else{
    document.querySelector('.header').style.backgroundColor = 'transparent'
    document.querySelector('.header').classList.remove('sm-shadow')

  }
})
let [Left,setLeft] = useState(false)
let {Login,SetLogin} = useContext(RegisterContext)
let getAll = (a)=>{
  setLeft(a)
}
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
<Link to={'/account'}>
      <button  className="text-white text-[20px] p-[0] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br scale-[0.97] transition-all active:scale-[1] focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 sm:w-[150px] sm:h-[40px]  py-2.5 text-center me-2 mb-2">
        Kirish <i className="ri-arrow-right-line"></i>
        </button>
</Link>

        <img
        src={burger}
        className="h-[40px] cursor-pointer w-[40px] scale-[1.4] relative bottom-[4px] sm:hidden"
        onClick={()=>getAll(true)}
      />
   
      </div>

<div className={`absolute right-0 top-0 w-[300px] sm-shadow bg-gray-100 h-[100vh] transition-all backdrop-blur-xl ${Left ? `translate-x-[0px]` : `translate-x-[300px]`}`}>

<div className='flex items-center p-[20px] '>
  <img onClick={()=>getAll(false)} src="https://clipart-library.com/image_gallery/306263.png" alt="x-icon" className='w-[45px] cursor-pointer scale-[0.96] active:scale-[0.97] transition-all hover:scale-[1]' />
</div>
<div className='border-t border-black flex items-start p-[20px] justify-start flex-col gap-3'>
<a href="#" className='text-[22px] hover:scale-[1.1] transition-all hover:text-blue-500'>Home <i className="ri-home-2-line"></i></a>
<a href="#" className='text-[22px] hover:scale-[1.1] transition-all hover:text-blue-500'>About <i className="ri-information-line"></i></a>
<a href="#" className='text-[22px] hover:scale-[1.1] transition-all hover:text-blue-500'>Contact <i className="ri-phone-line"></i></a>

</div>

</div>

    </div>
  )
}

export default Header
