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
import { useContext } from 'react';
import { MyContext } from '../../../App';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { postData } from '../../../../utils/api';
import Rating from '@mui/material/Rating';


const SideBar=(props) =>{
  const [open, setOpen] = useState(true);
  const [openAvailable, setOpenAvailable] = useState(true);
  const [opensize,setopensize]=useState(false);
  const [openRating,setOpenRating]=useState(true);
  const context=useContext(MyContext);
  //backend
  const [filters,setFilters]=useState({ //object of the data filter
    catId:[],
    subCatId:[],
    thirdsubCatId:[],
    minPrice:"",
    maxPrice:"",
    rating:"",
    page:1,
    limit:5
  })
  const [price,setPrice]=useState([0,80000]); //price filter store only
  //function for selecting category
  const handleCheckBoxChange=(field,id)=>{
    const currentValues=filters[field] || [];
    const updatedValues=currentValues.includes(id) ?
    currentValues.filter((item)=>item!==id):
    [...currentValues,id];
    setFilters((prev)=>({
      ...prev,
      [field]:updatedValues
    }))

    if(field === "catId"){
      setFilters((prev)=>({
      ...prev,
      subCatId:[],
      thirdsubCatId:[]
    }))
    }
  }
  const location=useLocation();
  useEffect (()=>{ //this for changing url it always track them and give as output
    const url=window.location.href
    const queryParameter=new URLSearchParams(location.search);
    if(url.includes("catId")){
      const categoryId=queryParameter.get("catId");
      const catArr=[];
      catArr.push(categoryId);
      filters.catId=catArr;
      filters.subCatId=[]
      filters.thirdsubCatId=[]
      filters.rating=""
    }
    if(url.includes("subCatId")){
      const SubCategoryId=queryParameter.get("subCatId");
      const subCatArr=[];
      subCatArr.push(SubCategoryId);
      filters.subCatId=subCatArr;
      filters.catId=[]
      filters.thirdsubCatId=[]
      filters.rating=""
    }
    if(url.includes("ThirdSubCatId")){
      const thirdCategoryId=queryParameter.get("ThirdSubCatId");
      const thirdcatArr=[];
      thirdcatArr.push(thirdCategoryId);
      filters.catId=thirdcatArr;
      filters.subCatId=[]
      filters.catId=[]
      filters.rating=""
    }
    filters.page=1;
    setTimeout(() => {
      filtersData();
    }, 200);
  },[location])

  const filtersData=()=>{
    props.setIsLoading(true);
    postData("/api/product/filters",filters).then((res)=>{
      props.setIsLoading(false)
      props.setProductData(res)
      props.setToatalPages(res?.totalPages)
      props.page(res?.page)
      window.scrollTo(0,0);
    })
  }
  useEffect(()=>{
    filters.page=props.page;
    filtersData();
  },[filters,props.page])

  useEffect(()=>{
    setFilters((prev)=>({
      ...prev,
      minPrice:price[0],
      maxPrice:price[1]
    }))
  },[price])

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
            {
              context?.catData.map((item,index)=>(
                <FormControlLabel key={index} control={<Checkbox size="small"/>} value={item?._id} checked={filters?.catId?.includes(item?._id)} label={item.name} className="w-full" size="small"
                onChange={()=>handleCheckBoxChange('catId',item?._id)} />
              ))
            }
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
        <div className="w-[230px]">
        <RangeSlider 
        value={price}
        onInput={setPrice}
        min={100}
        max={80000}
        step={10}
        />
         <div className="flex pt-4 pb-2 priceRange">
          <span className='text-[13px]'>
            From: <strong className="text-dark">Rs: {price[0]}</strong>
          </span>
          <span className="ml-auto text-[13px]">
            To: <strong className="text-dark">Rs: {price[1]}</strong>
          </span>
        </div>
        </div>
        </div>

      {/* shop by rating */}
      <div className='box mt-4'> 
        <h3 className=' w-full mb-2 text-[16px] font-[600] flex items-center pr-5'>Filter By Ratings
        </h3>
        <div className='flex items-center'>
          <FormControlLabel  control={<Checkbox size="small"/>} value={5} checked={filters?.rating?.includes(5)}   size="small"
                onChange={()=>handleCheckBoxChange('rating',5)} />
             <Rating name="rating" value={5} size='small' readOnly />
        </div>
        <div className='flex items-center'>
          <FormControlLabel  control={<Checkbox size="small"/>} value={4} checked={filters?.rating?.includes(4)}   size="small"
                onChange={()=>handleCheckBoxChange('rating',4)} />
             <Rating name="rating" value={4} size='small' readOnly />
        </div>
        <div className='flex items-center'>
          <FormControlLabel  control={<Checkbox size="small"/>} value={3} checked={filters?.rating?.includes(3)}   size="small"
                onChange={()=>handleCheckBoxChange('rating',3)} />
             <Rating name="rating" value={3} size='small' readOnly />
        </div>
        <div className='flex items-center'>
          <FormControlLabel  control={<Checkbox size="small"/>} value={2} checked={filters?.rating?.includes(2)}   size="small"
                onChange={()=>handleCheckBoxChange('rating',2)} />
             <Rating name="rating" value={2} size='small' readOnly />
        </div>
        <div className='flex items-center'>
          <FormControlLabel  control={<Checkbox size="small"/>} value={1} checked={filters?.rating?.includes(1)}   size="small"
                onChange={()=>handleCheckBoxChange('rating',1)} />
             <Rating name="rating" value={1} size='small' readOnly />
        </div>
      </div>  
      </aside>
  )
}

export default SideBar;
