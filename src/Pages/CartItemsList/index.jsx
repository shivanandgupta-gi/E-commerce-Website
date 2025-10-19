import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import { deleteData, getData } from '../../../utils/api';
import { MyContext } from '../../App';

const MyCartItems = (props) => {
    const [value, setValue] = React.useState(0);
    const context = useContext(MyContext);
    const handleRemoveItem = (id) => { //remove item from my list
        deleteData(`/api/myList/delete/${id}`).then((res) => {
            if (res?.error === false) {
                context.getMyListData(context.userData._id); //get the my list data again and update the my list
                context.openAlertBox("success", res?.message);
            }
        }
        )
    }

    return (
        <div className="cartItem w-full  p-3 flex items-center gap-4 pb-4 border-b border-[rgba(0,0,0,0.1)]">
            <div className="img w-[15%] h-[100px] rounded-md overflow-hidden">
                <Link to={`/product/${props.data.productId}`} className='group'>
                    <img src={props.data.image} alt="Product" className="w-full group-hover:scale-110 transition-all" />
                </Link>
            </div>
            <div className="info w-[85%] relative">
                <IoClose className='cursor-pointerc absolute !top-[0px] right-[0px] text-[22px] link transition-all cursor-pointer' onClick={() => handleRemoveItem(props.data._id)} ></IoClose>
                <span className="text-[13px]">{props.data.brand} </span>
                <h3 className="text-[14px]">
                    <Link to={`/product/${props.data.productId}`} className="link line-clamp-2">
                        {props.data.productTitle}
                    </Link>
                </h3>

                < Rating name="read-only" value={props.data.rating} precision={0.5} size='small' readOnly />
                <div className='flex items-center gap-4 mt-1 mb-2'>

                    <span className='oldPrice text-black font-[600] text-[14px]'> &#8377;{props.data.price}</span>
                    <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'> &#8377;{props.data.oldPrice}</span>
                    <span className='oldPrice text-primary font-[600] text-[14px]'>- {props.data.discount}% OFF</span>
                </div>

                {/* button add to cart
                <Button className='btn-org btn-sm' onClick={() => addToCart(props.data.productId)}>Add to Cart</Button> */}
            </div>
        </div>
    )
};

export default MyCartItems;
