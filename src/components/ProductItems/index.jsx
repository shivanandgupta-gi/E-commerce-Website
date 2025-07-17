import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';


// this is for all(one product ) the product details page like how product look like
const ProductItems=()=> {
  return (
     <div className="productItem shadow-lg  rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
      <div className="group imgWrapper w-[100%] h-[220px] overflow-hidden rounded-md relative ">
        <Link to="/">
        <div className='img h-[220px] overflow-hidden'>
        <img src="https://serviceapi.spicezgold.com/download/1742462485033_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp"  className="w-full" />
        <img src="https://serviceapi.spicezgold.com/download/1742462485037_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-2-202304220521.webp"  className="w-full transition-all duration-500 absolute top-0 left-0 opacity-0 group-hover:opacity-100" />
        </div>
        </Link>
        <span className='discount flex items-center absolute top-[10px] left[10px] z-50 bg-primary rounded-md text-[12px] p-1 px-2 font-[500]'>-55%</span>
        {/* this is for save later add to cart buttton on image */}
        <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px]
                        transition-all duration-300 group-hover:top-[15px]'>
             <Tooltip title="View" placement="left-start">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text text-black  hover:!bg-[#ff5252] hover:text-white group'>
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
      <div className="info p-3 py-5  ">
        <h6 className="text-[13px]"><Link to="/" className='link  hover:text-[#ff5252] transition-all'>Soylent Green</Link></h6>
        <h3 className="text-[14px] title mt-1 font-[500] mb-1 text-[#000]">
            <Link to="/" className='link  hover:text-[#ff5252] transition-all'>
            Siril Georgette Pink Color Saree with Blouse Piece</Link>
        </h3>
        <Rating name="size-medium" defaultValue={4} readOnly />

        {/* for price */}
        <div className='flex items-center gap-4'>
            <span className='oldPrice line-through text-gray-500 text-[16px] font-[500]'>Rs.5000</span>
            <span className='oldPrice text-primary font-[600] text-[16px]'>Rs.2000</span>
        </div>
      </div>
    </div>

  )
}

export default ProductItems;
