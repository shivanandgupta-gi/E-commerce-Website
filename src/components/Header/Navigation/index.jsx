import Button from '@mui/material/Button';
import React from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoRocketOutline } from "react-icons/io5";
import { useState } from 'react';
import CategoryPanel from './CategoryPanel';


const Navigation = () => {
    // for category panel that opens on click
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    };
  return (
    <>
    <nav >
      <div className='px-8 flex items-center justify-end gap-9 '>
        {/* for list bar */}
        <div className='col_1 w-[20%] mr-auto '>
          <Button className='!text-black gap-2 w-full font-semibold' onClick={openCategoryPanel}>
            <RiMenu2Fill className='text-[18px] '/>Shop By Categories
            <FaAngleDown className='text-[13px] ml-auto font-bold '/>
          </Button>
        </div>

        {/* Additional content can go here like home*/}

        <div className='col_2 w-[65%]'>
           <ul className="flex items-center gap-5 nav">
            <li className="list-none">
            <Link
                to="/" className="link transition text-[14px] font-[500] hover:text-[#ff5252] !py-4"
            >
                Home
            </Link>
            </li>
            <li className=" list-none relative group ">
            <Link
                to="/" className="link transition text-[14px] font-[500] hover:text-[#ff5252] !py-4 "
            >
                Fashion
            </Link>

            {/* this is for showing things when hover over the  fashion */}
              {/* Show submenu only on hover */}
                 <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0   z-10 transition-all">
                    <ul>
                        <li className="list-none w-full relative">
                        <Link to="/" className='w-full'>
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">Men</Button>
                        {/* when click on fashion then men open and then click on men then many category open */}
                        </Link>
                         <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0   z-10 transition-all">
                    <ul>
                        <li className="list-none w-full">
                        <Link to="/" className='w-full'>
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">Men</Button>
                        </Link>
                        </li>
                         <li className="list-none w-full">
                            <Link to="/" className='w-full'>
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">Women</Button>
                        </Link>
                        </li>
                         <li className="list-none w-full">
                            <Link to="/" className='w-full'>
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">Kids</Button>
                        </Link>
                        </li>
                         <li className="list-none w-full">
                            <Link to="/" className='w-full'>
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">Girl</Button>
                        </Link>
                        </li> 
                         <li className="list-none w-full">
                            <Link to="/" className='w-full'>
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">Boys</Button>
                        </Link>
                        </li>
                    </ul>
                </div>
                        </li>
                         <li className="list-none w-full">
                            <Link to="/" className='w-full'>
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">Women</Button>
                        </Link>
                        </li>
                         <li className="list-none w-full">
                            <Link to="/" className='w-full'>
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">Kids</Button>
                        </Link>
                        </li>
                         <li className="list-none w-full">
                            <Link to="/" className='w-full'>
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">Girl</Button>
                        </Link>
                        </li> 
                         <li className="list-none w-full">
                            <Link to="/" className='w-full'>
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">Boys</Button>
                        </Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="list-none">
            <Link
                to="/" className="link transition text-[14px] font-[500] hover:text-[#ff5252] !py-4"
            >
                Electronics
            </Link>
            </li>
            <li className="list-none">
            <Link
                to="/" className="link transition text-[14px] font-[500] hover:text-[#ff5252] !py-4"
            >
                Bags
            </Link>
            </li>
            <li className="list-none">
            <Link
                to="/" className="link transition text-[14px] font-[500] hover:text-[#ff5252] !py-4"
            >
                Footwear
            </Link>
            </li>
            <li className="list-none">
            <Link
                to="/" className="link transition text-[14px] font-[500] hover:text-[#ff5252] !py-4"
            >
                Groceries
            </Link>
            </li>
            <li className="list-none">
            <Link
                to="/" className="link transition text-[14px] font-[500] hover:text-[#ff5252] !py-4"
            >
                Beauty
            </Link>
            </li>
            <li className="list-none">
            <Link
                to="/" className="link transition text-[14px] font-[500] hover:text-[#ff5252] !py-4"
            >
                Wellness
            </Link>
            </li>
        {/* You can add more list items here */}
      </ul>

        </div>
         
         <div className="col_3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
                <IoRocketOutline className="text-[18px]" />
                Free International Delivery
            </p>
    </div>  
    </div>
    </nav>
     
     {/* category panel component */}
    <CategoryPanel
    openCategoryPanel={openCategoryPanel}
    isOpenCatPanel={isOpenCatPanel}
    setIsOpenCatPanel={setIsOpenCatPanel}
    />

    </>

  );
};

export default Navigation;