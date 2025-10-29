import React, { useEffect, useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ProductZoom from '../../components/ProductZoom';
import ProductDetailsOnScreen from '../../components/productDetailsOnScreen';
import { Link, useParams } from 'react-router-dom';
import { getData } from '../../../utils/api';
import CircularProgress from '@mui/material/CircularProgress';
import Reviews from '../../components/Reviews';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { useRef } from 'react';
import ProductsSlider from '../../components/ProductSlider';

const ProductDetails = () => {
    //backend start
    const context = useContext(MyContext);
    const [productData, setProductData] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // State to manage loading status
    const [reviewsCount, setReviewsCount] = React.useState(0); //to get all reviews f
    const { id } = useParams(); // gets ":id" from route //useParams is a React Router hook that lets you read URL parameters.
    const [releatedProductData,setReleatedProductData]=useState([])
    useEffect(() => {
        // Fetch product details using the id
        setIsLoading(true); // Set loading to true before starting the fetch
        getData(`/api/product/getSingleProduct/${id}`).then((res) => {
            if (res.error === false) {
                setProductData(res?.product);
                getData(`/api/product/getAllProductBySubCategoryId/${res?.product?.subCatId}`).then((res)=>{
                    if(res?.error === false){
                        const filterData=res?.products?.filter((item)=> item._id !== id);
                        setReleatedProductData(filterData);
                    }
                })
                setTimeout(() => {
                    setIsLoading(false); // Set loading to false after data is fetched
                }, 400);
            }
        });

        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, [id]);
    const [ActiveTab, setActiveTab] = useState(0);
    
    useEffect(() => {
        getData(`/api/user/get-all-review?productId=${id}`).then((res) => {
            if (res.error === false) {
              setReviewsCount(res.data.length); //to set reviews count in product details page
            }
        })
    }, [reviewsCount])

    //to go to the reviews section when click on the reviews link we send props from the productdetailsonscreen component
    const gotoReviews = () => {
       window.scrollTo({
        top: reviewSection.current.offsetTop - 20,
        behavior: 'smooth'
       });
       setActiveTab(2); //to set active tab to reviews tab
    }
    const reviewSection=useRef()
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
                               electronics
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
                {isLoading === true ?
                    <div className='flex justify-center items-center min-h-[300px]'>
                        <CircularProgress color="inherit" />
                    </div>
                    :
                    <div className='px-7 flex gap-8 items-center'>
                        <div className='productZoomContainer w-[40%]'>
                            {productData && (
                                <ProductZoom images={productData.images} />
                            )}
                        </div>
                        <div className="productContent w-[60%]">
                            {productData ? (
                                <ProductDetailsOnScreen data={productData} reviewsCount={reviewsCount} gotoReviews={gotoReviews}/>
                            ) : (
                                <p>Loading product details...</p>
                            )}
                        </div>

                    </div>
                }

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
                            ref={reviewSection}
                        >
                            Reviews ({reviewsCount})
                        </span>
                    </div>
                    {
                        ActiveTab === 0 && <div className="shadow-md w-full py-5 px-8 rounded-md text-[14px]">
                            {productData?.description}
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
                    {/* reviwe */}
                    {
                        ActiveTab === 2 &&
                        <div className='shadow-md w-[80%] py-5 px-8 rounded-md'>
                            <Reviews productId={productData._id} setReviewsCount={setReviewsCount} />
                        </div>
                    }
                </div>
            </section>
            {
                releatedProductData?.length !== 0 && 
                <div className="px-7 pt-7">
                <h2 className="text-[20px] font-[600]">Releated Product</h2>
                    {
                        <ProductsSlider items={6} data={releatedProductData} />
                    }
                </div>
            }
        </>
    )
}

export default ProductDetails;