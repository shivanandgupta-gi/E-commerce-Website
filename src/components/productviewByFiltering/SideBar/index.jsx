//this is for the side panel when open the 
//product list like men then open price range
//filter , sort , price range , rating , brand , category etc

import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './index.css';
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';
import { FaAngleUp } from "react-icons/fa";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


const SideBar=() =>{
  const [open, setOpen] = useState(true);
  const [openAvailable, setOpenAvailable] = useState(true);
  const [opensize,setopensize]=useState(true);
  const [openRating,setOpenRating]=useState(true);

  return (
    <aside className='sidebar py-5'>
      <div className='box '> 
        <h3 className=' w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Shop by Category
          <Button className='!w-[30px] !h-[30px]  !min-w-[30px] !rounded-full !ml-auto !text-[#000]' onClick={()=>{setOpen(!open)}}>
            {
              open === true ? <FaAngleUp/> : <FaAngleDown/>
            }
            </Button>
        </h3>
        <Collapse isOpened={open}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size="small"/>} label="Fashion" className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small"/>} label="Electronics" className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small"/>} label="Bags" className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small"/>} label="Footwear" className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small"/>} label="Groceries" className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small"/>} label="Jewellery" className="w-full" size="small" />
          </div>
        </Collapse> 

      </div>

      {/* latest Checkbox  */}
      <div className='box mt-2 '> 
        <h3 className=' w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Latest
          <Button className='!w-[30px] !h-[30px]  !min-w-[30px] !rounded-full !ml-auto !text-[#000]' onClick={()=>{setOpenAvailable(!openAvailable)}}>
            {
              openAvailable === true ? <FaAngleUp/> : <FaAngleDown/>
            }
            </Button>
        </h3>
        <Collapse isOpened={openAvailable}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size="small"/>} label="Available   (17)" className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small"/>} label="In Stock   (25)" className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small"/>} label="NotAvailable   (10)" className="w-full" size="small" />
          </div>
        </Collapse> 

      </div>

      {/* size section */}
      <div className='box mt-2'> 
        <h3 className=' w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Size
          <Button className='!w-[30px] !h-[30px]  !min-w-[30px] !rounded-full !ml-auto !text-[#000]' onClick={()=>{setopensize(!opensize)}}>
            {
              opensize === true ? <FaAngleUp/> : <FaAngleDown/>
            }
            </Button>
        </h3>
        <Collapse isOpened={opensize}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size="small"/>} label="Small   (17)" className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small"/>} label="Medium   (25)" className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small"/>} label="Large   (10)" className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small"/>} label="XL   (10)" className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small"/>} label="XLL   (10)" className="w-full" size="small" />
          </div>
        </Collapse> 

      </div>  

      {/* price tag */}
        <div className='box mt-2 '> 
        <h3 className=' w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Filter By Price</h3>

        <RangeSlider
        />

        <div className="flex pt-4 pb-2 priceRange">
          <span className='text-[13px]'>
            From: <strong className="text-dark">Rs: {100}</strong>
          </span>
          <span className="ml-auto text-[13px]">
            To: <strong className="text-dark">Rs: {500}</strong>
          </span>
        </div>
        </div>

      {/* shop by rating */}
      <div className='box mt-2'> 
        <h3 className=' w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Customer Ratings
          <Button className='!w-[30px] !h-[30px]  !min-w-[30px] !rounded-full !ml-auto !text-[#000]' onClick={()=>{setOpenRating(!openRating)}}>
            {
              openRating === true ? <FaAngleUp/> : <FaAngleDown/>
            }
            </Button>
        </h3>
        <Collapse isOpened={openRating}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size="small"/>} label="4★ & above   " className="w-full" size="small" />
            <FormControlLabel control={<Checkbox size="small"/>} label="4★ & above " className="w-full" size="small" />
          </div>
        </Collapse> 

      </div>  
      </aside>
  )
}

export default SideBar;
