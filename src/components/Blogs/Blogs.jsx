import React from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
const Blogs = ({allBlogs, addReadingTime, addToBookMark }) => {
   

  return (
    <>
     {
      allBlogs?.map( blog => <SingleBlog blogData = {blog} key = {blog?.id} addToBookMark ={addToBookMark}  addReadingTime={addReadingTime} > </SingleBlog> )
     }
    </>
  );
};

export default Blogs;
