import React from "react";
import '../style.css';
function hamburger(){
    return(
        <div style={{left:"-90%"}} class="hamburger z-50 fixed w-full bg-red-900  lg:hidden block h-screen">
<div class="relative text-white  ">
    <button id="close-ham" class="close-ham bg-red-200 px-5 py-5 cursor-pointer  right-10 top-10  block absolute ">
          x
    </button>
    <ul class="flex flex-col pt-40 gap-10 justify-center items-center  ">
        <li>
            <a href="#about" class="clicked-list-ham text-xl py-5">About</a>
        </li>
        <li>
            <a href="#works" class="clicked-list-ham text-xl py-5">Work</a>
        </li>
        <li>
            <a href="#projects" class="clicked-list-ham text-xl py-5">Projects</a>
        </li>
        <li>
            <a href="#contact" class="clicked-list-ham text-xl py-5">Contacts</a>
        </li>
    </ul>
   
</div>
</div>
    )
}
export default hamburger;