import React from "react";
import '../style.css';
import logo from '../asset/image/logo/farnwhite.png';

function NavigationBar(){
    return (
    <div>
        <div  data-aos="fade-down" className=" fixed  z-30   items-center w-full">
            <div className="navbar items-center flex justify-between py-12 px-5 md:px-0 m-auto h-40 md:w-11/12 lg:w-10/12 z-20  ">
                <a href="" class="cusor-pointer">
            <img src={logo} className="w-14" alt="logo"></img>
            </a>
            <ul className=" justify-between gap-2 hidden md:flex items-center">
                <li>
                    <a href="#about" className="px-3 py-2 tracking-wide rounded-full hover:font-bold hover:scale-110 transition-all cursor-pointer">About</a>
                </li>
                <li>
                <a href="#works" className="px-3 py-2 tracking-wide rounded-full hover:font-bold hover:scale-110 transition-all cursor-pointer">Works</a>
                </li>
                <li>
                <a href="#projects" className="px-3 py-2 tracking-wide rounded-full hover:font-bold hover:scale-110 transition-all cursor-pointer">Projects</a>
                </li>
                <li>
                <a href="#contact" className="px-3 py-2 tracking-wide rounded-full hover:font-bold hover:scale-110 transition-all cursor-pointer">Contact</a>
                </li>
            </ul>
            <button id="toggle-hamburger" class=" block md:hidden  relative mr-8 cursor-pointer w-7 h-5">
                <span  class="line1 bg-white w-7 h-0.5 inline-flex oprigin-center absolute top-0 left-0"></span>
                <span  class="line2 bg-white w-7 h-0.5 inline-flex oprigin-center absolute bottom-1/2 left-0"></span>
                <span  class="line3 bg-white w-7 h-0.5 inline-flex oprigin-center absolute bottom-0 left-0"></span>
            </button>
        </div>
        </div>
    </div>
    )
}
export default NavigationBar