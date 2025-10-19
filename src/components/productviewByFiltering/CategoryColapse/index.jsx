import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiSquareMinus } from "react-icons/ci";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
//this is for the category sectiion same as navigation panel categoryPanel in home shop by category.
const CategoryColapse=(props) =>{
   const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

   const openSubmenu = (i) => {
    setSubmenuIndex(submenuIndex === i ? null : i);
  };

  const openInnerSubmenu = (i) => {
    setInnerSubmenuIndex(innerSubmenuIndex === i ? null : i);
  };

  
  return (
    <>
        <div className="scroll">
          <ul className="w-full">
            {/* for making dynamic to the sidebar same as navigtion panel */}
            {
              props.data.length > 0 && props.data.map((cat,index)=>(
                 <li className="list-none flex items-center relative flex-col" key={index}>
                  <Link to="/" className="links w-full">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,1)] ">{cat.name}</Button>
                  </Link>
                  {
                    submenuIndex === index ?
                      <CiSquareMinus className="absolute top-[10px] right-[15px] cursor-pointer text-[600] " onClick={()=>{openSubmenu(index)}} />
                      :
                      <CiSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer " onClick={()=>{openSubmenu(index)}} />
                  }
                  
                {
                  submenuIndex === index && 
                  <ul className="submenu  w-full pl-3 ">
                    {
                        cat.children.length >0 &&  cat.children.map((subCat,index)=>(
                          <li className="relative list-none mb-1" key={index}>
                            <Link to="/" className="links w-full">
                          <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">{subCat.name}</Button>
                          </Link>
                          {
                            innerSubmenuIndex === index ?
                                <CiSquareMinus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>{openInnerSubmenu(index)}}/>
                                :
                                <CiSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>{openInnerSubmenu(index)}}/>
                          }
                              
                          {
                            innerSubmenuIndex === index &&
                                <ul className="inner_submenu  w-full pl-3  ">
                                  {
                                    subCat.children.length > 0 &&  subCat.children.map((thirdSubData,index)=>(
                                      <li className="relative list-none mb-0.5 " key={index}>
                                        <Link to={"/"} className=" hover:!text-[#ff5252] w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">{thirdSubData.name}</Link>
                                      </li>
                                    ))
                                  }
                    </ul> 
                    }  
                      </li>
                        ))
                    }
                  </ul>
                }
                
                </li>
              ))
            }
          </ul>
        </div>
    </>
  )
}

export default CategoryColapse;