import React from "react";
import '../style.css';
function contact(){
    return(
        <div id="contact" data-aos="fade-down" data-aos-duration="600" className="w-full   h-screen flex items-center justify-center">
            <div className="flex flex-col gap-10 lg:w-1/2  px-10  justify-center">
            <p class="text-littletittle text-xl  font-bold font-rubik">04.Contacts</p>
            <p className="text-justify lg:w-11/12 text-littletext text-lg">Whether you're interested in discussing a specific project or just want to learn more about what I do, I'd love to hear from you. You can contact me by pressing the button below.</p>
            <a href="mailto:fahmirahman022704@gmail.com" className="text-button  font-bold bg-white rounded-full  text-center w-full md:w-40 py-2">Contact Me</a>
            </div>
        </div>
    )
}
export default contact;