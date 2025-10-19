import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = (props) => {
  return (
    <div className="blogItems px-5 group h-full">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src={props.blog.images[0]}
          className="w-full h-[220px] object-cover transition-all group-hover:scale-105 group-hover:rotate-1"
          alt="blog image"
        />
        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
          <IoMdTime className="text-[16px]" />
          {(() => {
            const d = new Date(props.blog.createdAt);
            const day = d.getDate();
            const month = d.toLocaleString("en-US", { month: "long" }).toUpperCase();
            const year = d.getFullYear();
            return `${day} ${month}, ${year}`;
          })()}
        </span>
      </div>

      {/* Flex container for equal height content */}
      <div className="info py-4 flex flex-col h-[220px]">
        {/* Title */}
        <h2 className="text-[15px] font-[600] text-black mb-3 line-clamp-2">
          <Link to={`/blog/${props.blog._id}`} className="hover:text-[#ff5252]">{props.blog.title}</Link>
        </h2>

        {/* Description with ellipsis */}
        <div
          className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)]  line-clamp-3 flex-grow"
          dangerouslySetInnerHTML={{
            __html: props.blog?.description
              ? props.blog.description.replace(/<[^>]+>/g, '').slice(0, 150) + '...'
              : ''
          }}
        />

        {/* Read More button sticks at bottom */}
        <Link
  to={`/blog/${props.blog._id}`}
  className="link hover:text-[#ff5252] font-[500] text-[14px] flex items-center gap-1 mt-0"
>
          Read More <IoIosArrowForward />
        </Link>
      </div>
    </div>
  )
}

export default BlogItem;
