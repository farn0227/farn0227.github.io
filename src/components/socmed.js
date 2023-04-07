import React from "react";
import '../style.css';
import linked from '../asset/image/logo/linkedin.png';
import github from '../asset/image/logo/git.png';
import logo from '../asset/image/logo/farnwhite.png';
function Socmed(){
    return (
<div style={{right: "10%"}} className="slide-soc md:flex hidden  gap-2  flex-col items-center  justify-center h-43   fixed z-10  bottom-0">
       
<a href="https://www.linkedin.com/in/fahmi-rahman-022060233/" className="hover:scale-110">
   <img  src={linked}  className="w-10"></img>
   
</a>
<a href="" className="hover:scale-110">
<img src={github} className="w-10"></img>
</a>
<div style={{width: "1px" , height: "50px"}} className="  bg-white bg-opacity-90 "></div>

</div>
    )
}
export default Socmed;