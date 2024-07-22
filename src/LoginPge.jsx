import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RegisterContext } from './Context/RegisterContext';

const LoginPge = () => {
  let {SetLogin} = useContext(RegisterContext)
  let [Hello, setHello] = useState(false);

  let RegisterForm = async (e) => {
    e.preventDefault();
    try {
      let register = await axios.post('https://4600fb4d5bbc8099.mokky.dev/register', {
        fullName: e.target.fullName.value,
        email: e.target.email.value,
        password: e.target.password.value,
      });
      console.log(register);
      localStorage.setItem('UserInfo', JSON.stringify(register.data.data)); // JSON.stringify() ni to'g'ri ishlatish
      localStorage.setItem('token', register.data.token);
    SetLogin(true)

    } catch (error) {
      console.log('');
    }
  
  };

  let LoginForm = async (e) => {
    e.preventDefault();
    try {
      let register = await axios.post('https://4600fb4d5bbc8099.mokky.dev/auth', {
        email: e.target.email.value,
        password: e.target.password.value,
      });
      console.log(register);
      localStorage.setItem('UserInfo', JSON.stringify(register.data.data)); // JSON.stringify() ni to'g'ri ishlatish
      localStorage.setItem('token', register.data.token);
    SetLogin(true)

    } catch (error) {
      console.log('');
    }
  
  };



  return (
    <div className='w-[100%] hidBox flex items-center justify-center top-[0] left-0 h-[100vh] backdrop-blur-sm p-[10px] fixed z-20'>
      <form
        onSubmit={RegisterForm}
        className={`w-[350px] md:w-[400px] transition-all h-[450px] ${
          Hello ? `translate-x-[-2830px]` : `translate-y-[0]`
        } rounded-xl backdrop-blur-3xl bg-white sm-shadow`}
      >
        <div className='flex items-center p-[6px] border-b'>
          <Link to={'/'}>
            <img className='w-[40px] cursor-pointer' src='https://clipart-library.com/image_gallery/306263.png' alt='x-png' />
          </Link>
        </div>
        <h1 className='text-center p-[10px] text-[32px] font-extrabold text-blue-500'>Ro'yxatdan O'tish</h1>
        <div className='flex flex-col items-center gap-6 p-4'>
          <input
            type='text'
            name='fullName'
            placeholder='To`liq Ism, Familya'
            className='pl-[10px] w-full h-[35px] rounded border border-blue-500 outline-blue-600'
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='pl-[10px] w-full h-[35px] rounded border border-blue-500 outline-blue-600'
          />
          <input
            type='password'
            name='password'
            placeholder='Esda qoladigan parol kiriting'
            className='pl-[10px] w-full h-[35px] rounded border border-blue-500 outline-blue-600'
          />
          <button
            type='submit'
            className='bg-blue-600 w-[70%] h-[40px] active:scale-[1.1] rounded-xl text-[#fff] hover:bg-transparent hover:border-[2px] transition-all hover:border-blue-600 hover:text-blue-600'
          >
            Ro'yxatdan o'tish
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <button onClick={() => setHello(true)} className='text-blue-600 hover:scale-[0.96] transition-all'>
            Menda hisob mavjud
          </button>
        </div>
      </form>

      <form 
        className={`w-[350px] md:w-[400px] transition-all h-[450px] absolute ${
          !Hello ? `translate-x-[2830px]` : `translate-y-[0]`
        } sm-shadow rounded-xl bg-white`}
        onSubmit={LoginForm}
      >
        <div className='flex items-center p-[6px] border-b'>
          <Link to={'/'}>
            <img className='w-[40px] cursor-pointer' src='https://clipart-library.com/image_gallery/306263.png' alt='x-png' />
          </Link>
        </div>
        <h1 className='text-center p-[10px] text-[32px] font-extrabold text-blue-500'>Kirish</h1>
        <div className='flex flex-col items-center gap-6 p-4'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='pl-[10px] w-full h-[35px] rounded border border-blue-500 outline-blue-600'
          />
          <input
            type='password'
            name='password'
            placeholder='Parol kiriting'
            className='pl-[10px] w-full h-[35px] rounded border border-blue-500 outline-blue-600'
          />
          <button className='bg-blue-600 w-[70%] active:scale-[1.1] h-[40px] rounded-xl text-[#fff] hover:bg-transparent hover:border-[2px] transition-all hover:border-blue-600 hover:text-blue-600'>
            Kirish
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <button onClick={() => setHello(false)} className='text-blue-600 hover:scale-[0.96] transition-all'>
            Ro'yxatdan o'tish
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPge;
