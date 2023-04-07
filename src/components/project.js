import React from "react";
import '../style.css';
import card from '../asset/image/card/web.webp';
import { Link } from "react-router-dom";
function projects(){
    return(
        <div id="projects" >
        <div  className="sec xl:w-4/6 lg:w-5/6 w-full px-5 lg:px-0    m-auto text-white pt-20   flex items-center">
            <div className=" ">
            <p className="text-littletittle text-xl  font-bold font-rubik">03.Work</p>
            <ul className=" gap-10 justify-center flex flex-col  py-10">
                <Link to="/projects" >
                <li data-aos="fade-up" style={{width:"full" }} className="card-projects bg-cover  rounded-md  overflow-hidden justify-between md:h-96 h-80 bg-white flex">
                    <div className=" h-full w-full hidden md:flex justify-center  gap-10 flex flex-col w-1/2  px-10 py-5 inside-card-projects">
                        <div className="flex items-center justify-between ">
                        <p className=" opacity-80 tracking-wide">2023</p>
                        <p className="font-semibold tracking-wide border-b">New</p>
                        
                        </div>
                        
                        <div>
                        <h1 className="lg:text-5xl text-2xl  ">Symova</h1>
                        <p className="text-md tracking-wide">layanan & website design</p>
                        </div>
                        <div
                        style={{
                        
                        }}
                        id="resume-button"
                        className="text-littletext w-full md:w-auto text-center flex items-center justify-center gap-2  tracking-wide relative  inline-block px-4 py-1 hover:text-white  text-base cursor-pointer">Visit Site
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
</svg>


                        </div>
                        <div>
                     
                        <ul className="flex gap-4 text-littletext   text-sm opacity-80">
                            <li>React Js</li>
                            <li>Tailwind Css</li>
                            <li>Fire Base</li>
                        </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-5 py-10">
                    <img src={card} className="auto "></img>
                    </div>
                    
                </li>
                </Link>   
                <Link to="/projects" >
                <li data-aos="fade-up" style={{width:"full" }} className="card-projects bg-cover  rounded-md  overflow-hidden justify-between md:h-96 h-80 bg-white flex">
                    <div className=" h-full w-full hidden md:flex justify-center  gap-10 flex flex-col w-1/2  px-10 py-5 inside-card-projects">
                        <div className="flex items-center justify-between ">
                        <p className=" opacity-80 tracking-wide">2023</p>
                        <p className="font-semibold tracking-wide border-b">New</p>
                        
                        </div>
                        
                        <div>
                        <h1 className="lg:text-5xl text-2xl  ">Symova</h1>
                        <p className="text-md tracking-wide">layanan & website design</p>
                        </div>
                        <div
                        style={{
                        
                        }}
                        id="resume-button"
                        className="text-littletext w-full md:w-auto text-center flex items-center justify-center gap-2  tracking-wide relative  inline-block px-4 py-1 hover:text-white  text-base cursor-pointer">Visit Site
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
</svg>


                        </div>
                        <div>
                     
                        <ul className="flex gap-4 text-littletext   text-sm opacity-80">
                            <li>React Js</li>
                            <li>Tailwind Css</li>
                            <li>Fire Base</li>
                        </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-5 py-10">
                    <img src={card} className="auto "></img>
                    </div>
                    
                </li>
                </Link>  

                <Link to="/projects" >
                <li data-aos="fade-up" style={{width:"full" }} className="card-projects bg-cover  rounded-md  overflow-hidden justify-between md:h-96 h-80 bg-white flex">
                    <div className=" h-full w-full hidden md:flex justify-center  gap-10 flex flex-col w-1/2  px-10 py-5 inside-card-projects">
                        <div className="flex items-center justify-between ">
                        <p className=" opacity-80 tracking-wide">2023</p>
                        <p className="font-semibold tracking-wide border-b">New</p>
                        
                        </div>
                        
                        <div>
                        <h1 className="lg:text-5xl text-2xl  ">Symova</h1>
                        <p className="text-md tracking-wide">layanan & website design</p>
                        </div>
                        <div
                        style={{
                        
                        }}
                        id="resume-button"
                        className="text-littletext w-full md:w-auto text-center flex items-center justify-center gap-2  tracking-wide relative  inline-block px-4 py-1 hover:text-white  text-base cursor-pointer">Visit Site
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
</svg>


                        </div>
                        <div>
                     
                        <ul className="flex gap-4 text-littletext   text-sm opacity-80">
                            <li>React Js</li>
                            <li>Tailwind Css</li>
                            <li>Fire Base</li>
                        </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-5 py-10">
                    <img src={card} className="auto "></img>
                    </div>
                    
                </li>
                </Link>  
            </ul>
            <div className="text-center">
            <button id="resume-button" className="text-littletext cursor-pointer font-rubik w-full md:w-auto text-center  tracking-wide relative  inline-block px-4 py-1  text-base cursor-pointer">See More</button>
            </div>
            </div>
             
            </div>
            </div>
    )

}
export default projects ;