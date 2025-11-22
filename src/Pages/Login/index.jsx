import React, { useContext, useState } from 'react';
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

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from '../../firebase';
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export default function Login() {

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  });

  const history = useNavigate();
  const context = useContext(MyContext);

  const onChangeInput = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  // Disable button until all fields filled
  const validValue = Object.values(formFields).every(el => el);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // VALIDATION FIXED
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter your Email");
      setIsLoading(false);
      return;
    }

    if (formFields.password === "") {
      context.openAlertBox("error", "Please enter your Password");
      setIsLoading(false);
      return;
    }

    // CALL LOGIN API
    postData("/api/user/login", formFields, { withCredentials: true })
      .then((res) => {
        if (res?.error === false) {

          context.openAlertBox("success", "Login Successfully.");

          // Store tokens only
          localStorage.setItem("accesstoken", res.data?.accesstoken);
          localStorage.setItem("refreshtoken", res.data?.refreshToKen);

          // store user email only if backend returns it
          if (res?.data?.email) {
            localStorage.setItem("userEmail", res.data.email);
          }

          context.setIsLogin(true);
          context.getUserDetails();

          setIsLoading(false);
          setFormFields({ email: '', password: '' });

          history("/");
        }
        else {
          context.openAlertBox("error", res?.message || "Invalid Credentials");
          setIsLoading(false);
        }
      });
  };

  // FORGOT PASSWORD FIXED
  const forgotPassword = () => {

    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter your Email");
      return;
    }

    context.openAlertBox("success", `OTP sent to ${formFields.email}`);

    // do NOT save userEmail here anymore
    localStorage.setItem("actionType", "forgot-password");

    postData("/api/user/forgot-password", { email: formFields.email })
      .then((res) => {
        if (res?.error === false) {
          history("/verify");
        } else {
          context.openAlertBox("error", res?.message);
        }
      });
  };

  // GOOGLE LOGIN FIXED
  const authWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {

        const user = result.user;

        const fields = {
          name: user?.displayName,
          email: user?.email,
          password: "null",
          avatar: user?.photoURL,
          mobile: user?.phoneNumber,
          signUpWithGoogle: true,
          role: "USER"
        };

        postData("/api/user/authWithGoogle", fields)
          .then((res) => {
            if (res?.error !== true) {

              context.openAlertBox("success", "Login Successfully.");

              // store tokens
              localStorage.setItem("accesstoken", res.data?.accesstoken);
              localStorage.setItem("refreshtoken", res.data?.refreshToKen);

              // store email from backend if provided
              if (res?.data?.email) {
                localStorage.setItem("userEmail", res.data.email);
              }

              context.setIsLogin(true);
              history("/");
            } else {
              context.openAlertBox("error", res?.message);
            }
          });
      })
      .catch((error) => {
        context.openAlertBox("error", "Google login failed");
      });
  };

  return (
    <section className="section py-10">
      <div className="px-7">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center mb-5 !font-bold text-[18px] text-black">Login to your account</h3>

          <form autoComplete="off" className="w-full mb-5" onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="form-group w-full mb-5">
              <TextField
              autoComplete="new-email"
                type='email'
                id="email"
                name="email"
                value={formFields.email}
                label="Email Id*"
                variant="outlined"
                className='w-full'
                onChange={onChangeInput}
              />
            </div>

            {/* PASSWORD */}
            <div className="form-group w-full mb-5 relative">
              <TextField
               autoComplete="new-password"
                type={isShowPassword ? 'text' : 'password'}
                id="password"
                name='password'
                value={formFields.password}
                label="Password*"
                variant="outlined"
                className='w-full'
                onChange={onChangeInput}
              />

              <Button
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !rounded-full !text-black"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? (
                  <IoEye className="text-[20px] opacity-75" />
                ) : (
                  <FaEyeSlash className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            {/* FORGOT PASSWORD */}
            <a className="link cursor-pointer text-[14px] font-[600]" onClick={forgotPassword}>
              Forgot Password?
            </a>

            {/* LOGIN BUTTON */}
            <div className="flex items-center w-full mt-3 mb-3">
              <Button type='submit' disabled={!validValue} className="btn-org btn-md w-full flex gap-3">
                {isLoading ? <CircularProgress color="inherit" /> : 'Login'}
              </Button>
            </div>

            <p className="text-center">
              Not Registered? <Link className="link text-[14px] font-[600] !text-primary" to="/register"> Sign Up</Link>
            </p>

            <p className="text-center font-[5] mb-3">Or continue with social account</p>

            <Button className="flex gap-3 w-full !mb-3 !bg-[#f1f1f1] btn-md !text-black"
              onClick={authWithGoogle}>
              <FcGoogle className="text-[20px]" /> Login with Google
            </Button>

            <Button className="flex gap-3 w-full !bg-[#f1f1f1] btn-md !text-black">
              <FaFacebook className="text-[20px]" /> Login with Facebook
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

