import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import './index.css';
import Box from "@mui/material/Box";
import CategoryColapse from "../../productviewByFiltering/CategoryColapse";
import { IoMdClose } from "react-icons/io";
import { getDataWithouAuthintication } from "../../../../utils/api";



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
      <h3 className="p-3 pb-3 text-[20px] font-[600] flex items-center justify-between">
        Shop By Category{" "}
        <IoMdClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px] font-[600]"/>
        </h3> 
        {
          props.data.length !== 0 &&
          <CategoryColapse data={props.data}/> //pass as props to shown on the sidebar
        }
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
