import React, { useState } from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/index.jsx';
import Home from './Pages/Home/index.jsx';
import ProductListing from './Pages/ProductListing/index.jsx';
import Footer from './components/Footer/index.jsx';
import ProductDetails from './Pages/ProductDetails/index.jsx';
import { createContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { RxCross2 } from "react-icons/rx";
import ProductZoom from './components/ProductZoom/index.jsx';
import ProductDetailsOnScreen from './components/productDetailsOnScreen/index.jsx';
import Login from './Pages/Login/index.jsx';
import Register from './Pages/Register/index.jsx';



const MyContext=createContext();

  

function App() {
  const [open, setOpen] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [fullWidth, setFullWidth] = React.useState(true);
  const [openCartPanel, setOpenCartPanel] =useState(false);

  const handleClose = () => {
    setOpen(false);
    };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
    
  };
  
  const values={
  setOpen,
  setOpenCartPanel,
  openCartPanel,
  toggleCartPanel
  }


  return (
    <>
      <BrowserRouter>
      <MyContext.Provider value={values}>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/productListing"} exact={true} element={<ProductListing/>}/>
        <Route path={"/product/:id"} exact={true} element={<ProductDetails/>}/>
        <Route path={"/login"} exact={true} element={<Login/>}/>
        <Route path={"/register"} exact={true} element={<Register/>}/>
      </Routes>
      <Footer/>
      </MyContext.Provider>
      </BrowserRouter>
{/* this is for the product view on the screen or open new page */}
        <Dialog
        open={open}
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
                <RxCross2 className='text-[20px]'/>
              </Button>
              <div className="col1 w-[40%] px-3">
                <ProductZoom/>
              </div>

              <div className='col2 w-[60%] py-8 px-8 pr-16 productContent'>
                <ProductDetailsOnScreen/>
                </div> 
            </div>
        </DialogContent>
      </Dialog>

      {/* cart panel this is for the drawer like open on shop cart to open how mant item we selected and how many amount to pay  */}
        {/* Cart Panel */}


    </>
  )
}

export default App;
export {MyContext};
