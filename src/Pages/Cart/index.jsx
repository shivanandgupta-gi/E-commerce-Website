// this is for the view how many item add in cart 
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoBagCheck } from "react-icons/io5";
import Button from '@mui/material/Button';
import CartItem from './CartItem';
import { MyContext } from '../../App';

export default function Cart() {

  //backend start here
  const context = useContext(MyContext);

  return (
    <>
      {
        context.cartData.length === 0 ?
          <>
            <div className="w-full h-[550px] flex items-center justify-center flex-col gap-3">
              <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" className='w-[200px]' />
              <h3 className='text-[20px] font-[700]'>Your Cart is empty</h3>
              <p className='text-[15px] font-[500] text-center'>Add items in Cart.</p>
              <Link to="/"><Button className='btn-org btn-sm'>
                Continue Shoping</Button></Link>
            </div>
          </>
          :
          <section className="section py-5 pb-10">
            <div className="px-9 w-[80%] max-w-[80%] flex gap-5 ">
              {/* for product adding list */}
              <div className="leftPart w-[70%] ml-[150px] bg-white">
                <div className='py-2 px-3 font-bold border-b border-[rgba(0,0,0,0.1)]'>
                  <h2>Your Cart</h2>
                </div>
                <div className='py-2 px-3 !mb-2'>
                  <p className="mt-1  ">
                    There are <span className="font-bold text-primary">{context.cartData.length}</span> products in your cart
                  </p>
                </div>
                {
                  context.cartData.length !== 0 && context.cartData.map((item, index) => (
                    <div className="shadow-md rounded-md  bg-white">
                      <CartItem size="black" qty={item.quantity} data={item} key={index} />
                    </div>
                  ))
                }
              </div>

              {/* for pricing  */}
              <div className="rightPart w-[30%]">
                <div className="shadow-md rounded-md bg-white p-5 ">
                  <h3 className="pb-3 font-bold ">Cart Totals</h3>
                  <hr />
                  <p className="flex items-center justify-between pb-1">
                    <span className="text-[14px] font-[500]">Subtotal</span>
                    <span className="text-primary font-bold">&#8377;{
                      (context.cartData.length !== 0 ?
                        context.cartData.map(item => parseInt(item.price) * parseInt(item.quantity))
                          .reduce((total, value) => total + value, 0)
                        :
                        0)
                    }</span>
                  </p>
                  <p className="flex items-center justify-between pb-1">
                    <span className="text-[14px] font-[500]">Shipping Charge</span>
                    <span className=" font-bold">&#8377;99</span>
                  </p>
                  <p className="flex items-center justify-between pb-1">
                    <span className="text-[14px] font-[500]">Only Delivery in  </span>
                    <span className=" font-bold">India</span>
                  </p>
                  <p className="flex items-center justify-between pb-2">
                    <span className="text-[14px] font-[500]">Total</span>
                    <span className="text-primary font-bold">&#8377;
                      {
                        (context.cartData.length !== 0 ?
                          context.cartData.map(item => parseInt(item.price) * parseInt(item.quantity))
                            .reduce((total, value) => total + value, 0) + 99
                          :
                          0)
                      }
                    </span>
                  </p>
                  <Link to="/pay">
                  <Button className='btn-org btn-md mt-3 w-full flex gap-2'><IoBagCheck className='text-[16px]' />Pay</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
      }
    </>
  )
}
