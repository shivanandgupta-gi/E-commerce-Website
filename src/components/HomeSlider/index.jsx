// for creating the slider page like next or previous
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = () => {
  return (
    // for slider used
    <div className='homdeSlider py-5'>
        <div className='px-10'>
    <Swiper spaceBetween={20} navigation={true} modules={[Navigation,Autoplay]} autoplay={{delay:2500,disableOnInteraction:false,}} className="sliderHome">
    <SwiperSlide>
        <div className='item rounded-[30px] overflow-hidden'>
            <img src='https://serviceapi.spicezgold.com/download/1751685183248_NewProject(6).jpg'
        alt="Banner slider" className='w-full'></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='item rounded-[30px] overflow-hidden'>
        <img src='https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg'
        alt="Banner slider" className='w-full'></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='item rounded-[30px] overflow-hidden'>
        <img src='https://serviceapi.spicezgold.com/download/1751685164864_NewProject(10).jpg'
        alt="Banner slider" className='w-full'></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='item rounded-[30px] overflow-hidden'>
        <img src='https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg'
        alt="Banner slider" className='w-full'></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='item rounded-[30px] overflow-hidden'>
        <img src='https://serviceapi.spicezgold.com/download/1751685164864_NewProject(10).jpg'
        alt="Banner slider" className='w-full'></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='item rounded-[30px] overflow-hidden'>
        <img src='https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg'
        alt="Banner slider" className='w-full'></img>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='item rounded-[30px] overflow-hidden'>
        <img src='https://serviceapi.spicezgold.com/download/1751685164864_NewProject(10).jpg'
        alt="Banner slider" className='w-full'></img>
        </div>
    </SwiperSlide>
  </Swiper>

        </div>
    </div>
  
  );
};

export default HomeSlider;
