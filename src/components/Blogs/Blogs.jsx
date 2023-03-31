import React from "react";
import { useEffect, useState} from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
const Blogs = ({addReadingTime, addToBookMark }) => {
   
  const [allBlogs, setAllBlogs] = useState([]);
  
  useEffect( ( ) => {
    fetch('data.json')
    .then ( res => res.json())
    .then ( data => setAllBlogs(data))
  }, [ ])

  return (
    <>
     {
      allBlogs.map( blog => <SingleBlog blogData = {blog} key = {blog?.id} addToBookMark ={addToBookMark}  addReadingTime={addReadingTime} > </SingleBlog> )
     }
    </>
  );
};

export default Blogs;
