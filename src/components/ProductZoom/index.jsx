import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
import './index.css';

 const ProductZoom = (props) => {
      const [slideIndex, setSlideIndex] = useState(0);
      const zoomSliderBig = useRef();
      const zoomSliderSml = useRef();

      const goto = (index) => {
        setSlideIndex(index);
        zoomSliderSml.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
      };

  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%]">
          <Swiper
            // install Swiper modules
            ref={zoomSliderSml}
            direction={'vertical'}
            modules={[Navigation]}
            navigation={true}
            slidesPerView={5}
            spaceBetween={0}
            centeredSlides={false} // ✅ prevents centering
            className={`zoomProductSliderThumbs h-[500px] overflow-hidden ${props?.images?.length > 5 && "space"}`}
            >
              {
                props.images.map((item,index)=>(
                  <SwiperSlide key={index}> 
                      <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === index ? 'opacity-1' : 'opacity-30'}`} onClick={()=>goto(index)}>
                        <img src={item}
                        className="w-full transition-all group-hover:scale-110"></img>
                      </div>
                  </SwiperSlide>
                ))
              }
          </Swiper>
        </div>
       
       <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
        <Swiper
            // install Swiper modules
            ref={zoomSliderBig}
            navigation={false}
            slidesPerView={1}
            spaceBetween={0} // ✅ prevents centering
            >
              {              
                 props.images.map((item,index)=>(
                  <SwiperSlide key={index}>
                    <InnerImageZoom
                        zoomType="hover"
                        zoomScale={1}
                        src={item}
                      />
                  </SwiperSlide>
                 ))
              }
      </Swiper>
       </div>
      </div>
    </>
  );
};

export default ProductZoom;