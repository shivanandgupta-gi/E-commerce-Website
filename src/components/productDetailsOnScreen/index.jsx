import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import Rating from '@mui/material/Rating';
import QuantatyBox from '../QuantityBox';


const ProductDetailsOnScreen=(props)=> {
    console.log(props)
    const [productActionIndex, setProductActionIndex]= useState(null);
  return (
    <>
      <h1 className="text-[22px] font-[600] mb-2">{props.data.name}</h1>
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-1">
                        <span className="text-gray-500 text-[13px]">Brands:</span>
                        <span className="font-[500] text-black opacity-75 text-[16px]">{props.data.brand}</span>
                    </div>
                    <Rating name="size-medium" defaultValue={props.data.rating} readOnly />
                    <span className="text-[13px] cursor-pointer" onClick={props.gotoReviews}>Review ({props.reviewsCount})</span>
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    <span className='oldPrice line-through text-gray-500 text-[16px] font-[500]'>&#8377;{props.data.oldPrice}</span>
                    <span className='oldPrice text-primary font-[600] text-[18px]'>&#8377;{props.data.price}</span>
                    <span className='text-[14px]'>Available in Stock : <span className='text-green-600 text-[14px] font-bold'>{props.data.countInStock} Items</span></span>
                </div>
                {/* description adding */}
                      <h3 className='mt-5 mb-2 font-bold text-[17px]'>About This Product</h3>
                      <p className='mt-3 pr-10 mb-5'>
                         {props.data.description}
                      </p>
                {/* ram adding dynamic  */}
                {
                    props.data?.productRam?.length > 0 &&  
                        <div className="flex items-center gap-3">
                            <span className="text-[16px]">RAM:</span>
                            <div className="flex items-center gap-1 actions">
                                {
                                    props.data.productRam.map((item,index)=>(
                                        <Button className={`${productActionIndex === index ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(index)}>{item}</Button>
                                    ))
                                }
                                </div>
                        </div>
                }
                 {/* size adding dynamic  */}
                {
                    props.data?.size?.length > 0 &&  
                        <div className="flex items-center gap-3">
                            <span className="text-[16px]">Size:</span>
                            <div className="flex items-center gap-1 actions">
                                {
                                    props.data.size.map((item,index)=>(
                                        <Button className={`${productActionIndex === index ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(index)}>{item}</Button>
                                    ))
                                }
                                </div>
                        </div>
                }
                 {/* weight adding dynamic  */}
                {
                    props.data?.productWeight?.length > 0 &&  
                        <div className="flex items-center gap-3">
                            <span className="text-[16px]">Size:</span>
                            <div className="flex items-center gap-1 actions">
                                {
                                    props.data.productWeight.map((item,index)=>(
                                        <Button className={`${productActionIndex === index ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(index)}>{item}</Button>
                                    ))
                                }
                                </div>
                        </div>
                }
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

