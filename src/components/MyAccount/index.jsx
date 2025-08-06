import Button from '@mui/material/Button';
import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import { IoIosMale } from "react-icons/io";
import { IoIosFemale } from "react-icons/io";
import AccountSideBar from '../AccountSideBar';

const MyAccount=()=> {
    const [gender, setGender] = useState('');
  return (
    <section className="py-10 w-full">
        <div className="px-10 ml-8 flex gap-5">
            <div className="col w-[20%]">
               <AccountSideBar/>
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