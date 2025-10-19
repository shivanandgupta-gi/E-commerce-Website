import React from 'react'
//this is for the one large at left side slider and two mini at 
//right side one top and one bottom like ad
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Button from '@mui/material/Button';


const HomeSliderV2=(props)=> {
  return (
    <>
     <Swiper
        loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true, 
        }}
        autoplay={{
          delay:2500,
          disableOnInteraction:false,
        }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper w-full h-[500px]"
      >
        {
          props.data.map((item,index)=>{
            if(item.isDisplayOnHomeBanner === true){
              return(
               <SwiperSlide>
              <div className=' item w-full rounded-md overflow-hidden relative'>
            <img  className="w-full h-full object-cover" src={item.bannerimages}/>
              <div className='info absolute top-0 -right-[100%] w-[50%] h-full flex flex-col items-start justify-center 
                    z-50 p-8 transition-all opacity-0 duration-700'>
                  <h4 className='text-[20px] font-[500] w-full mb-3 relative -right-[100%] opacity-0 duration-1000'>{item.bannerTitlename}</h4>
                  <h2 className='text-[30px] font-[700] w-full '>{item.name}</h2>
                  <h3 className='flex items-center gap-3 text-[20px] font-[500] w-full text-left mt-3 mb-3'>
                      Starting At Only {" "}
                      <span className='text-primary text-[30px] font-[700]'>&#8377;{item.price}</span>
                  </h3>
                  <div className='w-full'>
                      <Button className='btn-org mt-4 ml-8'>SHOP NOW</Button>
                  </div>
                  </div>
            </div>
          </SwiperSlide>
              )
            }
           
          })
        }
      </Swiper>
      </>
  )
};

export default HomeSliderV2;