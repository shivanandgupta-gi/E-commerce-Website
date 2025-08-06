import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";


const MyCartItems=(props)=> {

   
           

  return (
    <div className="cartItem w-full  p-3 flex items-center gap-4 pb-4 border-b border-[rgba(0,0,0,0.1)]">
                    <div className="img w-[15%] rounded-md overflow-hidden">
                        <Link to="/product/7845" className='group'>
                        <img src="https://m.media-amazon.com/images/I/41CDymsLqvL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product" className="w-full group-hover:scale-110 transition-all" />
                        </Link>
                    </div>
                    <div className="info w-[85%] relative">
                        <IoClose className='cursor-pointerc absolute !top-[0px] right-[0px] text-[22px] link transition-all' ></IoClose>
                        <span className="text-[13px]">Samsung </span>
                        <h3 className="text-[15px]">
                            <Link to="/product/12345" className="link">
                            Samsung Galaxy S24 Ultra 5G AI Smartphone with Galaxy AI
                            </Link>
                        </h3>
                            

                         <div className='flex items-center gap-4 mt-2 mb-2'>
                            
                            <span className='oldPrice text-black font-[600] text-[14px]'>Rs.79,999</span>
                            <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>Rs.1,34,999</span>
                            <span className='oldPrice text-primary font-[600] text-[14px]'>- 41% OFF</span>
                        </div>
                        
                        {/* button add to cart */}
                        <Button className='btn-org btn-sm'>Add to Cart</Button>
                        </div>
                    </div>
  )
};

export default MyCartItems;
