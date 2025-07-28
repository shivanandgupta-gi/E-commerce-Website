import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import './index.css';
import { CiSquareMinus } from "react-icons/ci";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CategoryColapse from "../../productviewByFiltering/CategoryColapse";


const CategoryPanel = (props) => {
 
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  

  const DrawerList = (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        className="categoryPanel"
      >
        
        <CategoryColapse/>
      </Box>
);


  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)} >

        {DrawerList}      
      </Drawer>
    </>
  );
};

export default CategoryPanel;
