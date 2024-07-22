import Header from "./header/Header"
import { Player } from "@lottiefiles/react-lottie-player"
import { TypeAnimation } from "react-type-animation"
import Info from "./Info/Info"
import Boglanish from "./Boglanish/Boglanish"
import { useContext } from "react"
import { RegisterContext } from "./Context/RegisterContext"
import { Link, Route, Routes } from "react-router-dom"
import LoginPge from "./LoginPge"
import AccountPage from "./AccountPage"

function App() {
let {Login,SetLogin}= useContext(RegisterContext)
console.log(Login);
  return (
   <div className="m-auto max-w-[1920px]">
    
   





<Routes>
  <Route path="/account" element={!Login ? <LoginPge/> : <AccountPage/>} />
  <Route path="/" element={
<div>
<Header/>

<div className="w-[100%] flex flex-col-reverse md:flex-row items-center justify-between gap-3 p-[15px] lg:mt-[30px] ">
  <div className="lg:w-[50%] text-center md:text-left  h-[100%] lg:pl-[50px] lg:pt-[70px]">
  <h1 className=" text-[40px] lg:text-[40px] font-bold text-blue-500 " >
  Salom <br className="hidden lg:block" /> men <span className="text-blue-600">
  AI
    </span>  botman
  </h1>
  
  
  <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Ijtimoiy tarmoqlar uchun, Postlar.',
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          'Ijtimoiy tarmoqlar uchun, Heshteglar.',
          2000
          
        ]}
        wrapper="span"
        speed={40}
        style={{  display: 'block' }}
        repeat={Infinity}
        className="text-[18px] lg:text-[2em]"
      />
  <Link to={'/account'}>
  <button className="text-white text-[27px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br scale-[0.97] transition-all active:scale-[1] focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 w-[200px] h-[50px] mt-[20px] py-2.5 text-center me-2 mb-2">Kirish</button>
  </Link>
  
  </div>
  
  <div className="w-[100%] lg:w-[50%]  h-[100%]">
  <Player
          src="https://lottie.host/f6899e44-e995-4581-a6e2-55722587a349/KylvfxbBEL.json"
          background="transparent"
          speed={0.5}
          className="lg:w-[500px] h-[100%] w-[100%] lg:h-[500px]"
          loop
          autoplay
        />
  
  
  </div>
  </div> 
  <Info/>
  <Boglanish/>
</div>


      }/>
</Routes>

    </div>
  )
}

export default App
