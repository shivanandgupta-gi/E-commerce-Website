import React from 'react';
import { IoBagCheck } from "react-icons/io5";
import Button from '@mui/material/Button';
import MyCartItem from './cartItems';
import AccountSideBar from '../../components/AccountSideBar';

export default function MyList() {
  return (
    <section className="py-10 w-full min-h-screen">
  <div className="flex gap-5 px-10 ml-8 items-start">
    {/* Sidebar */}
    <div className="w-[20%] col">
      <AccountSideBar />
    </div>

        {/* Main Cart Section */}
        <div className="w-[80%] flex justify-start !ml-[20px]">
          <div className="bg-white w-full max-w-[600px] shadow-md rounded-md">
            <div className='py-5 px-3 font-bold border-b border-[rgba(0,0,0,0.1)]'>
              <h2>My List</h2>
            </div>
            <div className='py-2 px-3 !mb-2'>
             <p className="mt-1  ">
                    There are <span className="font-bold text-primary">2</span> products in your cart
                </p>
            </div>
             <div className="shadow-md rounded-md  bg-white">
              <MyCartItem />
              <MyCartItem />
              <MyCartItem />
              <MyCartItem />
              <MyCartItem />
              <MyCartItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
