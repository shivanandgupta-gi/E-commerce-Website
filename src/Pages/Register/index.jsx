import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";


// this is the register page 
export default function Register() {

  const [isShowPassword,setIsShowPassword]=useState(false);


  return (
    <section className="section py-10">
      <div className="px-7">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center mb-5 !font-bold text-[18px] text-black">Register to your account</h3>
          <form className="w-full mb-5">
             <div className="form-group w-full  mb-4">
              <TextField
                type='text'
                id="name"
                label="Full Name"
                variant="outlined"
                className='w-full'
              />
            </div>
            <div className="form-group w-full mb-5">
              <TextField
                type='email'
                id="email"
                label="Email Id*"
                variant="outlined"
                className='w-full'
              />
            </div>
             <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword ? 'text' : 'password'}
                id="password"
                label="Password*"
                variant="outlined"
                className='w-full'
              />
              {/* for eye button on password */}
              <Button
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsShowPassword(!isShowPassword)} >
                  {
                    isShowPassword === true ?
                    <IoEye className="text-[20px] opacity-75" />
                    :
                    <FaEyeSlash className="text-[20px] opacity-75" />
                  }
                
              </Button>
            </div>

            {/* for forget password */}
            

              <div className="flex items-center w-full mt-3 mb-3">
                <Button className="btn-org btn-md w-full">Register</Button>
              </div>

              <p className="text-center">
               Already have an account <Link className="link text-[14px] font-[600] !text-primary" to="/login"> Login</Link>
              </p>

              <p className="text-center font-[5] mb-3">Or continue with social account ?</p>
                <Button className="flex gap-3 !mb-3 w-full !bg-[#f1f1f1] btn-md !text-black">
                  <FcGoogle className="text-[20px]" /> SignUp with Google
                </Button>
                <Button className="flex gap-3 w-full !bg-[#f1f1f1] btn-md !text-black">
                  <FaFacebook className="text-[20px]" /> Login with Facebook
                </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
