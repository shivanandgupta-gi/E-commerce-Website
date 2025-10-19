import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = ({ data: raw }) => {
  const slides = Array.isArray(raw) ? raw : (raw?.data ?? []);
  const count = slides.length;

  const enableLoop = count > 1;         // loop only if > 1
  const enableAutoplay = count > 1;     // autoplay only if > 1

  if (count === 0) return null; // or show placeholder

  return (
    <div className="homdeSlider py-5 relative z-0">
      <div className="px-10">
        <Swiper
          loop={enableLoop}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={ enableAutoplay ? { delay: 2500, disableOnInteraction: false } : false }
          className="sliderHome"
        >
          {slides.map((slide,index) => (
            <SwiperSlide key={index}>
              <div className="item rounded-[30px] overflow-hidden">
                <img src={slide.images?.[0]} alt="Banner slider" className="w-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
