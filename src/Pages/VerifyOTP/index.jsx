import React, { use, useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import OtpBox from '../../components/OtpBox';
import { postData } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';

const VerifyOTP=()=> {
    const [otp, setOtp] = useState('');
    const handleOtpChange=(value)=>{
        setOtp(value);
    }
    //backend api call for verify otp
const context=useContext(MyContext); //context is used 


const history=useNavigate();//after verify otp navigate to login page

    const verify=(e)=>{
        e.preventDefault();
        const actionType=localStorage.getItem("actionType",'forgot-password');//if user click on forgot password then get action type in local storage to check user want to verify or reset password
        if(actionType !== "forgot-password"){ //if verify only email
            postData("/api/user/verifyEmail",{
            email:localStorage.getItem("userEmail"),
            otp:otp
        })
        .then((res)=>{
         if(res?.error === false){
            context.openAlertBox("success",res?.message)
            history("/login") //navigate to login page
         }else{
            context.openAlertBox("error",res?.message)
         }
        })
        }
        else{ //if reset password choose
            postData("/api/user/forgot-password-otp-verify",{
            email:localStorage.getItem("userEmail"),
            otp:otp
        })
        .then((res)=>{
         if(res?.error === false){
            context.openAlertBox("success",res?.message)
            history("/change-pass") //navigate to password reset page
         }else{
            context.openAlertBox("error",res?.message)
         }
        })
        }
        
    }
  return (
    <section className="!bg-white w-full h-[100vh]  top-0 left-0">
        <header className="w-full fixed  top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
            
           
        </header>
                {/* icon and login page */}
                    <div className="loginBox card w-[600px] pb-52 h-auto mx-auto pt-20 relative z-50">
                        <div className="text-center">
                            {/* for secure image */}
                            <img  src="https://th.bing.com/th/id/OIP.eG5CujoK0tNdZ2IIpkCHnwHaHa?w=207&h=207&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className='w-[100px] m-auto'/>
                        </div>
                        <h1 className="text-center text-[35px] font-[800] mt-4">
                            Welcome !<br />
                            Please Verify Your Account
                        </h1>
                            <br/>
                        <p className="text-center text-[15px]">
                            OTP sent to &nbsp;<span className="text-primary font-bold">{localStorage.getItem("userEmail")}</span>
                            </p>
                           
                            <br/>
                            {/* same as client page copy it for create box*/}
                            <div className=' text-center flex items-center justify-center flex-col'>
                            <OtpBox length={6} onChange={handleOtpChange}/>
                            </div>
                            <br/>
                            <div className='w-[200px] m-auto'>
                                <Button className='text-[#3872fa] btn-org w-full' onClick={verify   }>Verify Otp</Button>
                            </div>
                    </div>
        </section>
  )
}

export default VerifyOTP;