import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { use } from 'react';
import { MyContext } from '../../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../../utils/api';


const ChangePass=()=> {
    
    const [isPasswordShow,setIsPasswordShow]=useState(false);
    const [isNewPasswordShow,setIsNewPasswordShow]=useState(false);

    //backend
    const[isLoading,setIsLoading]=useState(false);
    const[formFields,setFormFields]=useState({//form filed pick
        email:localStorage.getItem("userEmail"),
        newPassword:'',
        cPassword:'',
    })
    const context=useContext(MyContext); //context used
    const history=useNavigate(); //navigate used
    const onChangeInput=(e)=>{ //this for input change in input area
    setFormFields({...formFields,[e.target.name]:e.target.value})
    }

    //if any field empty disabeld button it check the field
    const validValue=Object.values(formFields).every(el=>el);

     const handleSubmit=(e)=>{
          e.preventDefault();
          setIsLoading(true);
          //toster
           if(formFields.newPassword === ""){
            context.openAlertBox("error","please enter your new Password")
            return false; 
          }
           if(formFields.cPassword === ""){
            context.openAlertBox("error","please enter your Confirm Password")
            return false; 
          }
          if(formFields.newPassword !== formFields.cPassword){ //if both password not match
            context.openAlertBox("error","password and confirm password not match")
            return false; 
          }

          //api called
          postData("/api/user/reset-password",formFields).then((res)=>{
            console.log(res);

            if(res?.error !== true){
                 localStorage.removeItem("userEmail");
                localStorage.removeItem("actionType")
              context.openAlertBox("success",res?.message)
               setIsLoading(false);
                setFormFields({
                    email:'',
                  newPassword:'',
                  cPassword:'',
                })
    
                //this for shown on main page that user login menas user profile shown
                context.setIsLogin(true);
                history("/login"); //login again
            }
            else{
              context.openAlertBox("error",res?.message)
              setIsLoading(false);
            }
        })  
        }

  return (
    <section className="!bg-white w-full   top-0 left-0">
                {/* icon and login page */}
                    <div className="loginBox card w-[480px] pb-5 h-auto mx-auto pt-2 relative z-50">
                        <div className="text-center">
                            <img  src="https://th.bing.com/th/id/OIP.WxNG5q11KxVMQGTlJRXiWQHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="mx-auto w-30 h-30"/>
                        </div>
                        <h1 className="text-center text-[25px] font-[600] mt-1">
                            Welcome Back!<br />
                            enter your new password to continue
                        </h1>
                            <br/>
                        {/* name password input fields for login */}
                        <form className="w-full px-8 mt-2" onSubmit={handleSubmit}>
                            
                             <div className="form-group mb-4 w-full">
                               <h4 className="text-[14px] font-[500] mb-1">New Password</h4>
                                <div className="relative w-full">
                                <input
                                onChange={onChangeInput}
                                name='newPassword'
                                value={formFields.newPassword}
                                placeholder="Enter your new password"
                                    type={isNewPasswordShow ? 'text' : 'password'} 
                                    className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
                                />
                                <Button className="!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-600"  onClick={()=>{setIsNewPasswordShow(!isNewPasswordShow)}}>
                                    
                                    {
                                        isNewPasswordShow === true ?
                                        <FaEye className="text-[18px]" />
                                        :
                                        <FaEyeSlash className="text-[18px]" />
                                    }
                                </Button>
                                </div>
                            </div>
                             <div className="form-group mb-4 w-full">
                               <h4 className="text-[14px] font-[500] mb-1">Confirm Password</h4>
                                <div className="relative w-full">
                                <input
                                 onChange={onChangeInput}
                                name='cPassword'
                                value={formFields.cPassword}
                                placeholder="re-enter your password"
                                    type={isPasswordShow ? 'text' : 'password'} 
                                    className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
                                />
                                <Button className="!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-600"  onClick={()=>{setIsPasswordShow(!isPasswordShow)}}>
                                    
                                    {
                                        isPasswordShow === true ?
                                        <FaEye className="text-[18px]" />
                                        :
                                        <FaEyeSlash className="text-[18px]" />
                                    }
                                </Button>
                                </div>
                            </div>
                               
                                 {/* sign in button added */}
                                     <Button type='submit' disabled={!validValue } className="btn-org btn-md w-full flex gap-3">
                                        {
                                        isLoading===true ?
                                        //  circular move progress
                                            <CircularProgress color="inherit" />
                                            :
                                            'Change Password'
                                        } 
                                        </Button>

                        </form>
                    </div>
        </section>
  )
}

export default ChangePass;