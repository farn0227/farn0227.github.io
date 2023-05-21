import React from "react";
import '../style.css';
import linked from '../asset/image/logo/linkedin.png';
import github from '../asset/image/logo/git.png';
function hamburger(){
    return(
        <div style={{left:"-100%" , backgroundColor:"#081b44"}} id="hamburgerblock" className="hamburger z-50 fixed w-full  lg:hidden block h-screen">
<div className="relative text-white  ">
    <button id="close-ham" className="close-ham-list  px-5 py-5 cursor-pointer  right-10 top-10  block absolute ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9">
  <path strokeLinecap="round"    d="M6 18L18 6M6 6l12 12" />
</svg>

    </button>
    <ul className="flex flex-col pt-40 gap-10 justify-center items-center  ">
        <li>
            <a href="#about" className="close-ham-list text-xl py-5">About</a>
        </li>
        <li>
            <a href="#works" className="close-ham-list text-xl py-5">Work</a>
        </li>
        <li>
            <a href="#projects" className="close-ham-list text-xl py-5">Projects</a>
        </li>
        <li>
            <a href="#contact" className="close-ham-list text-xl py-5">Contacts</a>
        </li>
    </ul>
    <div className="flex gap-2 items-center justify-center mt-20">
        <a href="" className="hover:scale-105">
        <img src={linked} className="w-10"></img>
        </a>
        <a href="" className="hover:scale-105">
        <img src={github} className="w-10"></img>
        </a>
    </div>
</div>
</div>
    )
}
export default hamburger;