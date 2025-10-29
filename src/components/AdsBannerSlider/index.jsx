// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules'
// import BannerBox from '../BannerBox';
// import './index.css'

// const AdsBannerSlider=(props)=> {
//     console.log("ads are" ,props)
//   return (
//     <div className='py-5 w-full'>
//         <Swiper
//               // install Swiper modules for createing add below the adbannerslider component
//             modules={[Navigation]}
//             navigation={true}
//             slidesPerView={props.items}
//             spaceBetween={10}
//             grabCursor={true}
//              allowTouchMove={true}
//             centeredSlides={false} // ✅ prevents centering
//             className="smButton">  
//             <SwiperSlide>
//                 <BannerBox img={'https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp'} link={''}/>
//             </SwiperSlide> 
            
//         </Swiper>
//     </div>
//   )
// }

// export default AdsBannerSlider;
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
import BannerBox from '../BannerBox';
import './index.css'

const AdsBannerSlider = (props) => {
  console.log("ads are", props);

  return (
    <div className='py-5 w-full'>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={props.items}
        spaceBetween={10}
        grabCursor={true}
        allowTouchMove={true}
        centeredSlides={false}
        className="smButton"
      >
        {/* ✅ Map through data array */}
        {props.data && props.data.map((item, index) => (
          <SwiperSlide key={index}>
            <BannerBox img={ item.images[0] } link={item.link || '#'} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AdsBannerSlider;
