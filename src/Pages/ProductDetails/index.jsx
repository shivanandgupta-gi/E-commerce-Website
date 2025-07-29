import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import QuantatyBox from '../../components/QuantityBox';
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";


const ProductDetails=()=> {

    const [productActionIndex, setProductActionIndex]= useState(null);

  return (
    <>
    <div className='py-6 '>
        <div className='px-6 py-2'>
            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/" className='hover:text-[#ff5252] !text-[14px]'>
                    Home
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                    className='hover:text-[#ff5252] !text-[14px]'
                    >
                    Fashion
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    className='hover:text-[#ff5252] !text-[14px] '
                    >
                    Smartphones
                    </Link>
                </Breadcrumbs>
            </div>
        </div>
    </div>
    <section className='bg-white py-5'>
        <div className='px-7 flex gap-8 items-center'>
            <div className='productZoomContainer w-[40%]' >
                <ProductZoom/>
            </div>
            <div className="productContent w-[60%]">
                <h1 className="text-[22px] font-[600] mb-2">Acer Super ZX 5G (Carbon Black, 6GB RAM, 128GB Storage) | 120 Hz FHD+ Display | 5000 mAh Ultra-Thin Battery | Dimensity 6300 5G Processor | Sony 64MP AI Camera</h1>
                <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-[13px]">Brands:</span>
                    <span className="font-[500] text-black opacity-75">Acer </span>
                    <Rating name="size-medium" defaultValue={4} readOnly />
                    <span className="text-[13px] cursor-pointer">Review (5)</span>
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    <span className='oldPrice line-through text-gray-500 text-[16px] font-[500]'>Rs.5000</span>
                    <span className='oldPrice text-primary font-[600] text-[18px]'>Rs.2000</span>
                    <span className='text-[14px]'>Available in Stock : <span className='text-green-600 text-[14px] font-bold'>150 Items</span></span>
                </div>
                {/* description adding */}
                      <h3 className='mt-5 mb-2 font-bold text-[17px]'>About This Product</h3>
                <ul className='mb-5 text-[13px]' style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>
                        PERFORMANCE THAT POWERS THE FUTURE: Equipped with the MediaTek Dimensity 6300 5G chipset, the Acer Super ZX delivers effortless multitasking and blazing-fast speeds. With an AnTuTu score of 414 K+, and next-gen 5G capabilities, this device is built for high performance.
                    </li>
                    <li>
                        FAST CHARGING, LONG-LASTING POWER: Stay ahead with 50% charge in just 35 minutes. The robust battery ensures all-day power, keeping you connected, entertained, and always ready to go.
                    </li>
                    <li>
                        PRO-LEVEL CAMERA EXPERIENCE: Capture the world in stunning detail with the Sony 64MP AI Camera. From crisp daylight shots to low-light brilliance, AI Photo Enhancer, Night Mode, and Portrait Filters ensure every shot is Instagram-worthy.
                    </li>
                </ul>

                {/* size adding  */}
                    <div className="flex items-center gap-3">
                        <span className="text-[16px]">Colour:</span>
                        <div className="flex items-center gap-1 actions">
                            <Button className={`${productActionIndex === 0 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(0)}>Cosmic Green</Button>
                            <Button className={`${productActionIndex === 1 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(1)}>Black</Button>
                            <Button className={`${productActionIndex === 2 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(2)}>Red</Button>
                            <Button className={`${productActionIndex === 3 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(3)}>Luner Blue</Button>
                        </div>
                    </div>

                {/* quantity adding */}
               <p className="text-[14px] text-gray-600 mt-4">
                    Free Shipping (Est. Delivery Time 2–3 Days)
                    </p>

                    <div className="flex items-center  mb-2 mt-3 gap-4 flex-wrap">
                    <div className="qtyBoxWrapper w-[70px]">
                        <QuantatyBox />
                    </div>
                    <Button className="btn-org flex items-center gap-2">
                        <BsCart4 className="text-[22px]" />
                        Add to Cart
                    </Button>
                    </div>

                    {/* this is for the wishlist and comapair button */}
                    <div className="flex items-center gap-4 mt-5">
                        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500] hover:text-[#dc4646]">
                            <CiHeart className="text-[18px]" />
                            Add to Wishlist
                        </span>
                        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500] hover:text-[#dc4646]">
                            <IoIosGitCompare className="text-[18px]" />
                            Add to Compare
                        </span>
                    </div>


                    {/* for product discripstion and detail tab */}

            </div>
        </div>

        {/* this is for the product detail and descrisption tab */}
        <div className="px-7 pt-10">
            <div className="flex items-center gap-8 mb-5">
                <span className="link text-[17px] cursor-pointer font-[500] ">Description</span>
                <span className="link text-[17px] cursor-pointer font-[500]">Product Details</span>
                <span className="link text-[17px] cursor-pointer font-[500]">Reviews (5)</span>
            </div>
            <div className="shadow-md w-full py-5 px-8 rounded-md">
                  <ul className='mb-5 text-[15px] list-disc pl-5 space-y-3' style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>
                        <h5 className='! font-[600] !mb-2 '>PERFORMANCE THAT POWERS THE FUTURE:</h5><p className='mb-3'> Equipped with the MediaTek Dimensity 6300 5G chipset, the Acer Super ZX delivers effortless multitasking and blazing-fast speeds. With an AnTuTu score of 414 K+, and next-gen 5G capabilities, this device is built for high performance.</p>
                    </li>
                    <li>
                        <h4 className='!font-[600] !mb-2 '>FAST CHARGING, LONG-LASTING POWER:</h4><p className='mb-3'>  Stay ahead with 50% charge in just 35 minutes. The robust battery ensures all-day power, keeping you connected, entertained, and always ready to go.</p> 
                    </li>
                    <li>
                        <h4 className='! font-[600] !mb-2'>PRO-LEVEL CAMERA EXPERIENCE:</h4> <p className='mb-3'> Capture the world in stunning detail with the Sony 64MP AI Camera. From crisp daylight shots to low-light brilliance, AI Photo Enhancer, Night Mode, and Portrait Filters ensure every shot is Instagram-worthy.</p> 
                    </li>
                    <li>
                        <h4 className='! font-[600] !mb-2'>ULTRA-SMOOTH VISUALS:</h4>  <p className='mb-3'>The FHD+ 120Hz display brings every frame to life with vibrant colors and smooth motion. Whether you're gaming, streaming, or scrolling, experience ultra-fluid performance with L1 certification for Netflix & Prime Video, ensuring you watch in the highest quality.</p> 
                    </li>
                    <li>
                        <h4 className='! font-[600] !mb-2'>5G CONNECTIVITY & PREMIUM ENTERTAINMENT:</h4> <p className='mb-3'>Designed for the new era of connectivity, the Acer Super ZX supports Dual SIM 5G for seamless performance. L1 Certification guarantees premium HDR streaming, so your favorite content looks as good as it should.</p> 
                    </li>
                </ul>
            </div>
        </div>

    </section>
    </>
  )
}

export default ProductDetails;