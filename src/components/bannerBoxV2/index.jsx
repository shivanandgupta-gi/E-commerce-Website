import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';
//this is for the homesliderv2 side 2 mini box 
const  BannerBoxV2=(props)=> {
  return (
     <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative">
    <img src={props.image} className="w-full h-full transition-all duration-150 group-hover:scale-105" />
    <div className={`info absolute p-5 top-0 ${props.info === 'left' ? 'left-0' : 'right-0'} w-[70%] h-[100%] z-50 flex items-center justify-center flex-col 
    gap-2 ${props.info === "left" ? '' : 'pl-20' } `}>
      <h2 className="text-[20px] font-[600]">{props?.item?.title}</h2>
    
    <span className="text-[20px] text-primary font-[600] w-full">&#8377;{props?.item?.Price}</span>
    <div className='w-full'>
        <Link to="/" className='text-[16px] font-[600] links hover:text-[#ff5252]'>SHOP NOW</Link>
        </div>
    </div>
  </div>
  )
};

export default BannerBoxV2;