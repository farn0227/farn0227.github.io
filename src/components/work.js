import React from "react";
import '../style.css';
import js from '../asset/image/card/js.png';
import react from '../asset/image/card/React-icon2.png';
import html from '../asset/image/card/html.png';
function work(){
    return (
        <div id="works" element="works" className="sec flex justify-center h-screen pt-20 gap-10 items-center px-5 lg:px-0">
             
             <div data-aos="fade-left" className="spire-glass lg:block hidden bg-no-repeat bg-cover rounded-full bg-center relative">
            <div className="balok h-full w-full  -z-20 blur-sm absolute rounded-full opacity-50 w-full spire-gradient "></div>
            {/* glow card */}
            <div className="w-56 h-32 px-4    page-glow  absolute items-center flex flex-wrap">

            <span  className="dot-glow w-full flex items-center px-2 gap-2  h-5 bg-purple-200 rounded-full block  ">
            <span style={{backgroundColor: "rgb(145,42,255)"}} className="dot-glow-page-1 dot-glow w-2 h-2  block rounded-full"></span>
            <span style={{backgroundColor: "rgb(177, 105, 253)"}} className="dot-glow-page-2 dot-glow w-2 h-2  block rounded-full"></span>
            <span style={{backgroundColor: "rgb(199, 146, 255)"}} className="dot-glow-page-3 dot-glow w-2 h-2  block rounded-full"></span>
            </span>

            <span  className=" dot-glow w-10   h-14 bg-purple-200 rounded-md block  "></span>
            <div className="flex flex-col gap-2">
            <span  className="dot-glow w-32   h-5 rounded-md bg-purple-200  block  "></span>
            <span  className="dot-glow w-full   h-5 rounded-md bg-purple-200 rounded- block  "></span>
            </div>

            <span  className="dot-glow w-10   h-2 bg-purple-200 rounded-full block  "></span>
            <span  className="dot-glow w-1/2   h-2 bg-purple-200 rounded-full block  "></span>
            <span  className="dot-glow w-20   h-2 bg-purple-200 rounded-full block  "></span>
            <span  className="dot-glow w-20   h-2 bg-purple-200 rounded-full block  "></span>
            </div>

              <div className="w-56 h-32 px-4 py-5   page-glow2  absolute items-center flex flex-wrap">
            <span  className=" dot-glow w-10   h-2 bg-purple-200 rounded-md block  "></span>
            <span  className="dot-glow w-32   h-2 rounded-md bg-purple-200  block  "></span>
            <span  className="dot-glow w-full ml-10  h-2 rounded-md bg-purple-200 rounded- block  "></span>
            <span  className="dot-glow w-10  ml-5 h-2 bg-purple-200 rounded-full block  "></span>
            <span  className="dot-glow w-1/2   h-2 bg-purple-200 rounded-full block  "></span>
            <span  className="dot-glow w-20   h-2 bg-purple-200 rounded-full block  "></span>
            <span  className="dot-glow w-20   h-2 bg-purple-200 rounded-full block  "></span>
            </div>
            {/* end glow card */}
            {/* card-fly */}
            {/* js */}
            <div  className="absolute js-card -left-10  z-40 flex items-center justify-center "><img src={js} className="w-14" alt=""></img></div>   
            <div  className="react-card absolute top-20 -right-10 z-40 flex items-center justify-center "><img src={react} className="w-14" alt=""></img></div>   
            <div  className="absolute html-card left-20   z-40 flex items-center justify-center"><img src={html} className="w-20" alt=""></img></div>   
       </div>
             <ul data-aos="fade-up" className=" flex flex-col gap-5 relative items-between lg:w-1/3 ">
                 <li>
                     <p className="text-littletittle text-xl font-bold font-rubik tracking-wider">02.My Work Job</p>
                 </li>
                 <li>
                     <h1 className="font-tittle text-5xl font-bold">THE JOB I DO
                         </h1>
                 </li>
                 <li>
                     <p  className="text-justify tracking-wider text text-littletext ">
                     As a front end programmer, I am responsible for creating the appearance of a website or application used by users. including designing and developing user interfaces, integrating content, and creating intuitive and responsive interactions.
                     <br></br></p>
                 </li>

                 <li className="mt-5 ">
                     <ul className="flex flex-wrap gap-5 text-support text">
                         <li>
                             <p>Javascript</p>
                         </li>
                         <li>
                             <p>Html</p>
                         </li>
                         <li>
                             <p>Css</p>
                         </li>
                         <li>
                             <p>Figma</p>
                         </li>
                         <li>
                             <p>Jquery</p>
                         </li>
                         <li>
                             <p>React Js</p>
                         </li>
                     </ul>
                 </li>
             </ul>
    
         </div>
)
}
export default work;