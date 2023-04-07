import React from "react";
import '../style.css';
import linked from '../asset/image/logo/linkedin.png';
import github from '../asset/image/logo/git.png';
import logo from '../asset/image/logo/farnwhite.png';
function Socmed(){
    return (
        <div>
<div style={{}} className="slide-soc lg:flex hidden xl:right-24  gap-2  flex-col items-center lg:right-5 justify-center h-43   fixed z-10  bottom-0">
       
<a href="https://www.linkedin.com/in/fahmi-rahman-022060233/" className="hover:scale-110">
   <img  src={linked}  className="w-10"></img>
   
</a>
<a href="https://github.com/farn0227/" className="hover:scale-110">
<img src={github} className="w-10"></img>
</a>
<div style={{width: "1px" , height: "50px"}} className="  bg-white bg-opacity-90 "></div>

</div>
<div className="fixed xl:left-24 lg:flex hidden lg:left-5 flex-col  gap-5 items-start bottom-0 ">
    <p className="  origin-left -rotate-90 opacity-90 tracking-widest text-sm desc-text ">farn0227@gmail.com</p>
    <span style={{width: "1px" , height: "200px"}}  className=" bg-white block"></span>
</div>
</div>
    )
}
export default Socmed;