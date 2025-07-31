import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ProductDetailsOnScreen from '../../components/productDetailsOnScreen';


const ProductDetails=()=> {

    
    const [ActiveTab,setActiveTab]=useState(0);

  return (
    <>
    <div className='py-6 '>
        <div className='px-6 py-2'>
            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/" className='hover:text-[#ff5252] !text-[14px]'>
                    Home
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                    className='hover:text-[#ff5252] !text-[14px]'
                    >
                    Fashion
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    className='hover:text-[#ff5252] !text-[14px] '
                    >
                    Smartphones
                    </Link>
                </Breadcrumbs>
            </div>
        </div>
    </div>
    <section className='bg-white py-5'>
        <div className='px-7 flex gap-8 items-center'>
            <div className='productZoomContainer w-[40%]' >
                <ProductZoom/>
            </div>
            <div className="productContent w-[60%]">
               <ProductDetailsOnScreen/>
            </div>
        </div>

        {/* this is for the product detail and descrisption tab */}
        <div className="px-7 pt-10">
            <div className="flex items-center gap-8 mb-5">
                <span
                    className={`link text-[17px] cursor-pointer font-[500] ${ActiveTab === 0 ? 'text-primary' : ''}`}
                    onClick={() => setActiveTab(0)}
                >
                    Description
                </span>
                <span
                    className={`link text-[17px] cursor-pointer font-[500] ${ActiveTab === 1 ? 'text-primary' : ''}`}
                    onClick={() => setActiveTab(1)}
                >
                    Product Details
                </span>
                <span
                    className={`link text-[17px] cursor-pointer font-[500] ${ActiveTab === 2 ? 'text-primary' : ''}`}
                    onClick={() => setActiveTab(2)}
                >
                    Reviews (5)
                </span>
                </div>

            {
                ActiveTab === 0 && <div className="shadow-md w-full py-5 px-8 rounded-md">
                  <ul className='mb-5 text-[15px] list-disc pl-5 space-y-3' style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>
                        <h5 className='!font-[600] !mb-2 '>PERFORMANCE THAT POWERS THE FUTURE:</h5><p className='mb-3'> Equipped with the MediaTek Dimensity 6300 5G chipset, the Acer Super ZX delivers effortless multitasking and blazing-fast speeds. With an AnTuTu score of 414 K+, and next-gen 5G capabilities, this device is built for high performance.</p>
                    </li>
                    <li>
                        <h4 className='!font-[600] !mb-2 '>FAST CHARGING, LONG-LASTING POWER:</h4><p className='mb-3'>  Stay ahead with 50% charge in just 35 minutes. The robust battery ensures all-day power, keeping you connected, entertained, and always ready to go.</p> 
                    </li>
                    <li>
                        <h4 className='!font-[600] !mb-2'>PRO-LEVEL CAMERA EXPERIENCE:</h4> <p className='mb-3'> Capture the world in stunning detail with the Sony 64MP AI Camera. From crisp daylight shots to low-light brilliance, AI Photo Enhancer, Night Mode, and Portrait Filters ensure every shot is Instagram-worthy.</p> 
                    </li>
                    <li>
                        <h4 className='!font-[600] !mb-2'>ULTRA-SMOOTH VISUALS:</h4>  <p className='mb-3'>The FHD+ 120Hz display brings every frame to life with vibrant colors and smooth motion. Whether you're gaming, streaming, or scrolling, experience ultra-fluid performance with L1 certification for Netflix & Prime Video, ensuring you watch in the highest quality.</p> 
                    </li>
                    <li>
                        <h4 className='!font-[600] !mb-2'>5G CONNECTIVITY & PREMIUM ENTERTAINMENT:</h4> <p className='mb-3'>Designed for the new era of connectivity, the Acer Super ZX supports Dual SIM 5G for seamless performance. L1 Certification guarantees premium HDR streaming, so your favorite content looks as good as it should.</p> 
                    </li>
                </ul>
            </div>
            }

            {
                ActiveTab === 1 && 
                <div class="relative overflow-x-auto shadow-md w-full py-5 px-8 rounded-md">
                <table class="w-full text-sm text-left text-gray-700 bg-white">
                    <thead class="text-xs uppercase bg-gray-100 text-gray-700">
                    <tr>
                        <th scope="col" class="px-6 py-3">Technical Details</th>
                        <th scope="col" class="px-6 py-3">Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="border-b border-gray-200 bg-white">
                        <th scope="row" class="px-6 py-1 font-medium text-gray-900 whitespace-nowrap">
                        OS
                        </th>
                        <td class="px-6 py-1">Android 15
</td>
                    </tr>
                    <tr class="border-b border-gray-200 bg-white">
                        <th scope="row" class="px-6 py-1 font-medium text-gray-900 whitespace-nowrap">
                        Product Dimensions	
                        </th>
                        <td class="px-6 py-1">16.9 x 7.7 x 0.9 cm; 200 g</td>
                    </tr>
                    <tr class="bg-white border-b border-gray-200 ">
                        <th scope="row" class="px-6 py-1 font-medium text-gray-900 whitespace-nowrap">
                        Batteries
                        </th>
                        <td class="px-6 py-1">	1 12V batteries required. (included)</td>
                    </tr>
                    <tr class="bg-white border-b border-gray-200">
                        <th scope="row" class="px-6 py-1 font-medium text-gray-900 whitespace-nowrap">
                        GPS
                        </th>
                        <td class="px-6 py-1">		GPS, Glonass, Beidou, Galileo</td>
                    </tr>
                    <tr class="bg-white border-b border-gray-200">
                        <th scope="row" class="px-6 py-1 font-medium text-gray-900 whitespace-nowrap">
                        Special features	
                        </th>
                        <td class="px-6 py-1">	Dual SIM, Expandable Memory, Built-In GPS</td>
                    </tr>
                    <tr class="bg-white border-b border-gray-200">
                        <th scope="row" class="px-6 py-1 font-medium text-gray-900 whitespace-nowrap">
                        Other display features	
                        </th>
                        <td class="px-6 py-1">	Wireless</td>
                    </tr>
                    <tr class="bg-white ">
                        <th scope="row" class="px-6 py-1 font-medium text-gray-900 whitespace-nowrap">
                        Resolution
                        </th>
                        <td class="px-6 py-1">	1080 x 2400</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            }

            {
                ActiveTab === 2 &&
                <div className='shadow-md w-[80%] py-5 px-8 rounded-md'>
                    <div className="w-full productReviewsContainer">
                        <h2 className="text-[18px]">Customer questions & answers</h2>
                        <div className=" reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                            <div className="review pb-5 pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between ">
                            <div className="info w-[60%] flex items-center gap-3">
                                <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                                <img
                                    src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                                    alt="Reviewer"
                                    className="w-full "
                                />
                                </div>
                                <div className="w-[80%]">
                                    <h4 className="text-[16px]">Shivanand Gupta</h4>
                                    <h5 className="text-[13px] mb-0">2024-12-01</h5>
                                    <p className="mt-0 mb-0 text-[14px]">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </p>
                                </div>   
                            </div>
                            <Rating name='size-small' defaultValue={4}  readOnly/>
                            </div>
                             <div className="review pb-5 pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between ">
                            <div className="info w-[60%] flex items-center gap-3">
                                <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                                <img
                                    src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                                    alt="Reviewer"
                                    className="w-full "
                                />
                                </div>
                                <div className="w-[80%]">
                                    <h4 className="text-[16px]">Shivanand Gupta</h4>
                                    <h5 className="text-[13px] mb-0">2024-12-01</h5>
                                    <p className="mt-0 mb-0 text-[14px]">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </p>
                                </div>   
                            </div>
                            <Rating name='size-small' defaultValue={4}  readOnly/>
                            </div> <div className="review pb-5 pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between ">
                            <div className="info w-[60%] flex items-center gap-3">
                                <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                                <img
                                    src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                                    alt="Reviewer"
                                    className="w-full "
                                />
                                </div>
                                <div className="w-[80%]">
                                    <h4 className="text-[16px]">Shivanand Gupta</h4>
                                    <h5 className="text-[13px] mb-0">2024-12-01</h5>
                                    <p className="mt-0 mb-0 text-[14px]">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </p>
                                </div>   
                            </div>
                            <Rating name='size-small' defaultValue={4}  readOnly/>
                            </div>
                            
                            
                            
                        </div>

                        <br/>
                        <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                            <h2 className="text-[18px]">Add a review</h2>
                            <form className="w-full mt-5">
                                <TextField
                                id="outlined-multiline-flexible"
                                label="Write a review..."
                                className="w-full mb-5"
                                multiline
                                rows={5}
                                />
                                <br/><br/>
                                <Rating name='size-small' defaultValue={4}  />
                                <div className='flex items-center mt-5'>
                                    <Button className='btn-org'>Submit Review</Button>
                                </div>
                            </form>
                        </div>
                        </div>
                </div>
            } 
            
        </div>

    </section>
    </>
  )
}

export default ProductDetails;