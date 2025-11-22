import Button from '@mui/material/Button';
import React from 'react'
import { useContext } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router"
import { MyContext } from '../../App';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';//for loading
import {  getData, uploadImage } from '../../../utils/api';
import { useEffect } from 'react';
import { MdOutlineLocationOn } from "react-icons/md";

const AccountSideBar=()=> {
    //backend on image fetch for profile what user used
     const context=useContext(MyContext);
     const [previews,setPreviews]=useState([])
     const [uploading, setUploading]=useState(false)

    let selectedImg=[];
    const formdata = new FormData();

    useEffect(()=>{ //this is for stay image on the avatar during refresh   
        if (context?.userData?.avatar) {//if image exist then
            setPreviews([context.userData.avatar]);
        } else {
            setPreviews([]); // Ensure it's empty when no avatar exists
        }
    },[context?.userData])
    const onchangeFile=async(e,api)=>{
        try{
            setPreviews([]);
            const files=e.target.files;
            setUploading(true); //loading start
            for(var i=0;i<files.length;i++){
                if(files[i] && (
                    files[i].type === "image/jpg" ||
                    files[i].type === "image/jpeg" ||
                    files[i].type === "image/png" ||
                    files[i].type === "image/webg"
                )){
                    const file = files[i];
                        selectedImg.push(file);
                        formdata.append('avatar', file);
                    } else {
                        context.openAlertBox("error","Please select a valid JPG or PNG image file.")
                        setUploading(false);   
                        return false;
                    }
                }
                //api call
                uploadImage("/api/user/user-avatar",formdata).then((res)=>{
                    setUploading(false);
                    let avatars=[]; //for showing image in the profile
                    avatars.push(res?.avatar);
                    setPreviews(avatars)
                })
        }
        catch(error){
            console.log(error)
        }
    }
    //for logout
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const history=useNavigate();
     const logout = () => {
            setAnchorEl(null); //menu null means not shown
            getData(`/api/user/logout?token=${localStorage.getItem('accesstoken')}`, { withCredentials: true }).then((res) => {
                if (res?.success === true) {
                    context.setIsLogin(false);
                    localStorage.removeItem('accesstoken');
                    localStorage.removeItem('refreshtoken');
                    localStorage.removeItem('userdata');
                    localStorage.removeItem("userEmail");
                    localStorage.removeItem("savedCities");
                    localStorage.clear();
                    context.setUserData(null);
                    context.setMyListData([]); //clear my list data on logout
                    context.setCartData([]); //clear cart data on logout
                    history("/");
                }
            })
        }
  return (
     <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
                    <div className="w-full p-5  flex items-center justify-center flex-col">
                    <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200">
                        {
                            uploading === true ?(
                              //for loading (loder)
                        <CircularProgress color="inherit" />
                        )
                        :
                        <>
                        {previews?.length !== 0 ? (
                            previews.map((img, idx) => (
                                <img
                                    src={img}
                                    key={idx}
                                    className="w-full h-full object-cover"
                                    alt="Profile"
                                />
                            ))
                        ) : (
                            <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" // <-- path to your default image
                                className="w-full h-full object-cover"
                                alt="Default Profile"
                            />
                        )}
                        </>
                        } 
                        <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 
                                        bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100"
                            >
                            <FaCloudUploadAlt className="text-[#fff] text-[25px]" />

                            <input
                                type="file"
                                className="absolute top-0 left-0 w-full h-full opacity-0"
                                accept='image/*' //accept onlt image
                                onChange={(e)=>onchangeFile(e,"/api/user/user-avatar")}
                                name="avatar"
                            />
                            </div>

                    </div>
                    <h3>{context?.userData?.name}</h3>
                    <h6 className='text-[14px] font-[500]'>{context?.userData?.email}</h6>
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
                            <NavLink  to="/address"
                                    exact={true} activeClassName="isActive" >
                            <Button className="w-full !py-2 !text-left !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                                <MdOutlineLocationOn className="text-[21px]" />
                                Address
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
                            <Button className="w-full  !py-2 !text-left !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2"
                                type='submit'
                                onClick={() => {
                                    handleClose();
                                    logout();
                                }}>
                                <IoIosLogOut className="text-[18px]" />
                                LogOut
                            </Button>
                        </li>
                    </ul>
                </div>
  )
}

export default AccountSideBar;
