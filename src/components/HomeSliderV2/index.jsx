import React from 'react'
//this is for the one large at left side slider and two mini at 
//right side one top and one bottom like ad
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Button from '@mui/material/Button';

const HomeSliderV2=()=> {
  return (
    <>
     <Swiper
        
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='item w-full rounded-md overflow-hidden'>
          <img src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" />
            <div className='info absolute top-0 right-0 w-[50%] h-full flex flex-col items-start justify-center z-50 p-8 '>
                <h4 className='text-[20px] font-[500] w-full mb-3'>Big Saving Days Sale</h4>
                <h2 className='text-[35px] font-[700] w-full'>Buy Modern Chair in Black Color</h2>
                <h3 className='flex items-center gap-3 text-[20px] font-[500] w-full text-left mt-3 mb-3'>
                    Starting At Only {" "}
                    <span className='text-primary text-[30px] font-[700]'>Rs. 3000</span>
                </h3>
                <div className='w-full'>
                    <Button className='btn-org mt-4 ml-8'>SHOP NOW</Button>
                </div>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='item w-full rounded-md overflow-hidden relative'>
            <img src="https://serviceapi.spicezgold.com/download/1742439896581_1737036773579_sample-1.jpg" />

                <div className='info absolute top-0 right-0 w-[50%] h-full flex flex-col items-start justify-center z-50 p-8 '>
                <h4 className='text-[20px] font-[500] w-full mb-3'>Big Saving Days Sale</h4>
                <h2 className='text-[35px] font-[700] w-full'>Women Solid Rounded Green T-Shirt</h2>
                <h3 className='flex items-center gap-3 text-[20px] font-[500] w-full text-left mt-3 mb-3'>
                    Starting At Only {" "}
                    <span className='text-primary text-[30px] font-[700]'>Rs. 1500</span>
                </h3>
                <div className='w-full'>
                    <Button className='btn-org mt-4 ml-8'>SHOP NOW</Button>
                </div>
                </div>
        </div>
        </SwiperSlide>

      </Swiper>
      </>
  )
};

export default HomeSliderV2;