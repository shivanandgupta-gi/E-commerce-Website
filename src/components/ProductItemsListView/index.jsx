import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './index.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import { FaShoppingCart } from "react-icons/fa";
import { MyContext } from '../../App';



// this is for all(one product ) the product details page like how product look like
const ProductItems=({ item })=> {

  //redux used on click open it
  const context=useContext(MyContext);

  return (
     <div className="productItem shadow-lg  rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]
     flex items-center">
      <div className="group imgWrapper w-[25%] h-[220px] overflow-hidden rounded-md relative ">
        <Link to="/">
        <div className='img  overflow-hidden'>
        <img src={item?.images[0]}  className="w-full" />
        <img src={item?.images[1]}  className="w-full transition-all duration-500 absolute top-0 left-0 opacity-0 group-hover:opacity-100" />
        </div>
        </Link>
        <span className='discount flex items-center absolute top-[10px] left[10px] z-50 bg-primary rounded-md text-[12px] p-1 px-2 font-[500]'>-{item.discount}%</span>
        {/* this is for save later add to cart buttton on image */}
        <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px]
                        transition-all duration-300 group-hover:top-[15px]'>
             <Tooltip title="View" placement="left-start">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text text-black  hover:!bg-[#ff5252] hover:text-white group' onClick={()=>{context.setOpen(true)}}>
                <MdOutlineZoomOutMap className='text-[18px] !text-black group-hover:text-white'/>
            </Button>
            </Tooltip> 
            <Tooltip title="Compare" placement="left-start">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text text-black  hover:!bg-[#ff5252] hover:text-white group'>
                <IoIosGitCompare  className='text-[18px] !text-black group-hover:text-white'/>
            </Button>
            </Tooltip>
            <Tooltip title="Wishlist" placement="left-start">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text text-black  hover:!bg-[#ff5252] hover:text-white group'>
                <CiHeart className='text-[18px] !text-black group-hover:text-white'/>
            </Button>
            </Tooltip>

        </div> 
      </div>
      <div className="info p-3 py-5 px-8  w-[75%] s">
        <h6 className="text-[15px]"><Link to="/" className='link  hover:text-[#ff5252] transition-all'>{item.brand}</Link></h6>
        <h3 className="text-[17px] title mt-1 mb-1 font-[500]  text-[#000]">
            <Link to={`product/${item._id}`} className='link  hover:text-[#ff5252] transition-all'>
            {item.name}</Link>
        </h3>
        <p className="text-[13px] mb-2  line-clamp-3">
         {item.description}
        </p>
        <Rating name="size-small" size='small' defaultValue={item.rating} readOnly />

        {/* for price */}
        <div className='flex items-center gap-4'>
            <span className='oldPrice line-through text-gray-500 text-[16px] font-[500]'>₹{Number(item.oldPrice).toLocaleString('en-IN')}</span>
            <span className='oldPrice text-primary font-[600] text-[16px]'>₹{Number(item.price).toLocaleString('en-IN')}</span>
        </div>

        {/* add to cart button */}
        <div className="mt-2">
          <Button size='small' className="btn-org flex gap-2"><FaShoppingCart
          className='text-[20px]'/>Add to Cart</Button>
        </div>
      </div>
    </div>

  )
}

export default ProductItems;
