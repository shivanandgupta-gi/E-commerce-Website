import React, { useContext, useState } from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiReturnArrow } from "react-icons/gi";
import { BsWallet2 } from "react-icons/bs";
import { FaGift } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Drawer from '@mui/material/Drawer';
import { MyContext } from '../../App';
import CartPanelDrawer from '../CartPanelDrawer';
import { MdClose } from "react-icons/md";
import AddressAddPanel from '../../Pages/address/AddressAddPanel';

//this is for the shipping icon and payment and delivery icon in footer section
const Footer = () => {
    const [openCartPanel, setOpenCartPanel] = useState(false);
    const context = useContext(MyContext);

    return (
        <>
            <footer className="py-6 bg-[#f9f7f7]">
                <div className="px-8">
                    <div className="flex items-center justify-center gap-2 pb-8 py-9 ">
                        <div className="col flex items-center justify-center flex-col group w-[17%]">
                            <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                            <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
                            <p className="text-[12px] font-[300]">For all Orders Over 1000rs</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group w-[17%]">
                            <GiReturnArrow className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                            <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
                            <p className="text-[12px] font-[500]">For an Exchange Product</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group w-[17%]">
                            <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                            <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
                            <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group w-[17%]">
                            <FaGift className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                            <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
                            <p className="text-[12px] font-[500]">Our First Product Order</p>
                        </div>
                        <div className="col flex items-center justify-center flex-col group w-[17%]">
                            <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                            <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
                            <p className="text-[12px] font-[500]">Contact us Anytime</p>
                        </div>


                    </div>

                    <br />
                    <hr />


                    <div className="footer flex  py-8">
                        <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
                            <h2 className="text-[18px] font-[600] mb-4">Contact us</h2>
                            <p className="text-[13px] font-[400] pb-4">
                                Classyshop - Mega Super Store<br />
                                507-Union Trade Centre<br />
                                France
                            </p>
                            <Link className="link text-[15px]" to="mailto:shivanandgupta316@gmail.com">
                                shivanandgupta316@gmail.com
                            </Link>
                            <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-primary">
                                (+91) 63941-76235
                            </span>
                            <div className='flex items-center gap-2 cursor-pointer hover:scale-105  transition-transform duration-200 group'
                             onClick={() => {
                                const phoneNumber = "916394176235"; // ← your WhatsApp number (with country code, no + or spaces)
                                const message = "Hello! I need some expert help.";
                                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                window.open(url, "_blank");
                            }}
                            >
                               <HiOutlineChatBubbleLeftRight className="text-[40px] text-primary " />
                                 <span className="text-[16px] font-[600] group-hover:text-green-500 transition-colors duration-200">
                                    Online Chat <br />
                                    Get Expert Help
                                </span>
                            </div>



                        </div>

                        <div className="part2 w-[40%] flex pl-8">
                            <div className="part2_col1 w-[50%]">
                                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                                <ul className="list">
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link className="link hover:text-[#ff5252]" to="/">Prices drop</Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <a href='#latest-products'
                                        className="link hover:text-[#ff5252] ">New products
                                            </a>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link className="link hover:text-[#ff5252]" to="/">Best Sales</Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link className="link hover:text-[#ff5252]" to="/">Conact us</Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link className="link hover:text-[#ff5252]" to="/">Sitempa</Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link className="link hover:text-[#ff5252]" to="/">Stores</Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="part2_col1 w-[50%]">
                                <h2 className="text-[18px] font-[600] mb-4">Our company</h2>
                                <ul className="list">
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link className="link hover:text-[#ff5252]" to="/">Contact Us
                                        </Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link className="link hover:text-[#ff5252]" to="/">Our Stories</Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link className="link hover:text-[#ff5252]" to="/">Terms and conditions</Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link className="link hover:text-[#ff5252]" to="/aboutus">About us</Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link className="link hover:text-[#ff5252]" to="/">Press</Link>
                                    </li>
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link className="link hover:text-[#ff5252]" to="/">Corporate Information</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="part2 w-[35%] flex pl-8 flex-col pr-8">
                            <h2 className="text-[20px] font-[600] mb-4">Subscribe to newsletter</h2>
                            <p className="text-[14px] font-[400]">
                                Subscribe to our latest newsletter to get news about special discounts.
                            </p>
                            <form className="mt-5">
                                <input
                                    type="text"
                                    className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.4)]"
                                    placeholder="Your Email Address"
                                />
                                <Button className='btn-org'>SUBSCRIBE</Button>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the terms and conditions and the privacy policy" />
                            </form>
                        </div>


                    </div>
                </div>
            </footer>

            {/* for social media icon on botton */}

            <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
                <div className="px-7 flex items-center justify-between">
                    <ul className='flex items-center gap-2'>
                        <li className="list-none">
                            <Link
                                to="/"
                                target="_blank"
                                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
                            >
                                <FaFacebook className="text-[15px] group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                to="/"
                                target="_blank"
                                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
                            >
                                <IoLogoYoutube className="text-[15px] group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                to="/"
                                target="_blank"
                                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
                            >
                                <FaInstagram className="text-[15px] group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                to="/"
                                target="_blank"
                                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
                            >
                                <FaPinterest className="text-[15px] group-hover:text-white" />
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link
                                to="/"
                                target="_blank"
                                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
                            >
                                <FaTwitter className="text-[15px] group-hover:text-white" />
                            </Link>
                        </li>

                    </ul>

                    <p className='text-[13px] text-center'>© 2025 - Ecommerce Template</p>
                </div>
            </div>

            {/* this is for the product view on the screen or open new page */}

            <Drawer
                open={context.openCartPanel}
                onClose={() => { context.toggleCartPanel(false) }}
                anchor="right"
                className='!w-[500px] cartPanel'
            >
                <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)] overflow-hidden">
                    <h4 className='!font-bold '>Shopping Cart ({context.cartData.length || 0})</h4>
                    <MdClose className="text-[20px] cursor-pointer" onClick={context.toggleCartPanel(false)} />
                </div>

                {/* adding item in drawer of cart item*/}
                {
                    context.cartData.length !== 0 ? <CartPanelDrawer /> : 
                        <>
                            <div className="w-full h-[550px] flex items-center justify-center flex-col gap-3">
                                <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" className='w-[150px]' />
                                <h3 className='text-[20px] font-[700]'>Your Cart is empty</h3>
                                <p className='text-[15px] font-[500] text-center'>Add items in Cart.</p>
                                <Link to="/"><Button className="btn-org btn-sm " onClick={context.toggleCartPanel(false)}>Continue Shoping</Button></Link>
                            </div>
                        </>
                }
            </Drawer>

            {/* this for the add address in sidebar */}
            <Drawer
                open={context.openAddressPanel}
                onClose={() => { context.toggleAddressPanel(false) }}
                anchor="right"
                className='!w-[500px] addressPanel'
            >
                <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)] overflow-hidden">
                    <h4 className='!font-bold '>Add Delivery Address </h4>
                    <MdClose className="text-[20px] cursor-pointer" onClick={context.toggleAddressPanel(false)} />
                </div>
                <AddressAddPanel/>
            </Drawer>
        </>
    );
};


export default Footer;
