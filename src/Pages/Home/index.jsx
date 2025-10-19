import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import HomeSlider from '../../components/HomeSlider';
import CatSlider from '../../components/CatSlider';
import HomeCatgiorySlider from '../../components/CatSlider';
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from '../../components/AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../../components/ProductSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import BlogItem from '../../components/BlogItem';
import HomeSliderV2 from '../../components/HomeSliderV2';
import BannerBoxV2 from '../../components/bannerBoxV2';
import { getData } from '../../../utils/api';
import { MyContext } from '../../App';
import ProductLoadingSkelaton from '../../components/ProductSkelatonLoading';
import AdBannerSliderV1 from '../../components/AdsBannerSlider/AdsBannerSliderV1';

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //backend 
  const [slideData, setSlideData] = useState([]); //to store the slide image
  const [popularProductData, setPopularProductData] = useState([]) //to store product data
  const [allProductData, setAllProductData] = useState([])
  const [allFeaturedProduct, setAllFeaturedProductData] = useState([])
  const [bannerV1Data, setBannerV1Data] = useState([])
  const [blogData, setBlogData] = useState([]);
  //this for home slider make dynamic
  useEffect(() => {
    window.scrollTo(0,0);
    getData("/api/slide/getSlide").then((res) => { //this for homeBannerSlider get
      if (res.error === false) {
        setSlideData(res.data)
      }
    });
    getData("/api/product/getAllProduct").then((res) => { //this for fetch all product and shown in latest 
      setAllProductData(res.products);
    })
    getData("/api/product/getAllFeaturedProduct").then((res) => { //this for fetch all featured product and shown   featured product 
      setAllFeaturedProductData(res.products);
    })
    getData("/api/banner/getbanner").then((res) => { //this for the bannerV1 means mini ads side of 50% banner clickable ads
      if (res.error === false) {
        setBannerV1Data(res.banner);
      }
    })
    getData("/api/blog/getBlog").then((res) => { //this for the blog data get
      if (res.error === false) {
        setBlogData(res.blogs);
      }
    })
  }, [])

  const context = useContext(MyContext);
  //this function filter the product according to category in fashion all fashion product shown only
  const filterByCategory = (id) => {
    setPopularProductData([]);
    getData(`/api/product/getAllProductByCategory/${id}`).then((res) => { //this for the product get 
      if (res.error === false) {
        setPopularProductData(res.products);
      }
    });
  }

  useEffect(() => {//same as filterbycategory work  in popular product work
    getData(`/api/product/getAllProductByCategory/${context.catData[0]}`).then((res) => { //this for the product get
      setPopularProductData([])
      if (res.error === false) {
        setPopularProductData(res.products);
      }
    });
  }, [context.catData])//dependency is context.getdata

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      {/* it is for home slider */}
      <HomeSlider data={slideData} />

      {/* below home slider category slider */}
      {/* catData is called in main page and then only we pass as props */}
      <HomeCatgiorySlider data={context.catData} />


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
                {
                  //make the name dynamic by category data in app.jsx due to shown category
                  //like item fashion click then shown all fashion releated product
                  context.catData.map((item, index) => (
                    <Tab label={item.name} onClick={() => filterByCategory(item._id)} />
                  ))
                }
              </Tabs>
            </div>
          </div>
          {/* using skelation of css used like loading data */}
          {
            popularProductData.length === 0 &&
            <ProductLoadingSkelaton />
          }
          {/* this is for the product slider in slide component */}
          {
            popularProductData.length !== 0 &&
            <ProductsSlider items={6} data={popularProductData} />
          }
        </div>
      </section>

      {/* this is for the silder one 50% and two right in 50% and 50% from top and bottom */}
      <section className='py-6 '>
        <div className="px-8 flex  gap-5">
          <div className="part1 w-[70%]">
            {
              allProductData.length !== 0 && <HomeSliderV2 data={allProductData} />
            }
          </div>
          <div className='part2 w-[30%] gap-5 flex items-center justify-between flex-col '>
            {
              bannerV1Data.length !== 0 && bannerV1Data.slice(0, 2).map((item, index) => (
                <BannerBoxV2 key={index} info={item.alignInfo} image={item.images[0]} link={'/'} alt="images" item={item}/>
              ))
            }
          </div>
        </div>

      </section>


      {/* this is for free shipping banner and adbanner */}
      <section className='py-4 bg-white pt-2 '>
        {/* free shiping section */}
        <div className="px-6">
          <div className='freeShipping  py-3 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7 w-[80%] m-auto'>
            <div className='col1 flex items-center gap-4'>
              <TbTruckDelivery className='text-[50px]' />
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
          {
            bannerV1Data.length !== 0 && <AdBannerSliderV1 items={4} data={bannerV1Data} />
          }
        </div>

      </section>


      {/* for latest product banner  */}
      <section className="py-5 pt-0 bg-white">
        <div className="px-7">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          {
            allProductData.length === 0 && <ProductLoadingSkelaton />
          }
          {
            allProductData.length !== 0 &&
            <ProductsSlider items={6} data={allProductData} />
          }
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="px-7">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>
          {
            allFeaturedProduct.length === 0 && <ProductLoadingSkelaton />
          }
          {
            allFeaturedProduct.length !== 0 && //all product are shown here
            <ProductsSlider items={6} data={allFeaturedProduct} />
          }
          <AdsBannerSlider items={3} />
        </div>
      </section>

      {/* this is for blogsection */}
      {
        //if blog present then show the data
        blogData.length > 0 &&
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
              {
                //this for printing all the blog
                blogData.map((item, index) => (
                  <SwiperSlide className="px-2" key={index}>
                    <BlogItem blog={item}/>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </section>
      }

    </>
  )
}

export default Home;