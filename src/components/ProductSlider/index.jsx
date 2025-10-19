// this is for the product in the popular Product slider


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
import ProductItems from '../ProductItems';

const ProductsSlider = (props) => {
    return (
        <div className="productsSlider py-3">
            <Swiper
                // install Swiper modules
                modules={[Navigation]}
                navigation={true}
                slidesPerView={props.items}
                spaceBetween={10}
                grabCursor={true}
                allowTouchMove={true}
                centeredSlides={false} // ✅ prevents centering
                className="mySwiper"
            >
                {
                    props.data && props.data.length > 0 &&
                        props.data.map((item, index) => (
                        <SwiperSlide key={ index}>
                            <ProductItems item={item} />
                        </SwiperSlide>
                        ))
                }
            </Swiper>

        </div>
    );
};

export default ProductsSlider;
