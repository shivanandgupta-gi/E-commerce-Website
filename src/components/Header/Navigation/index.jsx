import Button from '@mui/material/Button';
import React, { useContext, useEffect } from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoRocketOutline } from "react-icons/io5";
import { useState } from 'react';
import CategoryPanel from './CategoryPanel';
import { getDataWithouAuthintication } from '../../../../utils/api';
import { MyContext } from '../../../App';


const Navigation = () => {
    // for category panel that opens on click
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
    const [catData,setCatData]=useState([]); //it store all the data come from backend of category

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    };
    const context=useContext(MyContext);
    //backend to see hover over product name  in home page
    //to fectch the data from backend and shown in home category 
    useEffect(()=>{
        setCatData(context.catData); //set data 
    },[context.catData])
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
            {/* to show category by dynamicaaly */} 
            {
                catData.length > 0 && catData.map((cat,index)=>(
                    <li className=" list-none relative group " key={index}>
                        <Link
                            to="/" className="link transition text-[14px] font-[500] hover:text-[#ff5252] !py-4 "
                        >
                            {cat.name}
                        </Link>
 
                        {/* this is for showing things when hover over the  fashion */}
                        {/* Show submenu only on hover and make it dynamically */}
                        {
                            cat.children.length >0 && 
                             <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0   z-[9999] transition-all">
                                <ul>
                                      {/* Show submenu only on hover and make it dynamically if sub category present in category */}
                                    {
                                        cat.children.map((subCat,index)=>(
                                            <li className="list-none w-full relative" key={index}>
                                                <Link to="/" className='w-full'>
                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">{subCat.name}</Button>
                                                {/* when click on fashion then men open and then click on men then many category open */}
                                                </Link>
                                                {/* it for showing third level sub category */}
                                                {
                                                    subCat.children.length > 0 &&
                                                    <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 hidden group-hover:block   z-[9999] transition-all">
                                                        <ul>
                                                            {
                                                                subCat.children.map((thirdSubData,index)=>(
                                                                    <li className="list-none w-full" key={index}>
                                                                        <Link to="/" className='w-full'>
                                                                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none">{thirdSubData.name}</Button>
                                                                        </Link>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                }
                                                </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        }
                        </li>
                ))
            }
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
     {
        catData.length>0 &&
         <CategoryPanel
            openCategoryPanel={openCategoryPanel}
            isOpenCatPanel={isOpenCatPanel}
            setIsOpenCatPanel={setIsOpenCatPanel}
            data={catData}
            />
     }
    </>
  );
};

export default Navigation;