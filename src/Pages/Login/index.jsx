import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import { postData } from '../../../utils/api';

//this for google register
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from '../../firebase';
const auth = getAuth(firebaseApp); //this is auth that help to register with google
const googleProvider = new GoogleAuthProvider();

export default function Login() {
 
  const [isShowPassword,setIsShowPassword]=useState(false);

  //backend code request send to backend
  //sending data on server usese state hook
  const[isLoading,setIsLoading]=useState(false);//thsi for loading
  const [formFields,setFormFields]=useState({
    email:'',
    password:'',
  })
  //navigation element to go on otp page without router
  const history=useNavigate();
  const context=useContext(MyContext);

  const onChangeInput=(e)=>{ //this for input change in input area
    setFormFields({...formFields,[e.target.name]:e.target.value})
  }

  //if any field empty disabeld button it check the field
    const validValue=Object.values(formFields).every(el=>el);
    const handleSubmit=(e)=>{
      e.preventDefault();
      setIsLoading(true);
      //toster
       if(formFields.name === ""){
        context.openAlertBox("error","please enter your Email")
        return false; 
      }
       if(formFields.name === ""){
        context.openAlertBox("error","please enter your Password")
        return false; 
      }
      //api called
      postData("/api/user/login",formFields,{withCredentials:true}).then((res)=>{
        console.log(res);
        if(res?.error !== true){
          context.openAlertBox("success","Login Successfully.")
           localStorage.setItem("userEmail",formFields.email);//for user email store in local storage
           setIsLoading(false);
            setFormFields({
              email:'',
              password:'',
            })
            localStorage.setItem("accesstoken" , res.data?.accesstoken)
            localStorage.setItem("refreshtoken", res.data?.refreshToKen)

            //this for shown on main page that user login menas user profile shown
            context.setIsLogin(true);
            history("/"); //verify router in index.js//otp page open automatic when otp send
        }
        else{
          context.openAlertBox("error","email already exists.")
          setIsLoading(false);
        }
    })  
    } 
    //for forgot password
  const forgotPassword=()=>{ //if password is forgot
    if(formFields.email === ""){ //if email is empty
      context.openAlertBox("error","please enter your Email")
      return false; 
    }
    context.openAlertBox("success", `OTP sent to ${formFields.email}`)
    localStorage.setItem("userEmail",formFields.email);//for user email store in local storage
    localStorage.setItem("actionType",'forgot-password');//if user click on forgot password then store action type in local storage 

      postData("/api/user/forgot-password",{
          email:formFields.email,
        })
        .then((res)=>{
        if(res?.error === false){
              history("/verify") //navigate to change password page
             }else{
                context.openAlertBox("error",res?.message)
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
          context.openAlertBox("success", "Login Successfully.")
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
          <h3 className="text-center mb-5 !font-bold text-[18px] text-black">Login to your account</h3>
          <form className="w-full mb-5" onSubmit={handleSubmit}>
            <div className="form-group w-full mb-5">
              <TextField
                type='email'
                id="email"
                name="email"
                value={formFields.email}
                label="Email Id*"
                variant="outlined"
                className=' e w-full'
                onChange={onChangeInput}
              />
            </div>
             <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword ? 'text' : 'password'}
                id="password"
                name='password'
                value={formFields.password}
                label="Password*"
                variant="outlined"
                className='w-full'
                onChange={onChangeInput}
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
            <a className="link cursor-pointer text-[14px] font-[600]" onClick={forgotPassword}>Forgot Password?</a>

               <div className="flex items-center w-full mt-3 mb-3">
                <Button type='submit' disabled={!validValue } className="btn-org btn-md w-full flex gap-3">
                  {
                   isLoading===true ?
                  //  circular move progress
                      <CircularProgress color="inherit" />
                    :
                      'Login'
                  } 
                  </Button>
              </div>

              <p className="text-center">
                Not Registered? <Link className="link text-[14px] font-[600] !text-primary" to="/register"> Sign Up</Link>
              </p>

              <p className="text-center font-[5] mb-3">Or continue with social account</p>
                <Button className="flex gap-3 w-full !mb-3 !bg-[#f1f1f1] btn-md !text-black" onClick={authWithGoogle}>
                  <FcGoogle className="text-[20px]" /> Login with Google
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
