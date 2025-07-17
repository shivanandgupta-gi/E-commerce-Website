import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const BlogItem=() =>{
  return (
    <div className='blogItems px-5  group'>
    <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
    <img
        src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/8/1105_813/b-blog-6.jpg"
        className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
        alt="blog image"
    />
    <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
        <IoMdTime className="text-[16px]" /> 5 APRIL, 2023
    </span>
    </div>
    <div className="info py-4">
        <h2 className='text-[15px] font-[600] text-black'>
            <Link to="/" className='hover:text-[#ff5252] '>Where does it come from?</Link>
        </h2>
        <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
            classical Latin literature from 45 BC, making it over 2000
             years old ......</p>

             <Link to="/" className='link hover:text-[#ff5252] font-[500] text-[14px] flex items-center gap-1'>Read More <IoIosArrowForward/></Link>
    </div>
    </div>

  )
}

export default BlogItem;
