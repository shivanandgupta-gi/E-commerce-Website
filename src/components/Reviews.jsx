import React from 'react'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { use } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { MyContext } from '../App';
import { getData, postData } from '../../utils/api';

// Reviews component to display customer reviews and a form to add new reviews

const Reviews = (props) => {
    //backend start here
    //this for adding review
    const [reviewsData, setReviewsData] = React.useState([]); //to get all reviews from the server
    const [reviews, setReviews] = React.useState({
        image: "",
        userName: "",
        review: "",
        rating: 1,
        userId: "",
        productId: ""
    });
    const context = useContext(MyContext);
    useEffect(() => {
        setReviews(() => ({
            ...reviews,
            image: context.userData.avatar,
            userId: context.userData._id,
            userName: context.userData.name,
            productId: props.productId,
        }))
        gerReviews();
    }, [context.userData])
    //this for the input field change
    const onChangeInput = (e) => {
        setReviews(() => ({
            ...reviews,
            [e.target.name]: e.target.value
        }))
    }
    //this for submit the review form
    const handelSubmit = (e) => {
        e.preventDefault();
        if(reviews.review===""){
            context.openAlertBox("error","Please write a review");
            return;
        }
        if(reviews.rating===""){
            context.openAlertBox("error","Please give a rating");
            return;
        }
        postData("/api/user/create-review", reviews).then((res) => { //data post to the server
            if (res.error === false) {
                context.openAlertBox("success", res.message);
                setReviews(() => ({ //after submit the form field will be empty
                    ...reviews,
                    review: "",
                    rating: 1
                }));
                gerReviews();
            }
        })
    }

    //fetch all reviews from the server
    const gerReviews = () => {
        getData(`/api/user/get-all-review?productId=${props.productId}`).then((res) => {
            if (res.error === false) {
                setReviewsData(res.data);
                props.setReviewsCount(res.data.length); //to set reviews count in product details page
            }
        })
    }
    return (
        <div className="w-full productReviewsContainer">
            <h2 className="text-[18px]">Customer questions & answers</h2>
            {
                reviewsData?.length !== 0 &&
                <div className=" reviewScroll w-full [max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                    {
                        reviewsData.map((item, index) => (
                            <div className="review pb-5 pt-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between " key={index}>
                                <div className="info w-[60%] flex items-center gap-3">
                                    <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                                        <img
                                            src={item.image}
                                            alt="Reviewer"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-[80%]">
                                        <h4 className="text-[16px]  font-[600]">{item.userName}</h4>
                                        <h5 className="text-[12px] mb-0">
                                            {new Date(item.createdAt).toISOString().split("T")[0]}
                                        </h5>
                                        <p className="mt-0 mb-0 text-[14px]">
                                            {item.review}
                                        </p>
                                    </div>
                                </div>
                                <Rating name='size-small'  value={item.rating} precision={0.5} readOnly />
                            </div>
                        )
                        )}
                </div>
            }

            <br />
            {/* adding rating */}
            <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                <h2 className="text-[18px]">Add a review</h2>
                <form className="w-full mt-5" onSubmit={handelSubmit}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Write a review..."
                        className="w-full mb-5"
                        multiline
                        rows={5}
                        name='review'
                        value={reviews.review}
                        onChange={onChangeInput}
                    />
                    <br /><br />
                    <Rating name='size-small' value={reviews.rating} precision={0.5} defaultValue={1}
                        onChange={(event, newValue) => {
                            setReviews(() => ({
                                ...reviews,
                                rating: newValue
                            }))
                        }}
                    />
                    <div className='flex items-center mt-5'>
                        <Button className='btn-org' type='submit'>Submit Review</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reviews;
