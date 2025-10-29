import React, { useContext } from 'react'
import './index.css'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useEffect } from 'react';
import { deleteData, editData, postData } from '../../../utils/api';
import { FaHeart } from "react-icons/fa";

// this is for all(one product ) the product details page like how product look like
const ProductItems = ({ item }) => { //destruct the props 

  //redux used 
  const context = useContext(MyContext);
  const [quantity, setQuantity] = React.useState(1); //default quantity is 1
  const [isAdded, setIsAdded] = React.useState(false); //this is for add to cart button change to added
  const [currentCartItem, setCurrentCartItem] = React.useState([]); //this is for current cart item
  const [isAddedToList, setIsAddedToList] = React.useState(false); //this is for add to my list button change to added


  const addToCart = async (product, userId, quantity) => { //this is for add to cart button send product id and user id to the function passes in app.jsx as context
    context?.addToCart(product, userId, quantity);
    setIsAdded(true);
  }
  useEffect(() => { //filter if cart added then change the button to added like increse or decrese the quantity
    const items = context?.cartData?.filter((cartItem) => cartItem.productId === item._id);
    if (items?.length > 0) {
      setCurrentCartItem(items);
      setIsAdded(true);
      setQuantity(items[0].quantity);
    }
    else {
      setQuantity(1);
    }
  }, [context?.cartData, item._id]);

  useEffect(() => { //filter if my list added then change the button to added in full color
    const listItems = context?.myListData?.filter((listItem) => listItem.productId === item._id);
    if (listItems?.length > 0) {
      setIsAddedToList(true);
    }
    else {
      setIsAddedToList(false);
    }
  }, []);

  const removeQty = () => { //to add the quantity after adding in cart
    if (quantity > 1) {
      setQuantity(quantity - 1);
      editData('/api/cart/updateQty', { //update the quantity in cart
        _id: currentCartItem[0]?._id,
        qty: quantity - 1,
        subTotal: (quantity - 1) * item.price
      }).then((res) => {
        context.getCartData(context.userData._id); //get the cart data again and update the cart
      });
    }
    else { //if quantity is 0 then remove the item from cart
      deleteData(`/api/cart/delete/${currentCartItem[0]?._id}`).then((res) => { //delete the item from cart
        context.getCartData(context.userData._id); //get the cart data again and update the cart
        setIsAdded(false);
        setQuantity(1);
      });
    }
  }

  const addQty = () => { //to remove the quantity after adding in cart
    if (quantity < item.countInStock) {
      setQuantity(quantity + 1);
      editData('/api/cart/updateQty', { //update the quantity in cart
        _id: currentCartItem[0]?._id,
        qty: quantity + 1,
        subTotal: (quantity + 1) * item.price
      }).then((res) => {
        context.getCartData(context.userData._id); //get the cart data again and update the cart
      });
    }
    else {
      setQuantity(item.countInStock);
    }
  }

  //this is for add to wishlist button
  //add to my list function to add in my list come from product items
  const handelAddToWishlist = (item) => {
    const obj = { //create object of data to send to backend
      productId: item._id,
      productTitle: item.name,
      image: item.images[0],
      rating: item.rating,
      price: item.price,
      oldPrice: item.oldPrice,
      discount: item.discount,
      brand: item.brand,
      userId: context.userData._id
    }
    postData('/api/myList/add', obj).then((res) => { //to post the my list data
      if (res?.error === false) {
        context.openAlertBox("success", res?.message);
        setIsAddedToList(true); //to change the button to added in full color
        context.getMyListData(); //get the my list data again and update the my list goes from app.jsx as context
      }
      else {
        context.openAlertBox("error", res?.message);
      }
    })
  }

  return (
    <div className="productItem shadow-lg  rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
      <div className="group imgWrapper w-[100%] h-[220px] overflow-hidden rounded-md relative ">
        <Link to={`/product/${item._id}`}>
          <div className='img h-[220px] overflow-hidden'>
            <img src={item?.images[0]} className="w-full" />
            <img src={item?.images[1]} className="w-full transition-all duration-500 absolute top-0 left-0 opacity-0 group-hover:opacity-100" />
          </div>
        </Link>
        <span className='discount flex items-center absolute top-[10px] left[10px] z-50 bg-primary rounded-md text-[12px] p-1 px-2 font-[500]'>-{item.discount}%</span>
        {/* this is for save later add to cart buttton on image */}
        <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px]
                        transition-all duration-300 group-hover:top-[15px]'>
          <Tooltip title="View" placement="left-start">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text text-black  hover:!bg-[#ff5252] hover:text-white group' onClick={() => context.handleOpen(true, item)}>
              <MdOutlineZoomOutMap className='text-[18px] !text-black group-hover:text-white' />
            </Button>
          </Tooltip>
          <Tooltip title="Compare" placement="left-start">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text text-black  hover:!bg-[#ff5252] hover:text-white group'>
              <IoIosGitCompare className='text-[18px] !text-black group-hover:text-white' />
            </Button>
          </Tooltip>
          <Tooltip title="Wishlist" placement="left-start">
            <Button className={`!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text text-black  hover:!bg-[#ff5252] hover:text-white group `}
              onClick={() => handelAddToWishlist(item)}>
              {
                context?.myListData?.some((listItem) => listItem.productId === item._id) ?(
                  < FaHeart className='text-[18px] !text-[#ff5252] group-hover:text-white hover:!text-white' />)
                  :
                  (<CiHeart className='text-[18px] !text-black group-hover:text-white' />)
              }
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="info p-3 py-5  relative pb-[50px] h-[205px]">
        <h6 className="text-[13px] !font-[400]"><Link to="/" className='link  hover:text-[#ff5252] transition-all line-clamp-2'>{item.brand}</Link></h6>
        <h3 className="text-[14px] title mt-1 font-[500] mb-1 text-[#000] clamp-2">
          <Link to={`product/${item._id}`} className="link hover:text-[#ff5252] transition-all">
            {item.name}
          </Link>
        </h3>

        <Rating name="size-medium" defaultValue={item.rating} readOnly />

        {/* for price */}
        <div className='flex items-center gap-4'>
          <span className='oldPrice line-through text-gray-500 text-[16px] font-[500]'>&#8377;{item?.oldPrice?.toLocaleString('en-IN')}</span>
          <span className='oldPrice text-primary font-[600] text-[16px]'>&#8377;{item?.price?.toLocaleString('en-IN')}</span>
        </div>

        {/* for add to cart button */}
        <div className='!absolute bottom-[15px] left-0 w-full pr-3 pl-3 '>
          {
            isAdded === false ?
              <Button className='btn-org btn-border flex w-full btn-sm gap-2' size='small' onClick={() => addToCart(item, context.userData._id, quantity)}>
                <BsCart4 className='text-[18px]' />
                Add to Cart
              </Button>
              :
              <div className='flex items-center justify-between overflow-hidden rounded-full border
             border-[rgba(0,0,0,0.1) '>
                <Button className='!min-w-[40px] !w-[35px] !h-[30px] !bg-[#f1f1f1]' onClick={removeQty}><FaMinus className='text-[rgba(0,0,0,0.7)] !rounded-none' /></Button>
                <span>{quantity}</span>
                <Button className='!min-w-[40px] !w-[30px] !h-[30px] !bg-primary' onClick={addQty} ><FaPlus className='text-white !rounded-none' /></Button>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ProductItems;
