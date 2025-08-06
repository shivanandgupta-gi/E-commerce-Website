// this is for the view how many item add in cart 
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoBagCheck } from "react-icons/io5";
import Button from '@mui/material/Button';
import CartItem from './CartItem';

export default function Cart() {

    


  return (
    <>
        <section className="section py-5 pb-10">
            <div className="px-9 w-[80%] max-w-[80%] flex gap-5 ">
                {/* for product adding list */}
                <div className="leftPart w-[70%] ml-[150px] bg-white">
                <div className='py-2 px-3 font-bold border-b border-[rgba(0,0,0,0.1)]'>
                    <h2>Your Cart</h2>
                </div>
                <div className='py-2 px-3 !mb-2'>
                    <p className="mt-1  ">
                    There are <span className="font-bold text-primary">2</span> products in your cart
                </p>
                </div>
                
                <div className="shadow-md rounded-md  bg-white">
                    <CartItem size="black"/>
                    
                </div>
                </div>

                {/* for pricing  */}
                  <div className="rightPart w-[30%]">
                    <div className="shadow-md rounded-md bg-white p-5 ">
                        <h3 className="pb-3 font-bold ">Cart Totals</h3>
                        <hr />
                        <p className="flex items-center justify-between pb-1">
                        <span className="text-[14px] font-[500]">Subtotal</span>
                        <span className="text-primary font-bold">79,999.00</span>
                        </p>
                        <p className="flex items-center justify-between pb-1">
                        <span className="text-[14px] font-[500]">Shipping</span>
                        <span className=" font-bold">Free</span>
                        </p>
                        <p className="flex items-center justify-between pb-1">
                        <span className="text-[14px] font-[500]">Estimated for </span>
                        <span className=" font-bold">India</span>
                        </p>
                        <p className="flex items-center justify-between pb-2">
                        <span className="text-[14px] font-[500]">Total</span>
                        <span className="text-primary font-bold">79,999.00</span>
                        </p>
                        <Button className='btn-org btn-md mt-3 w-full flex gap-2'><IoBagCheck className='text-[16px]'/>Pay</Button>
                    </div>
                    </div>
            </div>
            </section>
    </>
  )
}
