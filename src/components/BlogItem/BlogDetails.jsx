import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { getData } from "../../../utils/api";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(`/api/blog/${id}`).then((res) => {
      if (res?.success) {
        setBlog(res.blogs);
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!blog) return <div className="text-center mt-10 text-red-500">Blog not found</div>;

  const d = new Date(blog.createdAt);
  const formattedDate = `${d.getDate()} ${d.toLocaleString("en-US", {
    month: "long",
  })}, ${d.getFullYear()}`;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back link */}
      <Link to="/" className="text-primary hover:underline">&larr; Back to Blogs</Link>

      {/* Blog title */}
      <h1 className="text-2xl font-bold mt-4 mb-2">{blog.title}</h1>

      {/* Date */}
      <p className="flex items-center text-gray-500 text-sm mb-4 gap-1">
        <IoMdTime /> {formattedDate}
      </p>

      {/* Image */}
      {blog.images?.[0] && (
        <div className="w-full flex justify-center my-6">
            <img
            src={blog.images[0]}
            alt="Blog"
            className="w-[600px] h-[400px] object-cover rounded-lg shadow-md"
            />
        </div>
        )}

      {/* Description */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </div>
  );
};

export default BlogDetails;

