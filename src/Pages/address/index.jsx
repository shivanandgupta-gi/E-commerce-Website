import React, { useContext, useEffect, useState } from 'react'
import AccountSideBar from '../../components/AccountSideBar';
import { MyContext } from '../../App';
import { deleteData, editData, getData, postData } from '../../../utils/api';
import { RxCross2 } from "react-icons/rx";
import AddressAddPanel from './AddressAddPanel';
import Button from '@mui/material/Button';

//this for Adress component
const Adress = () => {
    //backend start here
    const [address, setAddress] = useState([]) //for how many address saved stored in this state
    const context = useContext(MyContext);
    
    //this for fetching data from api
    useEffect(() => {
        getData(`/api/address/get?userId=${context?.userData?._id}`).then((res) => {
            if (res?.error === false) {
                setAddress(res?.data)
            }
        });
    }, [context?.userData?._id])
    // this for delete address like when we click on delete icon that address will be deleted
    const removeLable = (id) => {
        deleteData(`/api/address/delete/${id}`).then((res) => {
            if (res?.error !== true) {
                context.openAlertBox("success", res?.message)
                //data fetch after delete address
               setAddress(prev => prev.filter(item => item._id !== id));
            }
            else {
                context.openAlertBox("error", "something went wrong")
            }
        })
    }
    return (
        <>
            <section className="py-10 w-full">
                <div className="px-10 ml-8 flex gap-5">
                    <div className="col w-[20%]">
                        <AccountSideBar />
                    </div>

                    <div className="col2 w-[50%]">
                        <div className="card bg-white p-5 shadow-md rounded-md mb-5">
                            <div className='flex items-center pb-3'>
                                <h2 className="pb-0 ">Address</h2>
                            </div>
                            <hr className="mb-5" />
                            {/* for storing address */}
                            <div className="flex items-center justify-center p-5 border border-dashed border-[rgba(0,0,0,0.2)] bg-[#f1f1f1] hover:bg-[#e2f3f9] cursor-pointer"
                                onClick={context?.toggleAddressPanel(true)}>
                                <span className="text-[13px] font-[500]">Add Address</span>
                            </div>
                            {/* address list showing how many address you have saved */}
                            <div className='flex gap-2 flex-col mt-2'>
                                {
                                    address?.length > 0 ? address?.map((address, index) => {
                                        return (
                                            <div key={index} className="flex gap-1 flex-col mt-2">
                                                <label className=" relative border border-dashed border-[rgba(0,0,0,0.2)] addressBox w-full   bg-[#fafafa] p-4 rounded-md cursor-pointer ">
                                                     {/* delete button - positioned top-right */}
                                                     <span className="absolute top-3 right-4 cursor-pointer" onClick={() => removeLable(address?._id)}><RxCross2 className='text-[23px] text-gray-600' /></span>

                                                    <span className='inline-block w-fit px-2 py-1 bg-[#b4b0b0] text-xs font-medium rounded-sm '>{address?.addressType}</span>
                                                    <h4 className='pt-0 flex gap-5 text-[14px]'><span >{context.userData.name}</span>
                                                        <span>{address.mobile}</span>
                                                    </h4>
                                                        <span className='text-[13px] block w-100% pt-1'>
                                                            {/* showing address  */}
                                                            <span>
                                                                {address?.address_line1}, {address?.city}, {address?.state},{" "}
                                                                <span className="font-bold">{address?.pincode}</span>, {address?.country}
                                                            </span>
                                                        </span>
                                                </label>
                                            </div>
                                        );
                                    })
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
                </div>
            </section>
        </>
    )
}

export default Adress;
