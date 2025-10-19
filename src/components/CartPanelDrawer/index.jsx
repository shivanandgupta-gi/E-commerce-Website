import Button from '@mui/material/Button';
import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import { deleteData } from '../../../utils/api';

//this is for cart drawer panel when click on cart icon in header side panel open 

export default function CartPanelDrawer() {

    //backend start here
    const context = useContext(MyContext);
    const deleteCartItem = (id) => { //delete the cart item function
        deleteData(`/api/cart/delete/${id}`).then((res) => { //delete the item from cart
            context.getCartData(context.userData._id); //get the cart data again and update the cart
        });
    }
    return (
        <>
            <div className="  w-full max-h-[400px]  overflow-x-hidden py-3 px-4">
                {/* cart item start here */}
                {
                    context?.cartData.map((item, index) => (
                        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-3 pt-3" key={index}>
                            <div className="img w-[25%]  overflow-hidden h-[80px] rounded-md">
                                <Link to={`/product/${item.productId}`} className='block group'>
                                    <img
                                        src={item.image}
                                        className="w-full  group-hover:scale-105"
                                        alt="Cart Item"
                                    />
                                </Link>
                            </div>
                            <div className="info w-[75%] pr-5 relative">
                                <h4 className="text-[14px] font-[400] line-clamp-3">
                                    <Link to={`/product/${item.productId}`} className="link transition-all">
                                        {item.productTitle}
                                    </Link>
                                </h4>

                                <p className="flex items-center gap-5 mt-2 mb-2">
                                    <span className='text-[rgba(0,0,0,0.8)]'>
                                        Qty : <span className='text-[rgba(0,0,0,0.8)]'>{item.quantity}</span>
                                    </span>
                                    <span className="text-primary font-bold">Price : &#8377;{item.price.toLocaleString('en-IN')}</span>
                                </p>
                                <MdDelete className="absolute top-[3px] right-[0px] cursor-pointer text-[20px] link transition-all"
                                    onClick={() => deleteCartItem(item._id)} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <br />
            {/* for price on drawer */}
            <div className='bottomSec absolute bottom-[10px] left-[10px] w-full overflow-hidden pr-5'>
                <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
                    <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">{context.cartData.length} item</span>
                        <span className="text-primary font-bold">&#8377;
                            {
                                (context.cartData.length !== 0 ?
                                context.cartData.map(item=> parseInt(item.price) * parseInt(item.quantity))
                                .reduce((total, value) => total + value ,0).toLocaleString('en-IN')
                                :
                                0)
                            }
                        </span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">Shipping</span>
                        <span className="text-primary font-bold">&#8377;99</span>
                    </div>
                </div>
                <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
                    <div className="flex items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">Total (tax excl.)</span>
                        <span className="text-primary font-bold">&#8377;
                             {
                                (context.cartData.length !== 0 ?
                                (context.cartData.map(item=> parseInt(item.price) * parseInt(item.quantity))
                                .reduce((total, value) => total + value ,0) + 99 ).toLocaleString('en-IN')
                                :
                                0)
                            }
                        </span>
                    </div>
                    <br />

                    <div className="flex items-center justify-between w-full gap-5">
                        <Link to="/cart" className='w-[50%] d-block'><Button className="btn-org btn-lg w-full !h-[40px]" onClick={context.toggleCartPanel(false)}>View Cart</Button></Link>
                        <Link to="/pay" className='w-[50%] d-block'><Button className="btn-org btn-lg w-full !h-[40px]" onClick={context.toggleCartPanel(false)}>CheckOut</Button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}
