import React, { useContext, useEffect, useState } from 'react'
// this page is for delevery address add and pay now button on drawer page
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoBagCheck } from "react-icons/io5";
import { MyContext } from '../../App';
import { FaPlus } from "react-icons/fa6";
import Radio from '@mui/material/Radio';
import { deleteData, getData, postData } from '../../../utils/api';
import Adress from '../address';
import { color } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { BsFillBagCheckFill } from "react-icons/bs";

const VITE_RAZORPAY_KEY_ID=import.meta.env.VITE_RAZORPAY_KEY_ID;
const VITE_RAZORPAY_KEY_SECRET=import.meta.env.VITE_RAZORPAY_KEY_SECRET;
const CheckOut = () => {
    //backend start here
    const context = useContext(MyContext);
    const [isChecked,setIsChecked]=useState(0);
    const [selectAddress,setSelectedAddress]=useState("");
    const [totalAmount,setTotalAmount]=useState();
    const history=useNavigate();
    // this for delete address like when we click on delete icon that address will be deleted
        const removeLable = (id) => {
            deleteData(`/api/address/delete/${id}`).then((res) => {
                if (res?.error !== true) {
                    context.openAlertBox("success", res?.message)
                    //data fetch after delete address
                   context?.setAddressData(prev => prev.filter(item => item._id !== id));
                }
                else {
                    context.openAlertBox("error", "something went wrong")
                }
            })
        }
    useEffect(()=>{
        setSelectedAddress(context?.userData?.address_details[1]);
    },[context?.userData])
    //this for the selecting the address to deleviry item
    // const handleChange=(e,index)=>{
    //     if(e.target.value){
    //         setIsChecked(index);
    //         setSelectedAddress(e.target.value);
    //     }
    // }
    //this for the total amount calculated
    useEffect(() => {
        setTotalAmount(
            context.cartData?.length !== 0 ?
            context.cartData?.map(item => parseInt(item.price) * item.quantity)
            .reduce((total, value) => total + value, 0) : 0
        )?.toLocaleString('en-US', { style: 'currency', currency: 'INR' });
    }, [context.cartData]);

    //for payment bound in form
    const checkout=(e)=>{
        e.preventDefault();
        if(context.userData.address_details.length !== 0){
            //creating option for the razorpay
        var options={
            key:VITE_RAZORPAY_KEY_ID,
            key_secret:VITE_RAZORPAY_KEY_SECRET,
            amount:parseInt(totalAmount*100),
            currency:"INR",
            order_receipt:context?.userData?.name,
            name:"Shivanand Gupta",
            description:"for testing purpose",
            handler:function(response){
                console.log(response);
                const paymentId=response.razorpay_payment_id;
                const user=context?.userData
                const payLoad={ //after payment store the oreder 
                    userId:user?._id,
                    products:context?.cartData,
                    paymentId:paymentId,
                    payment_status:"COMPLETED",
                    delivery_address:selectAddress,
                    totalAmt:totalAmount,
                    date:new Date().toLocaleString("en-US",{
                        month:"short",
                        day:"2-digit",
                        year:"numeric"
                    })
                };
                postData(`/api/order/create`,payLoad).then((res)=>{
                    context.openAlertBox("success",res.message);
                    if(res.error === false){
                        deleteData(`/api/cart/empty/${user?._id}`).then((res)=>{
                             context.setCartData([]);
                            history("/pay/success");   
                        })
                        
                    }
                    else{
                        context.openAlertBox("error",res.message);
                    }
                })
                
            },
            theme:{
                color:"#ff5252",
            },
        };
        //paying the amount
        var pay=new window.Razorpay(options);
        pay.open();
        }
         else{
            context.openAlertBox("error","Please Add Delivery Address")
        }
    }

    //cash on delivery
    const cashOnDelivery=()=>{
        const user =context.userData
        if(context.userData.address_details.length !== 0){
            const payLoad={ //after payment store the oreder 
                    userId:user?._id,
                    products:context?.cartData,
                    paymentId:"",
                    payment_status:"CASH ON DELIVERY",
                    delivery_address:selectAddress,
                    totalAmt:totalAmount,
                    date:new Date().toLocaleString("en-US",{
                        month:"short",
                        day:"2-digit",
                        year:"numeric"
                    })
                };
                 postData(`/api/order/create`,payLoad).then((res)=>{
                    context.openAlertBox("success",res.message);
                    if(res.error === false){
                        deleteData(`/api/cart/empty/${user?._id}`).then((res)=>{
                            context.setCartData([]);
                            history("/pay/success"); 
                        })
                        
                    }
                    else{
                        context.openAlertBox("error",res.message);
                    }
                })
        }
        else{
            context.openAlertBox("error","Please Add Delivery Address")
        }
    }
    return (
        <section className="py-10">
            <form onSubmit={checkout}>
                 <div className="container flex gap-5 m-auto">
                <div className="leftCol w-[60%]  ">
                    <div className="card bg-white shadow-md p-5 rounded-md w-full ">
                        <div className='flex items-center justify-between'>
                            <h2>Select Delivery Address</h2>
                            <Button className='btn-org btn-border btn-sm gap-1' onClick={context?.toggleAddressPanel(true)}><FaPlus />Add New Address</Button>
                        </div>
                        <br/>
                        <div className='flex flex-col gap-4'>
                            {
                                context?.addressData.length !== 0 ? context?.addressData.map((item,index)=>(
                                    <label className={`inline-flex gap-3 p-4 border border-[rgba(0,0,0,0.1)] rounded-md shadow-sm relative
                                    ${isChecked === index && 'bg-[#fff2f2]'}`} key={index}>
                                        <div>
                                            <Radio size='small' value={item._id} onChange={(e)=>handleChange(e,index)} checked={isChecked === index}/>
                                        </div>
                                        <div className='info'>
                                            <span className='inline-block w-fit px-2 py-1 bg-[#d0cccc] text-xs font-small rounded-sm '>{item?.addressType}</span>
                                              <h4 className='pt-0 flex gap-2 text-[14px] font-[700]'><span >{context.userData.name}</span>                                                                                                            </h4>
                                            <p className='mt-0 mb-0 text-[13px] break-words whitespace-normal'>
                                                {item.address_line1}, {item.city}, {item.state}, {item.country}, {item.pincode}
                                            </p>
                                            <p className='mt-0 mb-0 text-[13px] '>Phone: {item.mobile}</p>
                                        </div>
                                        <div>
                                            <Button variant='text' className='!absolute m-auto top-[15px] right-[15px] btn-sm' onClick={() => removeLable(item?._id)}>DELETE</Button>
                                        </div>
                                    </label>
                                ))
                                :
                                <>
                                 <div className='flex items-center justify-between flex-col p-5'>
                                    <img src="/addAddress.png" className='w-[150px]'/>
                                    <h2 className='text-center'>No Address found !!</h2>
                                    <p className='mt-0'>Add a delivery address.</p>
                                    <Button className='btn-org btn-md pt-4' onClick={context?.toggleAddressPanel(true)}>Add Address</Button>
                                 </div>
                                </> 
                            }                            
                        </div>
                    </div>
                </div>

                {/* for showing cart and total amount to pay */}
                <div className="rightCol w-[40%]">
                    <div className="card shadow-md bg-white p-5 rounded-md">
                        <h2 className="mb-4">Your Order(<span>{context.cartData.length}</span>)</h2>
                        <div className="flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
                            <span className="text-[14px] font-[600]">Product</span>
                            <span className="text-[14px] font-[600]">Subtotal</span>
                        </div>
                        <div className='mb-5 scroll max-h-[250px] overflow-y-auto overflow-x-hidden pr-2'>
                            {
                                context.cartData.length !== 0 && context.cartData.map((item, index) => (
                                    <div className="flex items-center justify-between py-2 ">
                                        <div className="part1 flex items-center gap-3">
                                            <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                                <img src={item.image} className="w-full transition-all group-hover:scale-105" />
                                            </div>
                                            <div className='info'>
                                                <h4 className='text-[14px] truncate w-[300px]'>{item.productTitle}</h4>
                                                <span className='text-[13px]'>Qty : {item.quantity}</span>
                                            </div>
                                        </div>
                                        <span className='text-[14px] font-[600]'>
                                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex items-center flex-col gap-3 mb-2'>
                        <Button type='submit' className='btn-org btn-md w-full flex gap-2 items-center'><IoBagCheck className='text-[20px]' />Pay</Button>
                        <Button type='button' className='btn-dark btn-md w-full flex gap-2 items-center' onClick={cashOnDelivery}><BsFillBagCheckFill className='text-[20px]'/>Cash on Delivery</Button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </section>
    )
}

export default CheckOut;