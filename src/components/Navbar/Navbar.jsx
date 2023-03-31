import React from "react";
import "./Navbar.css";
import userImage from "../../assets/images/userProfile.png";

const Navbar = () => {
  return (
    <>
    {/* ---------Responsive Navigation Bar */}
      <nav className="navbar bg-base-100 ">
        <div className="flex-1 items-center justify-between">
          <a className=" font-bold normal-case text-lg md:text-2xl">Knowledge Cafe</a>

          <div className="flex items-center justify-around">
            <div className="hidden md:block ">
              <a className="me-6" href="#blog">
                Blogs
              </a>
              <a className="me-6" href="#questions">
                Questions
              </a>
              <a className="me-6" target="_blank" href="https://developer-shourav.web.app">
                About
              </a>
            </div>
            <div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 md:w-12 rounded-full">
                    <img src={userImage} />
                  </div>
                </label>
                <ul 
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact block md:hidden dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between" href="#blog">
                      Blogs
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a href="#questions">Questions</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://developer-shourav.web.app">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
