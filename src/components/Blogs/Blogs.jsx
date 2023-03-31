import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookmark  } from '@fortawesome/free-solid-svg-icons';
const Blogs = () => {
  return (
    <>
      <div className=" card-compact rounded-none w-100  bg-base-100">
        <figure>
          <img
            className="rounded-lg "
            src="https://i.ibb.co/dJ1HgN5/cover1.png"
            alt="Blog Cover"
  
          />
        </figure>
        <div className="my-4">

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="rounded-full w-12 md:w-14"  src="https://i.ibb.co/0yRD7H6/author1.png" alt="" />
              <div className="ms-4">
                <h4 className="font-bold text-xl text-black">Mr. Raju</h4>
                <p className="text-gray-500 text-sm">Mar 14 (4 Days ago)</p>
              </div>
            </div>

            <div>
              <span className=" text-gray-600 text-lg">05 min read</span>
              <span className="text-2xl mx-2"><FontAwesomeIcon icon={faBookmark} style={{color:'gray'}} /></span>
              <span className="text-2xl"><FontAwesomeIcon icon={faBookmark} style={{color:'royalblue'}} /></span>
            </div>
          </div>

          <h2 className="card-title mt-6 pb-4   text-4xl">How to get your first job as a self-taught programmer</h2>
          <p className="text-gray-500">#beginners   <span className="ms-4">#programming</span></p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
