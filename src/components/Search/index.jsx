import React from 'react'
import './index.css'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { getData, postData } from '../../../utils/api';

const Search =()=> {
  //backend here
  const [searchQuery,setSearchQuery]=useState("");
  const context=useContext(MyContext);
  const onChangeInput=(e)=>{
    setSearchQuery(e.target.value);
    const payload={
      page:1,
      limit:3,
      query:e.target.value
    }
    if(e.target.value.trim() !== " "){
      postData(`/api/product/search`,payload).then((res)=>{
        setSearchQuery(res)
      })
    }
  }
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2'>
        <input type='text' placeholder='Search for Products...' className='w-full h-[35px] focus:outline-none bg-inherit
        p-2 text-[15px]'
        value={searchQuery}
        onChange={onChangeInput}
        ></input>
        <Button className='!absolute top-[8px] right-[5px] z-50 !w-[35px] !min-w-[37px] h-[37px] !rounded-full !text-black' ><IoSearch className='text-black'/></Button>
    </div>
  )
}
 
export default Search;
