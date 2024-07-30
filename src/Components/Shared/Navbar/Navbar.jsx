import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import "./navbar.css"

const Navbar = () => {
    const [isMenuDown, setIsMenuDown] = useState(false)
    const [isDown, setIsDown] = useState(false)
    console.log(isMenuDown)
  return (
    <div className="h-20 flex items-center">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="sidebar">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="sidebar">
                <NavLink to={"/about"}>About Us</NavLink>
              </li>
              <li className="sidebar">
                <NavLink to={""}>Sister Concern</NavLink>
              </li>
              <li className="sidebar" onClick={() => setIsMenuDown(!isMenuDown)}>
                <NavLink >Our Team</NavLink>
              </li>
              <li className="sidebar">
                <NavLink to={"/gallery"}>Photo Gallery</NavLink>
              </li>
              <li className="sidebar">
                <NavLink to={"/contact"}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <a className="">
            <img src={logo} className="h-16 w-16" alt="" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li className="">
              <NavLink to={"/"} className="sidebar">Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className="sidebar">About Us</NavLink>
            </li>
            <li className=" relative" onClick={() => setIsDown(!isDown)}>
              <a className="sidebar">
                Sister Concern
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </a>
              <div className={`absolute top-[100%] bg-base-200 w-40 z-10 ${isDown? "block" : "hidden"}`}>
                    
                    <li className="sidebar"><Link>IGL WEB</Link></li>
                    <li className="sidebar"><Link>IGL NET</Link></li>
                   
                </div>
            </li>
            <li className=" relative" onClick={() => setIsMenuDown(!isMenuDown)}>
              
               <a className="sidebar"> Our Team
                <span>
                  <MdKeyboardArrowDown />
                </span></a>
                <div className={`absolute top-[100%] bg-base-200 w-56 z-10 ${isMenuDown? "block" : "hidden"}`}>
                    
                    <li className="sidebar"><Link>Board of Director</Link></li>
                    <li className="sidebar"><Link>Board of Officer/Staff</Link></li>
                   
                </div>
              
            </li>
            <li >
              <NavLink to={"/gallery"} className="sidebar">Photo Gallery</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className="sidebar">Contact Us</NavLink>
            </li>
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
