import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
import {Link} from 'react-router-dom'
import './index.css';


//by thsi below the slider we add categoriy itme in small boxes
const HomeCatgiorySlider=() =>{
  return (
    <div className='homecatSlider'>
        <div className=' px-8 overflow-visible pt-4 py-8'>
            <Swiper
      // install Swiper modules
                        modules={[Navigation]}
                        navigation={true}
                        slidesPerView={7}
                        spaceBetween={10}
                        grabCursor={true}
                        allowTouchMove={true}
                        centeredSlides={false} // ✅ prevents centering
                        className="mySwiper"
                      >
                  <SwiperSlide> 
                  <Link to='/'>
                  <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col w-full overflow-visible'>
                    <img src='https://serviceapi.spicezgold.com/download/1751598295572_fash.png
' className='w-[60px] transition-all'/>
                    <h3 className='text-[15px] font-[500] mt-3'>Fashion</h3>
                    </div>  
                    </Link>
                </SwiperSlide>
                <SwiperSlide> 
                  <Link to='/'>
                  <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                    <img src='https://serviceapi.spicezgold.com/download/1741660988059_ele.png
' className='w-[60px]'/>
                    <h3 className='text-[15px] font-[500] mt-3'>Electronics</h3>
                    </div>  
                    </Link>
                </SwiperSlide>
                <SwiperSlide> 
                  <Link to='/'>
                  <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                    <img src='https://serviceapi.spicezgold.com/download/1741661045887_bag.png
' className='w-[60px]'/>
                    <h3 className='text-[15px] font-[500] mt-3'>Bags</h3>
                    </div>  
                    </Link>
                </SwiperSlide>
                <SwiperSlide> 
                  <Link to='/'>
                  <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                    <img src='https://serviceapi.spicezgold.com/download/1751598295572_fash.png
' className='w-[60px]'/>
                    <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                    </div>  
                    </Link>
                </SwiperSlide>
                <SwiperSlide> 
                  <Link to='/'>
                  <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                    <img src='https://serviceapi.spicezgold.com/download/1751598295572_fash.png
' className='w-[60px]'/>
                    <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                    </div>  
                    </Link>
                </SwiperSlide>
                <SwiperSlide> 
                  <Link to='/'>
                  <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                    <img src='https://serviceapi.spicezgold.com/download/1751598295572_fash.png
' className='w-[60px]'/>
                    <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                    </div>  
                    </Link>
                </SwiperSlide>
                <SwiperSlide> 
                  <Link to='/'>
                  <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                    <img src='https://serviceapi.spicezgold.com/download/1751598295572_fash.png
' className='w-[60px]'/>
                    <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                    </div>  
                    </Link>
                </SwiperSlide>
                <SwiperSlide> 
                  <Link to='/'>
                  <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                    <img src='https://serviceapi.spicezgold.com/download/1751598295572_fash.png
' className='w-[60px]'/>
                    <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                    </div>  
                    </Link>
                </SwiperSlide>
                <SwiperSlide> 
                  <Link to='/'>
                  <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                    <img src='https://serviceapi.spicezgold.com/download/1751598295572_fash.png
' className='w-[60px]'/>
                    <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                    </div>  
                    </Link>
                </SwiperSlide>
                <SwiperSlide> 
                  <Link to='/'>
                  <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                    <img src='https://serviceapi.spicezgold.com/download/1751598295572_fash.png
' className='w-[60px]'/>
                    <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                    </div>  
                    </Link>
                </SwiperSlide>
                <SwiperSlide> 
                  <Link to='/'>
                  <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                    <img src='https://serviceapi.spicezgold.com/download/1751598295572_fash.png
' className='w-[60px]'/>
                    <h3 className='text-[15px] font-[500] mt-3'>Smart Tablet</h3>
                    </div>  
                    </Link>
                </SwiperSlide>
                
            </Swiper>
        </div>
    </div>
  )
}

export default HomeCatgiorySlider;
