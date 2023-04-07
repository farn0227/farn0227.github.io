import React from "react";
import '../style.css';
import profile from '../asset/image/profile/bmo-farn2.png';

function about(){
    return (
        <div id="about" data-aos="fade-right" data-aos-duration="600"  className="sec xl:w-4/6 lg:w-5/6 w-full px-5 lg:px-0   m-auto text-white pt-20 h-screen  flex items-center ">
        <div className="flex  items-center justify-center  w-full lg:gap-10">
            <div className="" >
                <ul className=" flex flex-col gap-5  ">
                    <li>
                        <p className="text-littletittle text-xl  font-bold font-rubik">01.About Me</p>
                    </li>
                    <li>
                        <h1 className="text-4xl font-tittle tracking-wide">WHO IS FARN</h1>
                        <p  className="text-littletext lg:w-11/12 w-full text-lg text-justify">
                            My name is Fahmi Rahman and I use FARN as my nickname across social medias. I’m a graphic designer, UX/UI designer & front-end web developer from Indonesia.</p>
                            <p className="text-littletext lg:w-11/12 w-full text-lg text-justify">I have a keen eye for detail and a deep understanding of design principles, allowing me to create websites and apps</p>
                    </li>

                    <li className="mt-5 ">
                        <p
                        style={{
                        
                        }}
                        id="resume-button"
                        className="text-littletext w-full md:w-auto text-center  tracking-wide relative  inline-block px-4 py-1  text-base cursor-pointer">Resume</p>
                        
                    </li>
                </ul>
            </div>

            <img src={profile} style={{width:"350px"}} className=" hidden lg:block  pt-10" alt=""></img>
    
        </div>
    </div>
    )
}
export default about;