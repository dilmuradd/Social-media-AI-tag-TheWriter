import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

// import required modules
import svg1 from './svg1.svg'
import svg2 from './svg2.svg'
import svg3 from './svg3.svg'
const Info = () => {
  return (
    <div>
      <h1 className='text-[32px]  text-blue-600 cursor-pointer ml-[30px] mt-[90px]'>Sayting vazifasi <i className="ri-information-line"></i></h1>


<div className='w-[100%] flex items-center justify-center mt-[50px]'>
<Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
            delay:2000,
            disableOnInteraction:false
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper flex items-center justify-center p-[30px] "
      >
        <SwiperSlide className=' w-[100px] h-[350px] flex items-center justify-center'>
            <div className='w-[300px] p-[20px] h-[350px] border rounded-lg bg-blue-100 cursor-pointer scale-[0.98] transition-all hover:shadow-xl shadow-lg hover:scale-[1]'>
                <div className='flex justify-center'>
                    <img src={svg1} alt="svg" className='w-[200px] h-[100px] mt-[20px]' />

                </div>
                <h1 className='text-center mt-[30px] font-medium text-[22px] text-blue-800'>
                    Sifatli kontentga, Sifatli POST, va HESHTEGLAR, yozing.
                </h1>
            </div>
        </SwiperSlide>


        <SwiperSlide className=' w-[100px] h-[350px] flex items-center justify-center'>
            <div className='w-[300px] p-[20px] h-[350px] border rounded-lg bg-blue-100 cursor-pointer scale-[0.98] transition-all hover:shadow-xl shadow-lg hover:scale-[1]'>
                <div className='flex justify-center'>
                    <img src={svg2} alt="svg" className='w-[200px] h-[100px] mt-[20px]' />

                </div>
                <h1 className='text-center mt-[30px] font-medium text-[22px] text-blue-800'>
                    Video-ingizga Ko'proq ko'rishlar va Likelarni Yig'ing
                </h1>
            </div>
        </SwiperSlide>




        <SwiperSlide className=' w-[100px] h-[350px] flex items-center justify-center'>
            <div className='w-[300px] p-[20px] h-[350px] border rounded-lg bg-blue-100 cursor-pointer scale-[0.98] transition-all hover:shadow-xl shadow-lg hover:scale-[1]'>
                <div className='flex justify-center'>
                    <img src={svg3} alt="svg" className='w-[200px] h-[100px] mt-[20px]' />

                </div>
                <h1 className='text-center mt-[30px] font-medium text-[22px] text-blue-800'>
                    POST va HESHTEGLARNI, tezroq yozing va vaqtingizni, Tejang.
                </h1>
            </div>
        </SwiperSlide>
      
   


        
      </Swiper>
</div>

    </div>
  )
}

export default Info
