import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { NavLink } from "react-router"
import TextField from '@mui/material/TextField';
import { IoIosMale } from "react-icons/io";
import { IoIosFemale } from "react-icons/io";

const MyAccount=()=> {
    const [gender, setGender] = useState('');
  return (
    <section className="py-10 w-full">
        <div className="px-10 ml-8 flex gap-5">
            <div className="col w-[20%]">
                <div className="card bg-white shadow-md rounded-md ">
                    <div className="w-full p-5  flex items-center justify-center flex-col">
                    <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
                        <img
                        src="https://th.bing.com/th/id/OIP.4Q7-yMnrlnqwR4ORH7c06AHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                        className="w-full h-full object-cover "
                        alt="Profile"
                        />
                        <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 
                                        bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100"
                            >
                            <FaCloudUploadAlt className="text-[#fff] text-[25px]" />

                            <input
                                type="file"
                                className="absolute top-0 left-0 w-full h-full opacity-0"
                            />
                            </div>

                    </div>
                    <h3>Shivanand Gupta</h3>
                    <h6 className='text-[14px] font-[500]'>shivanandgupta316@gmail.com</h6>
                    </div>
                    <ul className='list-none pb-5 bg-[#f1f1f1] myAccountTabs'>
                        <li className="w-full">
                            <NavLink  to="/my-account"
                                    exact={true} activeClassName="isActive" >
                            <Button className="w-full !py-2 !text-left !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                                <FaRegUser className="text-[17px]" />
                                My Profile
                            </Button>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink  to="/my-list"
                                    exact={true} activeClassName="isActive" >
                            <Button className="w-full !py-2 !text-left !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                                <FaRegHeart className="text-[17px]" />
                                My List
                            </Button>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink  to="/my-order"
                                    exact={true} activeClassName="isActive" >
                            <Button className="w-full !py-2 !text-left !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                                <IoBagCheckOutline className="text-[17px]" />
                                My Order
                            </Button>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink  to="/logout"
                                    exact={true} activeClassName="isActive" >
                            <Button className="w-full  !py-2 !text-left !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                                <IoIosLogOut className="text-[18px]" />
                                LogOut
                            </Button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col2 w-[50%]">
                <div className="card bg-white p-5 shadow-md rounded-md">
                    <h2 className="pb-3 ">My Profile</h2>
                    <hr className="mb-5" />
                    {/* <form className='mt-5 '>
                    <div className="flex items-center gap-5 ">
                        <div className="w-[50%]">
                        <TextField
                            label="Name"
                            variant="outlined"
                            size='small'
                            className='w-full'
                        />
                        </div>
                        <div className="w-[50%]">
                        <TextField
                            label="Email"
                            variant="outlined"
                            size='small'
                            className='w-full'
                        />
                        </div>
                        
                    </div>
                    <div className="flex items-center gap-5 mt-4 ">
                        <div className="w-[50%]">
                        <TextField
                            label="Phone Numner"
                            variant="outlined"
                            size='small'
                            className='w-full'
                        />
                        </div>
                    </div>
                    <br/>
                    <div className='flex items-center gap-4'>
                        <Button className='btn-org btn-md w-[100px]'>Save</Button>
                        <Button className='btn-org btn-border !btn-md w-[100px]'>Cancle</Button>
                    </div>
                    </form> */}

                         <form className="mt-5">
                            {/* Name & Email */}
                            <div className="flex items-center gap-5">
                                <div className="w-[50%]">
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    size="small"
                                    className="w-full"
                                />
                                </div>
                                <div className="w-[50%]">
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    size="small"
                                    className="w-full"
                                />
                                </div>
                            </div>

                            {/* Phone Number & Date of Birth */}
                            <div className="flex items-center gap-5 mt-4">
                                <div className="w-[50%]">
                                <TextField
                                    label="Phone Number"
                                    variant="outlined"
                                    size="small"
                                    className="w-full"
                                />
                                </div>
                                <div className="w-[50%]">
                                <TextField
                                    label="Date of Birth"
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    variant="outlined"
                                    size="small"
                                    className="w-full"
                                />
                                </div>
                            </div>

                            {/* Gender Selection */}
                            <div className="mt-4 ">
                                <label className="block mb-2 text-sm font-medium">Gender</label>
                                <div className="flex gap-5">
                                <Button
                                
                                    variant={gender === 'Male' ? 'contained' : 'outlined'}
                                    className={`btn-md w-[100px] flex items-center  gap-1 justify-center ${
                                        gender === 'Male' ? 'btn-org text-white' : ''
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setGender('Male');
                                    }}
                                    >
                                    <IoIosMale />
                                    Male
                                    </Button>

                                    <Button
                                    variant={gender === 'Female' ? 'contained' : 'outlined'}
                                    className={`btn-md w-[100px] flex items-center gap-1 justify-center ${
                                        gender === 'Female' ? 'btn-org text-white' : ''
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setGender('Female');
                                    }}
                                    >
                                    <IoIosFemale />
                                    Female
                                    </Button>

                                </div>
                            </div>

                            {/* Save & Cancel Buttons */}
                            <br />
                            <div className="flex items-center gap-4">
                                <Button className="btn-org btn-md w-[100px]">Save</Button>
                                <Button className="btn-org btn-border !btn-md w-[100px]">Cancel</Button>
                            </div>
                            </form>

                </div>
                </div>
        </div>
    </section>

  )
}

export default MyAccount;