import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
import BannerBox from '../BannerBox';
import './index.css'
import BannerBoxV2 from '../bannerBoxV2';

const AdBannerSliderV1 = (props) => {
    return (
        <div className='py-5 w-full'>
            <Swiper
                // install Swiper modules for createing add below the adbannerslider component
                modules={[Navigation]}
                navigation={true}
                slidesPerView={props.items}
                spaceBetween={10}
                grabCursor={true}
                allowTouchMove={true}
                centeredSlides={false} // ✅ prevents centering
                className="smButton">
                { 
                    //loop for the view of the ads
                    props.data.map((item, index) => (
                        <SwiperSlide key={index} >
                            <BannerBoxV2 info={item.alignInfo} image={item.images[0]} link={'/'} alt="images" item={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default AdBannerSliderV1;
