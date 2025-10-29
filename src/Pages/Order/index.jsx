import React, { useContext, useEffect, useState } from 'react'
import AccountSideBar from '../../components/AccountSideBar'
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Badge from '../../components/Badge';
import { FaAngleUp } from "react-icons/fa6";
import { getData } from '../../../utils/api';
import { MyContext } from '../../App';

//this is for tehe order view like pending succes etc . on my account page order button

export default function Order() {
    const [isOpenOrderProduct, setisOpenOrderProduct]=useState(null);
    const isShowOrderProduct=(idx)=>{
        if(isOpenOrderProduct===idx){
            setisOpenOrderProduct(null);
        }else
        setisOpenOrderProduct(idx);
    }
    const context=useContext(MyContext);

    //backend start here
    const [order,setOrder]=useState([]);
    useEffect(()=>{
        getData("/api/order/get").then((res)=>{
            if(res.error == false){
                setOrder(res?.order);
            }
        })
    },[]);

  return (
 <section className="py-10 w-full">
  <div className="flex gap-5 px-10 ml-8 items-start">
    <div className="col1 w-[20%]">
      <AccountSideBar />
    </div>
    <div className="col2 w-[80%]">
      <div className="shadow-md rounded-md bg-white">
        <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)]">
          <h2>My Orders</h2>
          <p className="mt-0 mb-0">
            There are <span className="font-bold text-primary">{order?.length}</span> orders
          </p>

           <div className="relative overflow-x-auto shadow-md w-full py-5 px-8 rounded-md mt-5">
                <table className="w-full text-sm text-left text-gray-700 bg-white">
                    <thead className="text-xs uppercase bg-gray-100 text-gray-700">
                    <tr>
                        <th className="px-6 py-3">
                            &nbsp;
                        </th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Order Id</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Payment Id</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Name</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Phone Number</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Address</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">PinCode</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Total Amount</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Email</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">User Id</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Order Status</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            //order dynamic
                            order?.length !== 0 && order?.map((item,index)=>(
                                <>
                                 <tr className="border-b dark:border-gray-700   bg-white">
                            <td className="px-6 py-4 font-[500]"><Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1] " onClick={()=>{isShowOrderProduct(index)}}>
                                {
                                    isOpenOrderProduct===index? 
                                    <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]"  />
                                    :
                                    <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]"  />
                                }
                            </Button></td>
                            <td className="px-6 py-4 font-[500]">
                                <span className="text-primary block w-[270px]">{item.orderId}
                                </span>
                                </td>
                            <td className="px-6 py-4 font-[500]">
                                <span className='text-primary'>{item.paymentId ? item.paymentId : 'CASH ON DELIVERY'}</span>
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">{item?.userId.name}</td>
                            <td className="px-6 py-4 font-[500]">{item?.delivery_address?.mobile}</td>
                            <td className="px-6 py-4 font-[500]">
                                <span className="block w-[400px]">
                                   {[
                                        item?.delivery_address?.address_line1,
                                        item?.delivery_address?.city,
                                        item?.delivery_address?.landmark,
                                        item?.delivery_address?.state,
                                        item?.delivery_address?.country,
                                        item?.delivery_address?.mobile
                                        ].filter(Boolean).join(", ")
                                    }
                                </span>
                                </td>
                            <td className="px-6 py-4 font-[500]">{item?.delivery_address?.pincode}</td>
                            <td className="px-6 py-4  font-bold">&#8377;{item?.totalAmt}</td>
                            <td className="px-6 py-4 font-[500]">{item.userId.email}</td>
                            <td className="px-6 py-4 font-[500]">
                                <span className='text-primary'>{item.userId._id}
                                </span>
                            </td>
                            <td className="px-6 py-4 font-[500] "><Badge status={item.order_status}/></td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">{new Date(item.createdAt).toLocaleDateString('en-US', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                            })}
                                            </td>
                        </tr> 
                        {
                            isOpenOrderProduct ===index &&
                                <tr>
                            <td  colSpan="6" className="px-6 ">
                            <div className="relative overflow-x-auto shadow-md w-full py-5 px-8 rounded-md ">
                <table className="w-full text-sm text-left text-gray-700 bg-white">
                    <thead className="text-xs uppercase bg-gray-100 text-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Product Id</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Product Title</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Image</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Quantity</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Price</th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">Sub Total</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            item?.products?.length !==0 && item.products.map((product,index)=>(
                                <tr className="border-b dark:border-gray-700   bg-white">
                            <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-600'>
                                        {product?._id}
                                </span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                                <span className='text-gray-600'>
                                     <div className='w-[200px]'>{product.productTitle}</div></span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                                <img src={product.image} className='w-[40px] h-[40px] object-cover rounded-md'/></td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">{product.quantity}</td>
                            <td className="px-6 py-4 font-bold">&#8377;{product.price}</td>
                            <td className="px-6 py-4 font-bold">&#8377;{product.quantity*product.price}</td>
                        </tr> 
                            ))
                        }
                    </tbody>
                </table>
                </div>
                </td>
                        </tr>
                        }
                                </>
                            ))
                        }
                    </tbody>
                </table>
                </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
