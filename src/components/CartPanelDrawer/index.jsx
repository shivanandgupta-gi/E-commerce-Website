import Button from '@mui/material/Button';
import React from 'react'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';



export default function CartPanelDrawer() {
  return (
    <>
        <div className="  w-full max-h-[300px]  overflow-x-hidden py-3 px-4">
            <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-3 pt-3">
                <div className="img w-[25%]  overflow-hidden h-[80px] rounded-md">
                    <Link to="/product/7376" className='block group'>
                <img
                    src="https://m.media-amazon.com/images/I/41y2p+6C5vL._SX300_SY300_.jpg"
                    className="w-full  group-hover:scale-105"
                    alt="Cart Item"
                />
                </Link>
                </div>
                <div className="info w-[75%] pr-5 relative">
                <h4 className="text-[16px] font-[500]"><Link to="/product/7376" className='link transition-all'>Samsung 80 cm (32 inches) HD Smart LED TV </Link></h4>
                <p className="flex items-center gap-5 mt-2 mb-2">
                    <span className='text-[rgba(0,0,0,0.8)]'>
                        Qty : <span className='text-[rgba(0,0,0,0.8)]'>2</span>
                    </span>
                    <span className="text-primary font-bold">Price : $25</span>
                    </p>
                    <MdDelete className="absolute top-[3px] right-[0px] cursor-pointer text-[20px] link transition-all" />
                </div>
            </div>
            <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-3 pt-3">
                <div className="img w-[25%]  overflow-hidden h-[80px] rounded-md">
                    <Link to="/product/7376" className='block group'>
                <img
                    src="https://m.media-amazon.com/images/I/41y2p+6C5vL._SX300_SY300_.jpg"
                    className="w-full  group-hover:scale-105"
                    alt="Cart Item"
                />
                </Link>
                </div>
                <div className="info w-[75%] pr-5 relative">
                <h4 className="text-[16px] font-[500]"><Link to="/product/7376" className='link transition-all'>Samsung 80 cm (32 inches) HD Smart LED TV </Link></h4>
                <p className="flex items-center gap-5 mt-2 mb-2">
                    <span className='text-[rgba(0,0,0,0.8)]'>
                        Qty : <span className='text-[rgba(0,0,0,0.8)]'>2</span>
                    </span>
                    <span className="text-primary font-bold">Price : $25</span>
                    </p>
                    <MdDelete className="absolute top-[3px] right-[0px] cursor-pointer text-[20px] link transition-all" />
                </div>
            </div>
            <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-3 pt-3">
                <div className="img w-[25%]  overflow-hidden h-[80px] rounded-md">
                    <Link to="/product/7376" className='block group'>
                <img
                    src="https://m.media-amazon.com/images/I/41y2p+6C5vL._SX300_SY300_.jpg"
                    className="w-full  group-hover:scale-105"
                    alt="Cart Item"
                />
                </Link>
                </div>
                <div className="info w-[75%] pr-5 relative">
                <h4 className="text-[16px] font-[500]"><Link to="/product/7376" className='link transition-all'>Samsung 80 cm (32 inches) HD Smart LED TV </Link></h4>
                <p className="flex items-center gap-5 mt-2 mb-2">
                    <span className='text-[rgba(0,0,0,0.8)]'>
                        Qty : <span className='text-[rgba(0,0,0,0.8)]'>2</span>
                    </span>
                    <span className="text-primary font-bold">Price : $25</span>
                    </p>
                    <MdDelete className="absolute top-[3px] right-[0px] cursor-pointer text-[20px] link transition-all" />
                </div>
            </div>
            <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-3 pt-3">
                <div className="img w-[25%]  overflow-hidden h-[80px] rounded-md">
                    <Link to="/product/7376" className='block group'>
                <img
                    src="https://m.media-amazon.com/images/I/41y2p+6C5vL._SX300_SY300_.jpg"
                    className="w-full  group-hover:scale-105"
                    alt="Cart Item"
                />
                </Link>
                </div>
                <div className="info w-[75%] pr-5 relative">
                <h4 className="text-[16px] font-[500]"><Link to="/product/7376" className='link transition-all'>Samsung 80 cm (32 inches) HD Smart LED TV </Link></h4>
                <p className="flex items-center gap-5 mt-2 mb-2">
                    <span className='text-[rgba(0,0,0,0.8)]'>
                        Qty : <span className='text-[rgba(0,0,0,0.8)]'>2</span>
                    </span>
                    <span className="text-primary font-bold">Price : $25</span>
                    </p>
                    <MdDelete className="absolute top-[3px] right-[0px] cursor-pointer text-[20px] link transition-all" />
                </div>
            </div>
            
        </div>
        <br/>
        {/* for price on drawer */}
        <div className='bottomSec absolute bottom-[10px] left-[10px] w-full overflow-hidden pr-5'>
        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
            <div className="flex items-center justify-between w-full">
                <span className="text-[14px] font-[600]">1 item</span>
                <span className="text-primary font-bold">$86.00</span>
            </div>
            <div className="flex items-center justify-between w-full">
                <span className="text-[14px] font-[600]">Shipping</span>
                <span className="text-primary font-bold">$8.00</span>
            </div>
        </div>
        <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
            
            <div className="flex items-center justify-between w-full">
                <span className="text-[14px] font-[600]">Total (tax excl.)</span>
                <span className="text-primary font-bold">$8.00</span>
            </div>
            <div className="flex items-center justify-between w-full">
                <span className="text-[14px] font-[600]">Total (tax incl.)</span>
                <span className="text-primary font-bold">$8.00</span>
            </div>

            <br/>

            <div className="flex items-center justify-between w-full gap-5">
                <Link to="/cart" className='w-[50%] d-block'><Button className="btn-org btn-lg w-full !h-[40px]">View Cart</Button></Link>
                <Link to="/pay" className='w-[50%] d-block'><Button className="btn-org btn-lg w-full !h-[40px]">Pay Now</Button></Link>
            </div>

        </div>
        </div>

    </>
  )
}
