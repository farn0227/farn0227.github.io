import React from "react";
import '../style.css';

function First(){
    return (
        <div className="first">
        <div  data-aos="fade-right" className="h-screen  flex r pt-20  items-center md:w-3/5 w-full px-5 md:px-0 m-auto">
            
            <div className="flex flex-col gap-10 ">
                <div className="">
                <h1  className=" text-9xl font-tittle  whitespace-pre-line font-bold  m-auto ">HELLO,</h1>
                <h1  className=" text-7xl text-left  font-tittle  whitespace-pre-line font-bold mt-16 ml-1 m-auto ">IM FARN</h1>
                </div>
                <div className="flex items-center gap-2">
                <span className="w-52 h-0.5 bg-white block"></span>
                <span className="w-3 h-3 rounded-full bg-white block"></span>
                <span className="w-3 h-3 rounded-full bg-white block"></span>
                </div>
<a href="#about" className="text-button text-center font-bold bg-white rounded-full block w-40 py-2">About me</a>
            </div>
        </div>
        </div>
    )

}
export default First;