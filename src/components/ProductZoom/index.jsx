import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
import './index.css';

 const ProductZoom = () => {
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
            className="zoomProductSlider h-[500px] overflow-hidden'"
            >
            <SwiperSlide> 
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-1' : 'opacity-30'}`} onClick={()=>goto(0)}>
                <img src="https://m.media-amazon.com/images/I/41qjFMIltsL._SX300_SY300_QL70_FMwebp_.jpg"
                className="w-full transition-all group-hover:scale-110"></img>
              </div>
          </SwiperSlide>
          <SwiperSlide> 
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ? 'opacity-1' : 'opacity-30'}`} onClick={()=>goto(1)}>
                <img src="https://m.media-amazon.com/images/I/61TPStS8ItL._SX679_.jpg"
                className="w-full transition-all group-hover:scale-110"></img>
              </div>
          </SwiperSlide>
          <SwiperSlide> 
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-1' : 'opacity-30'}`} onClick={()=>goto(2)}>
                <img src="https://m.media-amazon.com/images/I/61CvqK4Z6xL._SX679_.jpg"
                className="w-full transition-all group-hover:scale-110"></img>
              </div>
          </SwiperSlide>
          <SwiperSlide> 
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 3 ? 'opacity-1' : 'opacity-30'}`} onClick={()=>goto(3)}>
                <img src="https://m.media-amazon.com/images/I/61VVY2RduUL._SX679_.jpg"
                className="w-full transition-all group-hover:scale-110"></img>
              </div>
          </SwiperSlide>
          <SwiperSlide> 
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 4 ? 'opacity-1' : 'opacity-30'}`} onClick={()=>goto(4)}>
                <img src="https://m.media-amazon.com/images/I/715M4FuPg8L._SX679_.jpg"
                className="w-full transition-all group-hover:scale-110"></img>
              </div>
          </SwiperSlide>
          <SwiperSlide> 
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 5 ? 'opacity-1' : 'opacity-30'}`} onClick={()=>goto(5)}>
                <img src="https://m.media-amazon.com/images/I/61aWjpVixfL._SL1200_.jpg"
                className="w-full transition-all group-hover:scale-110"></img>
              </div>
          </SwiperSlide>
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
            <SwiperSlide>
              <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={"https://m.media-amazon.com/images/I/514rF5FWrsL._SX679_.jpg"}
                />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={"https://m.media-amazon.com/images/I/61TPStS8ItL._SX679_.jpg"}
                />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={"https://m.media-amazon.com/images/I/61CvqK4Z6xL._SX679_.jpg"}
                />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={"https://m.media-amazon.com/images/I/61VVY2RduUL._SX679_.jpg"}
                />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={"https://m.media-amazon.com/images/I/715M4FuPg8L._SX679_.jpg"}
                />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={"https://m.media-amazon.com/images/I/514rF5FWrsL._SX679_.jpg"}
                />
            </SwiperSlide>
            
      </Swiper>
       </div>

      
      </div>
    </>
  );
};

export default ProductZoom;