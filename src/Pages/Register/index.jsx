import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { postData } from '../../../utils/api';
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
//this for google register
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from '../../firebase';
const auth = getAuth(firebaseApp); //this is auth that help to register with google
const googleProvider = new GoogleAuthProvider();
// this is the register page 
export default function Register() {
  const context = useContext(MyContext); //context used
  const [isShowPassword, setIsShowPassword] = useState(false);
  //backend code request send to backend
  //sending data on server usese state hook
  const [isLoading, setIsLoading] = useState(false);//thsi for loading
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: '',
  })
  //navigation element to go on otp page without router
  const history = useNavigate();
  const onChangeInput = (e) => {

    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }
  //if any field empty disabeld button it check the field
  const validValue = Object.values(formFields).every(el => el);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    //toster
    if (formFields.name === "") {
      context.openAlertBox("error", "please enter your name")
      return false;
    }
    if (formFields.name === "") {
      context.openAlertBox("error", "please enter your Email")
      return false;
    }
    if (formFields.name === "") {
      context.openAlertBox("error", "please enter your Password")
      return false;
    }
    //api called
    postData("/api/user/register", formFields).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        context.openAlertBox("success", "verify your email for Email.")
        localStorage.setItem("userEmail", formFields.email);//for user email store in local storage
        setIsLoading(false);
        setFormFields({
          name: '',
          email: '',
          password: '',
        })
        history("/verify"); //verify router in index.js//otp page open automatic when otp send
      }
      else {
        context.openAlertBox("error", "email already exists.")
        setIsLoading(false);
      }
    })
  }

  //google login
  const authWithGoogle = () => {
    signInWithPopup(auth, googleProvider) //this is copy from firebase autherization
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // to store data in formfield 
        const fields = {
          name: user.providerData[0].displayName,
          email: user.providerData[0].email,
          password: "null",
          avatar: user.providerData[0].photoURL,
          mobile: user.providerData[0].phoneNumber,
          signUpWithGoogle:true,
          role:"USER"
        }
        //api called
    postData("/api/user/authWithGoogle", fields).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        context.openAlertBox("success", "Sign Up Successfully.")
        localStorage.setItem("userEmail", fields.email);//for user email store in local storage
        setIsLoading(false);
        localStorage.setItem("accesstoken" , res.data?.accesstoken)
            localStorage.setItem("refreshtoken", res.data?.refreshToKen)

            //this for shown on main page that user login menas user profile shown
            context.setIsLogin(true);
        history("/"); //verify router in index.js//otp page open automatic when otp send
      }
      else {
        context.openAlertBox("error", "email already exists.")
        setIsLoading(false);
      }
    })
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <section className="section py-10">
      <div className="px-7">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center mb-5 !font-bold text-[18px] text-black">Register to your account</h3>
          <form className="w-full mb-5" onSubmit={handleSubmit}>
            <div className="form-group w-full  mb-4">
              <TextField
                type='text'
                name='name'
                id="name"
                value={formFields.name}
                disabled={isLoading}
                label="Full Name*"
                variant="outlined"
                className='w-full'
                onChange={onChangeInput} //it triggered when we type in the input field
              />
            </div>
            <div className="form-group w-full mb-5">
              <TextField
                type='email'
                id="email"
                disabled={isLoading}

                name='email'
                value={formFields.email}
                label="Email Id*"
                variant="outlined"
                className='w-full'
                onChange={onChangeInput}
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword ? 'text' : 'password'}
                id="password"
                value={formFields.password}
                name='password'
                disabled={isLoading}
                label="Password*"
                variant="outlined"
                className='w-full'
                onChange={onChangeInput} //it triggered when imput field is changed
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
              <Button type='submit' disabled={!validValue} className="btn-org btn-md w-full flex gap-3">
                {
                  isLoading === true ?
                    <CircularProgress color="inherit" />
                    :
                    'Register'
                }
              </Button>
            </div>

            <p className="text-center">
              Already have an account <Link className="link text-[14px] font-[600] !text-primary" to="/login"> Login</Link>
            </p>

            <p className="text-center font-[5] mb-3">Or continue with social account ?</p>
            <Button className="flex gap-3 !mb-3 w-full !bg-[#f1f1f1] btn-md !text-black" onClick={authWithGoogle}>
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
