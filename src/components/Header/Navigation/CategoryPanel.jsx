import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import './index.css';
import { CiSquareMinus } from "react-icons/ci";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (i) => {
    setSubmenuIndex(submenuIndex === i ? null : i);
  };

  const openInnerSubmenu = (i) => {
    setInnerSubmenuIndex(innerSubmenuIndex === i ? null : i);
  };

  return (
    <Drawer
      anchor="left"
      open={props.isOpenCatPanel}
      onClose={toggleDrawer(false)}
      sx={{ '& .MuiDrawer-paper': { width: 280, overflow: 'visible' } }}
    >
      <div className="relative h-full bg-white p-4">
        <div className="flex justify-between items-center text-lg font-semibold mb-4">
          Shop by Categories
          <IoCloseSharp
            className="text-xl cursor-pointer"
            onClick={toggleDrawer(false)}
          />
        </div>

        <ul className="relative space-y-2">
          <li className="relative">
            <div className="flex items-center justify-between">
              <p className="font-medium">Fashion</p>
              
              {/* IT IS FOR SHOWING + AND -  */}
              {submenuIndex === 0 ? (
                          <CiSquareMinus
                            className="absolute top-[10px] right-[15px] cursor-pointer"
                            onClick={() => openSubmenu(0)}
                          />
                        ) : (
                          <CiSquarePlus
                            className="absolute top-[10px] right-[15px] cursor-pointer"
                            onClick={() => openSubmenu(0)}
                          />
                        )}
            </div>

            {/* Submenu */}
            {submenuIndex === 0 && (
              <ul className="bg-gray-100 mt-2 p-2 rounded shadow">
                <li className="relative">
                  <div className="flex items-center justify-between">
                    <p className="ml-2">Apparel</p>
                    {innerSubmenuIndex === 0 ? (
                          <CiSquareMinus
                            className="absolute top-[10px] right-[15px] cursor-pointer"
                            onClick={() => openInnerSubmenu(0)}
                          />
                        ) : (
                          <CiSquarePlus
                            className="absolute top-[10px] right-[15px] cursor-pointer"
                            onClick={() => openInnerSubmenu(0)}
                          />
                        )}

                  </div>

                  {/* Inner submenu */}
                  {innerSubmenuIndex === 0 && (
                    <ul className="ml-4 mt-2 space-y-1  text-gray-700">
                        <li className="ml-[5px] hover:text-[#ff5252]">
                          <Link to="/">Smart Watch</Link>
                        </li>
                        <li className="ml-[5px] hover:text-[#ff5252]">
                          <Link to="/">Crepe T-shirt</Link>
                        </li>
                        <li className="ml-[5px] hover:text-[#ff5252]">
                          <Link to="/">Leather Watch</Link>
                        </li>
                        <li className="ml-[5px] hover:text-[#ff5252]">
                          <Link to="/">Rolling Diamond</Link>
                        </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>

         <ul className="relative space-y-2">
          <li className="relative">
            <div className="flex items-center justify-between">
              <p className="font-medium hover:text-[#ff5252]">Jewellery</p>
              </div>
              </li>
          </ul>

          <ul className="relative space-y-2">
          <li className="relative">
            <div className="flex items-center justify-between">
              <p className="font-medium hover:text-[#ff5252]">Watches</p>
              </div>
              </li>
          </ul>

          <ul className="relative space-y-2">
          <li className="relative">
            <div className="flex items-center justify-between">
              <p className="font-medium hover:text-[#ff5252]">Cosmetics</p>
              </div>
              </li>
          </ul>
            
        <ul className="relative space-y-2">
          <li className="relative">
            <div className="flex items-center justify-between">
              <p className="font-medium">Outwear</p>
              
              {/* IT IS FOR SHOWING + AND -  on button*/}
              {submenuIndex === 1 ? (
                          <CiSquareMinus
                            className="absolute top-[10px] right-[15px] cursor-pointer"
                            onClick={() => openSubmenu(1)}
                          />
                        ) : (
                          <CiSquarePlus
                            className="absolute top-[10px] right-[15px] cursor-pointer"
                            onClick={() => openSubmenu(1)}
                          />
                        )}
            </div>

            {/* Submenu */}
            {submenuIndex === 1 && (
              <ul className="bg-gray-100 mt-2 p-2 rounded shadow">
                <li className="relative">
                  <div className="flex items-center justify-between">
                    <p className="ml-2">Apparel</p>
                    {innerSubmenuIndex === 1 ? (
                          <CiSquareMinus
                            className="absolute top-[10px] right-[15px] cursor-pointer"
                            onClick={() => openInnerSubmenu(1)}
                          />
                        ) : (
                          <CiSquarePlus
                            className="absolute top-[10px] right-[15px] cursor-pointer"
                            onClick={() => openInnerSubmenu(1)}
                          />
                        )}

                  </div>

                  {/* Inner submenu */}
                  {innerSubmenuIndex === 1 && (
                    <ul className="ml-4 mt-2 space-y-1  text-gray-700">
                        <li className="ml-[5px] hover:text-[#ff5252]">
                          <Link to="/">Mens</Link>
                        </li>
                        <li className="ml-[5px] hover:text-[#ff5252]">
                          <Link to="/">Women</Link>
                        </li>
                        <li className="ml-[5px] hover:text-[#ff5252]">
                          <Link to="/">Kids</Link>
                        </li>
                        <li className="ml-[5px] hover:text-[#ff5252]">
                          <Link to="/">Small child</Link>
                        </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>

        <ul className="relative space-y-2">
          <li className="relative">
            <div className="flex items-center justify-between">
              <p className="font-medium hover:text-[#ff5252]">Accessories</p>
              </div>
              </li>
          </ul>

          <ul className="relative space-y-2">
          <li className="relative">
            <div className="flex items-center justify-between">
              <p className="font-medium hover:text-[#ff5252]">Electronics</p>
              </div>
              </li>
          </ul>

          <ul className="relative space-y-2">
          <li className="relative">
            <div className="flex items-center justify-between">
              <p className="font-medium hover:text-[#ff5252]">Furniture</p>
              </div>
              </li>
          </ul>

          <ul className="relative space-y-2">
          <li className="relative">
            <div className="flex items-center justify-between">
              <p className="font-medium hover:text-[#ff5252]">Sunglasses</p>
              </div>
              </li>
          </ul>

          <ul className="relative space-y-2">
          <li className="relative">
            <div className="flex items-center justify-between">
              <p className="font-medium hover:text-[#ff5252]">Xbox Controller</p>
              </div>
              </li>
          </ul>

          <ul className="relative space-y-2">
          <li className="relative">
            <div className="flex items-center justify-between">
              <p className="font-medium hover:text-[#ff5252]">Smart Tablet</p>
              </div>
              </li>
          </ul>

          <ul className="relative space-y-2">
          <li className="relative">
            <div className="flex items-center justify-between">
              <p className="font-medium hover:text-[#ff5252]">Purse</p>
              </div>
              </li>
          </ul>

          <ul className="relative space-y-2">
          <li className="relative">
            <div className="flex items-center justify-between">
              <p className="font-medium hover:text-[#ff5252]">Toys</p>
              </div>
              </li>
          </ul>


          {/* we need to give spacing in between content this 
          is for the side opening */}
        
      </div>
    </Drawer>
  );
};

export default CategoryPanel;
