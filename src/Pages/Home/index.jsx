import React from 'react'
import { useState } from 'react';
import HomeSlider from '../../components/HomeSlider';
import CatSlider from '../../components/CatSlider';
import HomeCatgiorySlider from '../../components/CatSlider';
import Tailer from '../../components/Tailer';
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from '../../components/AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../../components/ProductSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import BlogItem from '../../components/BlogItem';
import Footer from '../../components/Footer';
import HomeSliderV2 from '../../components/HomeSliderV2';

const Home=()=> {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    
  return (
    <>
    {/* it is for home slider */}
    <HomeSlider/>

    {/* this is for the silder one 50% and two right in 50% and 50% from top and bottom */}
    <section className='py-6 '>
      <div className="container flex items-center">
        <div className="part1 w-[75%]">
          <HomeSliderV2/>
        </div>
      </div>
    </section>

    {/* below home slider category slider */}

    <HomeCatgiorySlider/>

    
    {/* for category item shown like fashion, jwellery */}
    <section className='bg-white py-8 '>
      <div className='continer-fluid px-6'>
        <div className='flex items-center justify-between'>
          <div className='leftSec'>
            <h2 className='text-[20px] font-[600]'>Popular Product</h2>
            <p className='text-[15px] font-[400]'>Do not miss the current offers until the end of Months.</p>
          </div>
          <div className='righSec w-[60%]'>
            <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Fashion" />
            <Tab label="Electronics" />
            <Tab label="Bags" />
            <Tab label="Footwear" />
            <Tab label="Croceries" />
            <Tab label="Beauty" />
            <Tab label="Wellness" />
            <Tab label="Croceries" />
            <Tab label="Beauty" />
            <Tab label="Wellness" />
          </Tabs>
          </div>
        </div>


        {/* this is for the product slider in slide component */}
        <ProductsSlider items={6}/>
      </div>
    </section>




    {/* this is for free shipping banner and adbanner */}
    <section className='py-4 bg-white pt-2 '>
      {/* free shiping section */}
      <div className="px-6">
        <div className='freeShipping  py-3 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7 w-[80%] m-auto'>
          <div className='col1 flex items-center gap-4'>
            <TbTruckDelivery className='text-[50px]'/>
            <span className='text-[20px] font-[600] uppercase'>Free Shipping</span>
          </div>
          <div className='col2'>
              <p class="mb-0 font-[500]">
                Free Delivery Now On Your First Order and over 1000
              </p>
              </div>
              <p class="font-bold text-[25px]">
                - Only 1000 rs.
              </p>

        </div>

        <AdsBannerSlider items={4}/>
      </div>
      
    </section>


    {/* for latest product banner  */}
    <section className="py-5 pt-0 bg-white">
      <div className="px-7">
        <h2 className="text-[20px] font-[600]">Latest Products</h2>
        <ProductsSlider items={6} />

        <AdsBannerSlider items={3}/>
      </div>
    </section>

    <section className="py-5 pt-0 bg-white">
      <div className="px-7">
        <h2 className="text-[20px] font-[600]">Featured Products</h2>
        <ProductsSlider items={6} />

        <AdsBannerSlider items={3}/>
      </div>
    </section>

      {/* this is for blogsection */}
    <section className="py-5 pt-0 px-7  bg-white blogSection">
  <div className="py-4">
    <h2 className="text-[20px] font-[600] mb-2 pb-3">From The Blog</h2>
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      className="blogSlider"
    >
      <SwiperSlide className="px-2">
        <BlogItem/>
      </SwiperSlide>
      <SwiperSlide className="px-2">
        <BlogItem/>
      </SwiperSlide>
      <SwiperSlide className="px-2">
        <BlogItem/>
      </SwiperSlide>
      <SwiperSlide className="px-2">
        <BlogItem/>
      </SwiperSlide>
      <SwiperSlide className="px-2">
        <BlogItem/>
      </SwiperSlide>
    </Swiper>
  </div>
</section>

      {/* this is for footer like shiping secure payment etc */}
      <Footer/>

    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    <br/> 
    </>
  ) 
}

export default Home;