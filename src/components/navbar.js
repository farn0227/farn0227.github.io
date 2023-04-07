import React, { useEffect,useState  } from 'react';
import { useLocation } from 'react-router-dom';
import '../style.css';
import logo from '../asset/image/logo/farnwhite.png';
import { Link } from 'react-router-dom';
function NavigationBar({setClick}){

    return (
    <div>
        <div  data-aos="fade-down" className=" fixed  z-30   items-center w-full">
            <div className="navbar items-center flex justify-between py-12 px-5 md:px-0 m-auto h-40 md:w-11/12 lg:w-11/12 z-20  ">
                <Link to="/" onClick={()=>setClick(false)} >
                <img src={logo} className="w-14" alt="logo"></img>
                </Link>
            <ul className=" justify-between gap-2 hidden md:flex items-center">
                <li>
                <Link to="/#about" onClick={()=>setClick(false)}  className="element px-3 py-2 tracking-wide rounded-full hover:font-bold hover:scale-110 transition-all cursor-pointer">
                    About
                </Link>
                
                </li>
                <li>
                <Link to="/#works" onClick={()=>setClick(false)} className="px-3 py-2 tracking-wide rounded-full hover:font-bold hover:scale-110 transition-all cursor-pointer">
                    Works
                    </Link>
                </li>
                <li>
                <Link to="/#projects" onClick={()=>setClick(false)} className="px-3 py-2 tracking-wide rounded-full hover:font-bold hover:scale-110 transition-all cursor-pointer">
                    Projects
                    </Link>
                </li>
                <li>
                <Link to="/#contact" onClick={()=>setClick(false)} className="px-3 py-2 tracking-wide rounded-full hover:font-bold hover:scale-110 transition-all cursor-pointer">
                    Contact
                    </Link>
                </li>
            </ul>
            <button id="toggle-hamburger" className=" block md:hidden  relative mr-8 cursor-pointer w-7 h-5">
                <span  className="line1 bg-white w-7 h-0.5 inline-flex oprigin-center absolute top-0 left-0"></span>
                <span  className="line2 bg-white w-7 h-0.5 inline-flex oprigin-center absolute bottom-1/2 left-0"></span>
                <span  className="line3 bg-white w-7 h-0.5 inline-flex oprigin-center absolute bottom-0 left-0"></span>
            </button>
        </div>
        </div>
    </div>
    )
}
export default NavigationBar