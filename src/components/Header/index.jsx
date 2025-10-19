import React, { use, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoCartOutline } from "react-icons/io5";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import { FaRegUserCircle } from "react-icons/fa";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { getData } from '../../../utils/api';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));

let Header = () => {
    const context = useContext(MyContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const history = useNavigate();
    //logout page api 
    const logout = () => {
        setAnchorEl(null); //menu null means not shown
        getData(`/api/user/logout?token=${localStorage.getItem('accesstoken')}`, { withCredentials: true }).then((res) => {
            console.log(res);
            if (res?.success === true) {
                context.setIsLogin(false);
                localStorage.removeItem('accesstoken');
                localStorage.removeItem('refreshtoken');
                localStorage.removeItem('userdata');
                context.setUserData(null);
                context.setMyListData([]); //clear my list data on logout
                context.setCartData([]); //clear cart data on logout
                history("/");
            }
        })
    }
    return (
        <header className='bg-white sticky -top-[130px] '>
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
                    <div className='col2 w-[40%]'>
                        <Search />
                    </div>
                    <div className='col3 w-[35%] flex items-center pl-7'>
                        <ul className='flex items-center justify-end gap-3  w-full'>
                            {/* this is for login if not open login icon and if not show user account */}
                            {
                                context.isLogin === false ?
                                    <li className='list-none'>

                                        <Link to="/login" className='link text-[15px] font-[550] text-black-800 hover:text-[#ff5252]'>Login</Link> | &nbsp;
                                        <Link to="/register" className='link text-[15px] font-[550] text-black-800 hover:text-[#ff5252]'>Register</Link>
                                    </li>
                                    : (
                                        // this is for the hover over account opent a mini widow like account, order,etc
                                        <>
                                            <Button
                                                className="!text-[#000] myAccountWrap flex items-center gap-3 cursor-pointer"
                                                onClick={handleClick}
                                            >
                                                <Button
                                                    component="div"   // ✅ not a <button> anymore
                                                    className="!min-w-[40px] !w-[40px] !h-[40px] !bg-[#f1f1f1] rounded-full"
                                                >
                                                    <FaRegUserCircle className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                                </Button>

                                                <div className="info flex flex-col">
                                                    <h4 className="leading-3 text-[14px] text-[rgba(0,0,0,0.6)] font-[500] mb-0 capitalize text-left justify-start">
                                                        {context?.userData?.name}
                                                    </h4>
                                                    <span className="text-[13px] text-[rgba(0,0,0,0.6)] font-[400] capitalize text-left justify-start">
                                                        {context?.userData?.email}
                                                    </span>
                                                </div>
                                            </Button>

                                            <Menu
                                                anchorEl={anchorEl}
                                                id="account-menu"

                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                slotProps={{
                                                    paper: {
                                                        elevation: 0,
                                                        sx: {
                                                            overflow: 'visible',
                                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                            mt: 1.5,
                                                            '& .MuiAvatar-root': {
                                                                width: 32,
                                                                height: 32,
                                                                ml: -0.5,
                                                                mr: 1,
                                                            },
                                                            '&::before': {
                                                                content: '""',
                                                                display: 'block',
                                                                position: 'absolute',
                                                                top: 0,
                                                                right: 14,
                                                                width: 10,
                                                                height: 10,
                                                                bgcolor: 'background.paper',
                                                                transform: 'translateY(-50%) rotate(45deg)',
                                                                zIndex: 0,
                                                            },
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <Link to="/my-account" className='w-full block'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                        <FaRegUser className='text-[18px]' /> <span className='font-[14px'>My account</span>
                                                    </MenuItem>
                                                </Link >
                                                <Link to="/my-order">
                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                        <IoBagCheckOutline className='text-[18px]' /> <span className='font-[14px'>Orders</span>
                                                    </MenuItem>
                                                </Link>
                                                <Link to="/my-list">
                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                        <FaRegHeart className='text-[18px]' /> <span className='font-[14px'>My List</span>
                                                    </MenuItem>
                                                </Link>
                                                <MenuItem
                                                    onClick={() => {
                                                        handleClose();
                                                        logout();
                                                    }}
                                                    className='flex gap-2 !py-2'
                                                >
                                                    <IoIosLogOut className='text-[18px]' />
                                                    <span className='font-[14px'>LogOut</span>
                                                </MenuItem>
                                            </Menu>
                                        </>
                                    )
                            }
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
                                    <Link to="/my-list">
                                    <IconButton aria-label="cart" >
                                        <StyledBadge badgeContent={context.myListData.length} color="secondary">
                                            <FaRegHeart />
                                        </StyledBadge>
                                    </IconButton>
                                        </Link>
                                </Tooltip>
                            </li>
                            {/* cart button on header */}
                            <li>
                                <Tooltip title="Cart" >
                                    <IconButton onClick={() => { context.setOpenCartPanel(true) }}>
                                        <StyledBadge badgeContent={context?.cartData?.length !== 0 ? context?.cartData?.length : 0} color="secondary">
                                            <IoCartOutline />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <Navigation />
        </header>
    )
}

export default Header;