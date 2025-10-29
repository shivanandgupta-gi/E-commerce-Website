import Button from '@mui/material/Button';
import React, { useContext, useEffect, useState } from 'react'

import TextField from '@mui/material/TextField';
import AccountSideBar from '../AccountSideBar';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { editData, postData } from '../../../utils/api';
import CircularProgress from '@mui/material/CircularProgress';//for loading


const MyAccount = () => {
    //backend
    const context = useContext(MyContext);
    const [isLoading, setIsLoading] = useState(false); //this for loading (loader circular movve)
    const [isLoading2, setIsLoading2] = useState(false); //this for loading (loader circular movve to change password)
    const [userId, setUserId] = useState("") //for stroe id to send on api
    const [isFormShown, setIsFormShown] = useState(false) //this is for the when click on change password then it open the form of change password
    const [formFields, setFormFields] = useState({ //thsi for update the user profile  like name , email and phone number 
        name: '',
        email: '',
        mobile: ''
    })
    const [changePassword, setChangePassword] = useState({ //thsi for update the user password for change password
        email: context?.userData?.email,
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    })

    const history = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("accesstoken");
        if (!token) {
            history("/");
        } else {
            context.setIsLogin(true); // restore login state
        }
    }, []);
    //useeffect to find user id
    useEffect(() => { //this is for stay image on the avatar during refresh   
        if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {//if image exist then
            setUserId(context?.userData?._id);
            setFormFields({ //this for what is in database shown in textfiled area
                name: context?.userData?.name,
                email: context?.userData?.email,
                mobile: context?.userData?.mobile
            })

            setFormFields({ //this for what is in database shown in textfiled area of change password
                 name: context?.userData?.name,
                 mobile: context?.userData?.mobile,
                email: context?.userData?.email,
                oldPassword: context?.userData?.password,
                newPassword: '',
                confirmPassword: ''
            })
        }
    }, [context?.userData])
    //for user profile update
    const onChangeInput = (e) => { //this for input change in input area
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
        setChangePassword({ ...changePassword, [e.target.name]: e.target.value }) //this for change password
    }

    //if any field empty disabeld button it check the field
    //const validValue = Object.values(formFields).every(el => el);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        //toster
        if (formFields.name === "") {
            context.openAlertBox("error", "please enter your Name")
            setIsLoading(false);
            return false;
        }
        if (formFields.email === "") {
            context.openAlertBox("error", "please enter your Email")
            setIsLoading(false);
            return false;
        }
        if (formFields.mobile === "") {
            context.openAlertBox("error", "please enter your Phone Number")
            setIsLoading(false);
            return false;
        }
        //api called
        editData(`/api/user/${userId}`, formFields, { withCredentials: true }).then((res) => {
            if (res?.error !== true) {
                context.openAlertBox("success", res?.message)
                setIsLoading(false);

            }
            else {
                context.openAlertBox("error", res?.message)
                setIsLoading(false);
            }
        })
    }
    //this is for the change password ijnput filled correctly or not

    const validValue2 = Object.values(formFields).every(el => el);
    const handleSubmitChangePassword = (e) => {
        e.preventDefault();
        setIsLoading2(true);
        //toster
        if (changePassword.oldPassword === "") {
            context.openAlertBox("error", "please enter your Name")
            setIsLoading2(false)
            return false;
        }
        if (changePassword.newPassword === "") {
            context.openAlertBox("error", "please enter your Email")
            setIsLoading2(false)
            return false;
        }
        if (changePassword.confirmPassword === "") {
            context.openAlertBox("error", "please enter your Phone Number")
            setIsLoading2(false)
            return false;
        }
        if (changePassword.newPassword !== changePassword.confirmPassword) {
            context.openAlertBox("error", "please enter your Phone Number")
            setIsLoading2(false)
            return false;
        }
        //api called
        postData(`/api/user/reset-password`, changePassword, { withCredentials: true }).then((res) => {
            if (res?.error !== true) {
                setIsLoading2(false)
                context.openAlertBox("success", res?.message)
                setIsFormShown(false);
            }
            else {
                setIsLoading2(false);
                context.openAlertBox("error", res?.message)
            }
        })
    }
    return (
        <section className="py-10 w-full">
            <div className="px-10 ml-8 flex gap-5">
                <div className="col w-[20%]">
                    <AccountSideBar />
                </div>

                <div className="col2 w-[50%]">
                    <div className="card bg-white p-5 shadow-md rounded-md mb-5">
                        <div className='flex items-center pb-3'>
                            <h2 className="pb-0 ">My Profile</h2>
                            <Button className='!ml-auto !text-primary' onClick={() => setIsFormShown(!isFormShown)}>Change Password</Button>
                        </div>
                        <hr className="mb-5" />
                        <form className='mt-8 ' onSubmit={handleSubmit}>
                            <div className="flex items-center gap-5 ">
                                <div className="w-[50%]">
                                    <TextField
                                        label="Name"
                                        variant="outlined"
                                        size='small'
                                        className='w-full'
                                        name='name'
                                        value={formFields.name}
                                        onChange={onChangeInput}
                                    />
                                </div>
                                <div className="w-[50%]">
                                    <TextField
                                        label="Email"
                                        type='email'
                                        variant="outlined"
                                        size='small'
                                        className='w-full'
                                        name='email'
                                        disabled={true} //email already verfiy and we can't update
                                        value={formFields.email}
                                        onChange={onChangeInput}
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
                                        name='mobile'
                                        value={formFields.mobile}
                                        onChange={onChangeInput}
                                    />
                                </div>

                            </div>
                            <br />
                            <div className='flex items-center gap-4'>
                                <Button
                                    type="submit"
                                    //disabled={!validValue}
                                    className='btn-org btn-md w-[200px]'>
                                    {
                                        isLoading === true ? ( //for loading (loder)
                                            <CircularProgress color="inherit" />
                                        ) :
                                            "Update Profile"
                                    }
                                </Button>
                            </div>
                        </form>
                    </div>
                    {/* for password change */}
                    {
                        isFormShown === true &&
                        <div className="card bg-white p-5 shadow-md rounded-md">
                            <div className='flex items-center pb-3'>
                                <h2 className='pb-0 '>Change Password</h2>
                            </div>
                            <hr />
                            <form className='mt-8 ' onSubmit={handleSubmitChangePassword}>
                                {
                                    //to check that if login with google then no need to write old password
                                    context.userData.signUpWithGoogle === false &&
                                    <div className="flex items-center gap-5 ">
                                        <div className="w-[75%]">
                                            <TextField
                                                label="Old Password"
                                                variant="outlined"
                                                size='small'
                                                type='password'
                                                className='w-full'
                                                name='oldPassword'
                                                value={changePassword.oldPassword}
                                                onChange={onChangeInput}
                                            />
                                        </div>
                                    </div>
                                }
                                <div className="flex items-center gap-5 mt-4">
                                    <div className="w-[75%]">
                                        <TextField
                                            label="New Password"
                                            type='password'
                                            variant="outlined"
                                            size='small'
                                            className='w-full'
                                            name='newPassword'
                                            value={changePassword.newPassword}
                                            onChange={onChangeInput}
                                        />
                                    </div>

                                </div>
                                <div className="flex items-center gap-5 mt-4 ">
                                    <div className="w-[75%]">
                                        <TextField
                                            type="password"
                                            label="Confirm Password"
                                            variant="outlined"
                                            size='small'
                                            className='w-full'
                                            name='confirmPassword'
                                            value={changePassword.confirmPassword}
                                            onChange={onChangeInput}
                                        />
                                    </div>

                                </div>
                                <br />
                                <div className='flex items-center gap-4'>
                                    <Button
                                        type="submit"
                                        className='btn-org btn-md w-[200px]'>
                                        {
                                            isLoading2 === true ? ( //for loading (loder)
                                                <CircularProgress color="inherit" />
                                            ) :
                                                "Change Password"
                                        }
                                    </Button>
                                </div>
                            </form>
                        </div>
                    }
                </div>
            </div>
        </section>

    )
}

export default MyAccount;