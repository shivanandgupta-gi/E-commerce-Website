import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
// this is for the qunatity adding on the product 

export default function QuantatyBox() {

  const [quantVal , setquantVal]=useState(1);
  const plusqun=()=>{
    setquantVal(quantVal+1)
  }
  const minusqun=()=>{
    if(quantVal === 1){
    setquantVal(1);
    }
    else setquantVal(quantVal-1);
  }

  return (
     <div className="qtyBox flex items-center relative">
        <input
          type="number"
          className=" pl-5 w-full h-[40px] p-2 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md
          "
          value={quantVal}
        />

      <div className="flex items-center flex-col justify-between h-[14px] absolute top-0 right-0 z-50">
        <Button className="!min-w-[25px] !w-[25px] !h-[20px] !text-[#000] !rounded-none hover:!bg-[#f1f1f1]" onClick={plusqun}>
          <FaAngleUp className='text-[12px] opacity-55' />
        </Button>
        <Button className="!min-w-[25px] !w-[25px] !h-[20px] !text-[#000] !rounded-none hover:!bg-[#f1f1f1]" onClick={minusqun}>
          <FaAngleDown className='text-[12px] opacity-55' />
        </Button>
      </div>


      </div>
  )
}
