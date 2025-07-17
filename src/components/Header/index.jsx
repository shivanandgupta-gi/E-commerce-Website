import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoCartOutline } from "react-icons/io5";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));



let Header =()=> {
  return (
    <header className='bg-white'>
        <div className='top-strip px-2 border-t-[1px] border-gray-200 border-b-[3px] '>
            <div className='w-full px-8 mx-0'>
                <div className='flex items-center justify-between'>
                    <div className='col1 w-[50%]'>
                        <p className='text-[13px] font-[550]'>Get up to 50% off now season styles, limited time only</p>
                    </div>

                    <div className='col2 flex items-center justify-end bg-primary-700'>
                        <ul className='flex items-center justify-between gap-3'>
                            <li className='list-none'>
                                <Link to='/help-center' className='text-[13px] font-[500] link text-black-800 hover:text-[#ff5252] '>Help Center</Link>
                            </li>
                            <li className='list-none'>
                                <Link to='/order-tracking' className='text-[13px] font-[500] link text-black-800 hover:text-[#ff5252] '>Order Tracking</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className='Header py-2 border-b-[1px] border-gray-300 p-5 '>
            <div className=' px-8 flex items-center justify-between p-2 '>
                {/* logo div */}
                <div className='col1 w-[25%]'>

                </div>
                <div className='col2 w-[45%]'>
                    <Search/>
                </div>
                <div className='col3 w-[30%] flex items-center pl-7'>
                    <ul className='flex items-center justify-end gap-3  w-full'>
                        <li className='list-none'>
                            <Link to="/login" className='link text-[15px] font-[550] text-black-800 hover:text-[#ff5252]'>Login</Link> | &nbsp;
                            <Link to="/register" className='link text-[15px] font-[550] text-black-800 hover:text-[#ff5252]'>Register</Link>
                        </li>
                        <li>
                            <Tooltip title="Compare" >
                            <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4} color="secondary">
                                <IoIosGitCompare />
                            </StyledBadge>
                            </IconButton>
                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip title="Saved" >
                            <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4} color="secondary">
                                <FaRegHeart />
                            </StyledBadge>
                            </IconButton>
                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip title="Cart" >
                            <IconButton>
                            <StyledBadge badgeContent={4} color="secondary">
                                <IoCartOutline />
                            </StyledBadge>
                            </IconButton>
                            </Tooltip>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <Navigation/>
    </header>
  )
}

export default Header;