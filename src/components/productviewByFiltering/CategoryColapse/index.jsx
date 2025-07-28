import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiSquareMinus } from "react-icons/ci";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
//this is for the category sectiion same as navigation panel categoryPanel in home shop by category.
const CategoryColapse=() =>{
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
            <li className="list-none flex items-center relative flex-col">
              <Link to="/" className="links w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Fashion</Button>
              </Link>
              {
                submenuIndex === 0 ?
                  <CiSquareMinus className="absolute top-[10px] right-[15px] cursor-pointer " onClick={()=>{openSubmenu(0)}} />
                  :
                  <CiSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer " onClick={()=>{openSubmenu(0)}} />
              }
              
            {
              submenuIndex === 0 && 
              <ul className="submenu  w-full pl-3 ">
                <li className="relative list-none mb-1">
                  <Link to="/" className="links w-full">
                 <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Girls</Button>
                 </Link>
                 {
                  innerSubmenuIndex === 0 ?
                      <CiSquareMinus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>{openInnerSubmenu(0)}}/>
                      :
                      <CiSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>{openInnerSubmenu(0)}}/>
                 }
                    
                {
                  innerSubmenuIndex === 0 &&
                      <ul className="inner_submenu  w-full pl-3  ">
                  <li className="relative list-none mb-1 ">
                  <Link to={"/"} className=" hover:!text-[#ff5252] w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Kurtas & Suits</Link>
                    </li>
                    <li className="relative list-none mb-1">
                  <Link to={"/"} className=" hover:!text-[#ff5252] w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Sarees</Link>
                    </li>
                    <li className="relative list-none mb-1">
                  <Link to={"/"} className=" hover:!text-[#ff5252] w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Tops</Link>
                    </li>
                    <li className="relative list-none mb-1">
                  <Link to={"/"} className=" hover:!text-[#ff5252] w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Kurta Sets</Link>
                    </li>
                </ul> 
                }  
                  </li>
              </ul>
            }
            
            </li>

            <li className="list-none flex items-center relative flex-col">
              <Link to="/" className="links w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Fashion</Button>
              </Link>
              {
                submenuIndex === 1 ?
                  <CiSquareMinus className="absolute top-[10px] right-[15px] cursor-pointer " onClick={()=>{openSubmenu(1)}} />
                  :
                  <CiSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer " onClick={()=>{openSubmenu(1)}} />
              }
              
            {
              submenuIndex === 1 && 
              <ul className="submenu w-full pl-3 ">
                <li className="relative list-none mb-1">
                  <Link to="/" className="links w-full">
                 <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Girls</Button>
                 </Link>
                 {
                  innerSubmenuIndex === 1 ?
                      <CiSquareMinus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>{openInnerSubmenu(1)}}/>
                      :
                      <CiSquarePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>{openInnerSubmenu(1)}}/>
                 }
                    
                {
                  innerSubmenuIndex === 1 &&
                      <ul className="inner_submenu  w-full pl-3 ">
                  <li className="relative list-none mb-1">
                  <Link to={"/"} className=" hover:!text-[#ff5252] w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Kurtas & Suits</Link>
                    </li>
                    <li className="relative list-none mb-1">
                  <Link to={"/"} className=" hover:!text-[#ff5252] w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Sarees</Link>
                    </li>
                    <li className="relative list-none mb-1">
                  <Link to={"/"} className=" hover:!text-[#ff5252] w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Tops</Link>
                    </li>
                    <li className="relative list-none mb-1">
                  <Link to={"/"} className=" hover:!text-[#ff5252] w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Kurta Sets</Link>
                    </li>
                </ul> 
                }  
                  </li>
              </ul>
            }
            
            </li>
          </ul>
        </div>
    </>
  )
}

export default CategoryColapse;