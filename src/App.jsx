import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/index.jsx';
import Home from './Pages/Home/index.jsx';
import ProductListing from './Pages/ProductListing/index.jsx';
import Footer from './components/Footer/index.jsx';
import ProductDetails from './Pages/ProductDetails/index.jsx';
import { createContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { RxCross2 } from "react-icons/rx";
import ProductZoom from './components/ProductZoom/index.jsx';
import ProductDetailsOnScreen from './components/productDetailsOnScreen/index.jsx';
import Login from './Pages/Login/index.jsx';
import Register from './Pages/Register/index.jsx';
import Cart from './Pages/Cart/index.jsx';
import CheckOut from './Pages/CheckOut/index.jsx';
import MyAccount from './components/MyAccount/index.jsx';
import MyList from './Pages/MyList/index.jsx';
import Order from './Pages/Order/index.jsx';
import toast, { Toaster } from 'react-hot-toast';
import VerifyOTP from './Pages/VerifyOTP/index.jsx';
import { getAddressFromServer, getData, getDataWithouAuthintication, postData } from '../utils/api.js';
import ChangePass from './Pages/ChangePassword/index.jsx';
import Address from './Pages/address/index.jsx';
import SuccessOrder from './Pages/Order/success.jsx';
import SearchHome from './Pages/SearchHome/index.jsx';
import BlogDetails from './components/BlogItem/BlogDetails.jsx';


const MyContext = createContext();



function App() {
  const [open, setOpen] = useState({
    open:false,
    item:{}
  });
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [fullWidth, setFullWidth] = React.useState(true);
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [openAddressPanel, setOpenAddressPanel] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);//for user name and password shown on profile
  const [catData,setCatData]=useState([]); //it store all the data come from backend of category
  const [cartData,setCartData]=useState([]); //it store all the data come from backend of cart
  const [myListData,setMyListData]=useState([]); //it store all the data come from backend of my list
  const [addressData,setAddressData]=useState([]); //it store all the data come from backend of address
  const apiUrl = import.meta.env.VITE_API_URL; //url paased 
  const handleClose = () => {
    setOpen({
      open:false,
      item:{}
    });
  };

  const handleOpen = (status,item) => {
    setOpen({
      open:status,
      item:item
    });
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };
  const toggleAddressPanel = (newOpen) => () => {
    setOpenAddressPanel(newOpen);
  };
  //for login user show logo or user profile or not 
 
  useEffect(() => {
    const token = localStorage.getItem('accesstoken');
    if (token !== undefined && token !== null && token !== '') {
      setIsLogin(true);
      getUserDetails();
      getCartData();
      getMyListData();
    }
    else {
      setIsLogin(false);
    }
  }, [isLogin])

  useEffect(() => {
  fetchAddressData();
  }, [userData]); // only runs when userData changes

  //for getting user details
  const getUserDetails = () => {
        const token = localStorage.getItem('accesstoken');
     getData('/api/user/user-details', token).then((res) => {
        setUserData(res.data);
      })
  }

  //for getting address data
  const fetchAddressData = async () => {
  if (!userData?._id) return; // wait until userData is available
  try {
    const res = await getAddressFromServer(userData._id);
    if (!res.error) {
      setAddressData(res.data || []); // set the addresses
    }
  } catch (err) {
    console.error("fetchAddressData error:", err);
  }
};
 
  //for fetching category  this is source from here it goes every weherw
  useEffect(() => {
    getDataWithouAuthintication("/api/category/getcategory").then((res) => { //api to get data
      if (res?.error === false) {
        setCatData(res.categories); //set data 
      }
    })
  }, [])
  //toster function
  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    else if (status === "error") {
      toast.error(msg);
    }
  }

  //cart function to add in cart
  const addToCart = (product, userId ,quantity) => {
    //create object of data of cart
    const data={ 
      productTitle: product.name,
      image: product.images[0],
      rating: product.rating,
      price: product.price,
      subTotal: parseInt(product.price * quantity),
      countInStock: product.countInStock,
      productId: product._id,
      userId: userId,
      quantity: quantity,
    }
    //post the cart data to the backend
    postData('/api/cart/create', data).then((res) => { //to post the cart data
      if (res?.error === false) {
        openAlertBox("success", res?.message);
      //after add to cart get the cart data
    getCartData();
      }
      else {
        openAlertBox("error", res?.message);
      }
    });
  }

  //fetch the cart data after add to cart
  const getCartData=()=>{
     getData('/api/cart/get').then((res) => {
      if (res?.error === false) {
        setCartData(res?.data);
      }
    });
  }

  const getMyListData=()=>{
    getData('/api/myList/get').then((res) => {
     if (res?.error === false) {
       setMyListData(res?.data);
     }
    }
  )
}
  //this for the searching data like name , product etc in home page
  const [searchData, setSearchData]=useState("")

 
  const values = {
    setOpen,
    handleOpen,
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel,
    isLogin,
    setIsLogin,
    openAlertBox,
    setUserData,
    userData,
    setCatData,catData,
    addToCart ,cartData,
    getCartData,setCartData,
    myListData,getMyListData,setMyListData,
    toggleAddressPanel, openAddressPanel,setOpenAddressPanel,
    getUserDetails,addressData,setAddressData,
    setSearchData,searchData
  }


  return (
    <>
      <BrowserRouter>
        {/* this value passed in every component and can used by them */}
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/productListing"}  element={<ProductListing />} />
            <Route path={"/product/:id"}  element={<ProductDetails />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            {/* thsi is for the cart view  */}
            <Route path={"/cart"} exact={true} element={<Cart />} />
            {/* thsi is for address add and proceed to pay button on cart drawer */}
            <Route path={"/pay"} exact={true} element={<CheckOut />} />
            {/* thsi is for the my-account profile componenet open when click on the my profile icon */}
            <Route path={"/my-account"} exact={true} element={<MyAccount />} />
            {/* this is for the my list in account section */}
            <Route path={"/my-list"} exact={true} element={<MyList />} />
            {/* order Pages */}
            <Route path={"/my-order"} exact={true} element={<Order/>} />
            <Route path={'/verify'} exact={true} element={<VerifyOTP />} />
            <Route path={"/change-pass"} exact={true} element={<ChangePass />} />
            <Route path={"/address"} exact={true} element={<Address/>} />
            <Route path={"/pay/success"} exact={true} element={<SuccessOrder/>} />
            <Route path={"/search"} exact={true} element={<SearchHome/>} />
            <Route path={"/blog/:id"} exact={true} element={<BlogDetails/>} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      {/* this is for the product view on the screen or open new page 
      ->open state store all the data*/}
      <Dialog
        open={open.open}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailModel'
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute !top-[15px] !right-[13px] !bg-[#f1f1f1]"
              onClick={handleClose}
            >
              <RxCross2 className='text-[20px]' />
            </Button>
            <div className="col1 w-[40%] px-3 py-4">
               {open?.item?.images ? (
                  <ProductZoom images={open.item.images} />
                ) : null}
            </div>

            <div className='col2 w-[60%] py-8 px-8 pr-16 productContent'>
              <ProductDetailsOnScreen data={open.item}/>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* cart panel this is for the drawer like open on shop cart to open how mant item we selected and how many amount to pay  */}
      {/* Cart Panel */}
      {/* this is for notification like done */}
      <Toaster />

    </>
  )
}

export default App;
export { MyContext };

