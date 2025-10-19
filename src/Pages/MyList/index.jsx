import React, { useContext } from 'react';
import { IoBagCheck } from "react-icons/io5";
import Button from '@mui/material/Button';
import AccountSideBar from '../../components/AccountSideBar';
import MyCartItems from '../CartItemsList';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const MyList=()=> {
  //backend data fetch and display in my list page
  const context=useContext(MyContext);
  return (
    <section className="py-10 w-full min-h-screen">
  <div className="flex gap-5 px-10 ml-8 items-start">
    {/* Sidebar */}
    <div className="w-[20%] col">
      <AccountSideBar />
    </div>
        {/* Main Cart Section */}
        <div className="w-[80%] flex justify-start !ml-[20px]">
          <div className="bg-white w-full max-w-[600px] shadow-md rounded-md">
            <div className='py-5 px-3 font-bold border-b border-[rgba(0,0,0,0.1)]'>
              <h2>My List</h2>
            </div>
            <div className='py-2 px-3 !mb-2'>
             <p className="mt-1  ">
                    There are <span className="font-bold text-primary">{context?.myListData?.length}</span> products in your cart
                </p>
            </div>
             <div className="shadow-md rounded-md  bg-white">
              {
                context?.myListData?.length !==0 ? context.myListData.map((item,index)=>(
                  <MyCartItems data={item}/> 
                )
                )
                :
                // <div className='flex flex-col items-center justify-center py-10'>
                //   <img src="/myList.png" className='w-[100px] mb-2'></img>
                //   <h3 className='font-[600]'>MyList is currently Empty</h3>
                //   </div>
                  <div className='flex flex-col items-center justify-center py-6 gap-5 '>
              <img src="/myList.png" className='w-[200px] mb-1' />
              <h3 className='text-[20px] font-[700] mb-3'>MyList is currently Empty</h3>
              <Link to="/"><Button className='btn-org btn-sm flex items-center gap-2'><FaHome className='text-[16px]'/>
                Continue Shoping</Button></Link>
            </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyList;
