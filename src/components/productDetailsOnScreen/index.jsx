import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import Rating from '@mui/material/Rating';
import QuantatyBox from '../QuantityBox';


const ProductDetailsOnScreen=()=> {
    const [productActionIndex, setProductActionIndex]= useState(null);
  return (
    <>
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
                        <QuantatyBox/>
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
    </>
  )
};

export default ProductDetailsOnScreen;

