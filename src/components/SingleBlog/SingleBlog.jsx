import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const SingleBlog = (props) => {
  const { id, blogCover, authorImage, writtingDate, authorName, readingTime, title, tag1, tag2 } = props.blogData;

  const {addReadingTime} = props;
  const {addToBookMark} = props;
  const [bookMarkBtn, setBookMarkBtn] = useState(false);
  const storedData = JSON.parse(localStorage.getItem('bookMarkedItems'));
  const isExist = storedData?.find( item => item?.id === id);
  return (
    <>
      <div>
        
        <div className=" card-compact rounded-none w-100 pt-8  bg-base-100">
        {/*------- Blog Cover------- */}
        <figure>
          <img
            className="rounded-lg "
            src={blogCover}
            alt="Blog Cover"
          />
        </figure>

        <div className="my-4">
          <div className="flex items-center justify-between">
            {/*------- Author Details------- */}
            <div className="flex items-center">
              <img
                className="rounded-full w-12 md:w-14"
                src={authorImage}
                alt=""
              />
              <div className="ms-4">
                <h4 className="font-bold text-xl text-black">{authorName}</h4>
                <p className="text-gray-500 text-sm">{writtingDate}</p>
              </div>
            </div>

           {/*------- Reading Time and Bookmarked------- */}
            <div>
              <span className=" text-gray-600 text-lg">{readingTime} min read</span>

              <span onClick={() => {
                addToBookMark(id)
                setBookMarkBtn(true)
              }}  className="btn text-2xl mx-2 border-0 p-0 hover:bg-transparent bg-transparent">
                {(bookMarkBtn || isExist) ? <FontAwesomeIcon icon={faBookmark} title="BookMarked Blog" style={{ color: "royalblue" }} /> : <FontAwesomeIcon icon={faBookmark} title="Add BookMark" style={{ color: "gray" }} />}
              </span>



            </div>
          </div>

        {/*------- Blog Title------- */}
          <h2 className="card-title mt-6 pb-4 text-2xl md:text-3xl  lg:text-4xl">
           {title}
          </h2>

        {/*------- Blog Related Tags------- */}
          <p className="text-gray-500 my-4">
            {tag1} <span className="ms-4">{tag2}</span>
          </p>

          <button onClick={() => addReadingTime(readingTime)} className="btn border-0 ps-0 hover:bg-transparent bg-transparent text-violet-700 underline">Mark as read</button>
        </div>
      </div>
      <hr />
      </div>
    </>
  );
};

export default SingleBlog;
