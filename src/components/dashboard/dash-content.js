import DashContainer from "./dash-container";
import DashNav from "./dash-navbar";
import Content from "./dash-layout" ;
import backgroundImage from '../../asset/image/background/Perspective.jpg';
import backgroundImage2 from '../../asset/image/background/bg2.jpg';
import backgroundImage3 from '../../asset/image/background/bg3.png';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Projects(){
  const CardBg = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
  };
  const CardBg2 = {
    backgroundImage: `url(${backgroundImage2})`,
    backgroundSize: 'cover',
  };
  const CardBg3 = {
    backgroundImage: `url(${backgroundImage3})`,
    backgroundSize: 'cover',
  };


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    return(
        <div  className="text-black">
            <Content />
       {/* add category */}
       {/* effect dark */}
       <Dialog  open={open}
        onClose={handleClose} >
       <div    className='fixed w-96   shadow-md border  rounded-md bg-white px-10 py-5   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col gap-5'>
<svg onClick={handleClose}  className="hide-button"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="cursor-pointer w-6 h-6 block fill-black top-2 absolute right-2">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
</svg>


  <h1 class="text-xl">Add Category</h1>
<input type="text"  placeholder="Typing.."  class=" w-full focus:outline-none text-gray-700 px-2 py-1 border-gray-400 bg-gray-200  rounded-md"></input>

<div class=" flex items-center justify-start">
  <button id="" class="close-add-category bg-emerald-500   px-10 py-1 rounded-md text-white focus:outline-none">Submit</button>
</div>



    </div>
       </Dialog >
 
      
     
   
    {/* end add category */}
            <div className="w-full  absolute right-10 w-4/5 p-6">
      <div className="flex justify-between text-slate-800 items-center">
        <h1 className="text-3xl">Projects</h1>
        <div className>
          <Link to="/dashboard/new-projects" className="bg-teal-500 hover:bg-teal-400 rounded-md px-3 py-2 text-white  ">Add New Projects</Link>
        </div>
      </div>
      <div style={{top: 10}} className=" z-20 mt-6  block bg-white  rounded-md sticky shadow-md border border-gray-300 p-2">
        <div className="flex items-center justify-between">
          <p className="text-xl text-gray-700">Category</p>
          <div className=" cursor-pointer flex items-center gap-2 ">
            <p className=" text-xl">Sort</p>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </div>
        </div>
        <br />
        <div className="flex flex-wrap gap-1">
          <button className="px-4 py-2 rounded-md hover:bg-indigo-400  cursor-pointer  text-white border text-center  bg-indigo-500  ">All</button>
          <button className="px-4 py-2 rounded-md hover:bg-indigo-400  cursor-pointer  text-white border text-center bg-indigo-500  ">Online Store website</button>
          <button className="px-4 py-2 rounded-md hover:bg-indigo-400  cursor-pointer  text-white border text-center bg-indigo-500  ">Company Profile</button>
          <button className="px-4 py-2 rounded-md hover:bg-indigo-400  cursor-pointer  text-white border text-center bg-indigo-500  ">Travel Website</button>
          <button onClick={handleClickOpen}  className="open-add-category rounded-full  w-10 flex items-center justify-center text-white cursor-pointer text-center   "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 bg-indigo-600 hover:bg-indigo-400 rounded-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
      {/* card project */}
      <div className=" grid grid-cols-2 xl:grid-cols-2 gap-5 mt-6 ">
       <div className="w-full relative h-96 rounded-md bg-red-200 group cursor-pointer">
       <div  style={CardBg} className="absolute w-full h-full" ></div>
       <div className="bg-black w-full h-full absolute opacity-50 group-hover:block hidden"></div>
       {/* top */}
       <div className="absolute right-5  hidden group-hover:flex top-5  flex-col gap-5">
      
        <button className="bg-yellow-500 px-5 py-1 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
</svg>
        </button>
        <button className="bg-red-500 px-5 py-1 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
</svg>

        </button>
       </div>
       {/* end top */}
       {/* footer */}
       <div className="py-5 hidden group-hover:block text-white absolute w-full px-5 bottom-0">
        <p className="text-2xl font-bold">Symphone</p>
        <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</p>
       </div>
       {/* end footer */}
       </div>
       <div className="w-full relative h-96 rounded-md bg-red-200 group cursor-pointer">
       <div  style={CardBg2} className="absolute w-full h-full" ></div>
       <div className="bg-black w-full h-full absolute opacity-50 group-hover:block hidden"></div>
       {/* top */}
       <div className="absolute right-5  hidden group-hover:flex top-5  flex-col gap-5">
      
        <button className="bg-yellow-500 px-5 py-1 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
</svg>
        </button>
        <button className="bg-red-500 px-5 py-1 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
</svg>

        </button>
       </div>
       {/* end top */}
       {/* footer */}
       <div className="py-5 hidden group-hover:block text-white absolute w-full px-5 bottom-0">
        <p className="text-2xl font-bold">Symphone</p>
        <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</p>
       </div>
       {/* end footer */}
       </div>
       <div className="w-full relative h-96 rounded-md bg-red-200 group cursor-pointer">
       <div  style={CardBg3} className="absolute w-full h-full" ></div>
       <div className="bg-black w-full h-full absolute opacity-50 group-hover:block hidden"></div>
       {/* top */}
       <div className="absolute right-5  hidden group-hover:flex top-5  flex-col gap-5">
      
        <button className="bg-yellow-500 px-5 py-1 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
</svg>
        </button>
        <button className="bg-red-500 px-5 py-1 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
</svg>

        </button>
       </div>
       {/* end top */}
       {/* footer */}
       <div className="py-5 hidden group-hover:block text-white absolute w-full px-5 bottom-0">
        <p className="text-2xl font-bold">Symphone</p>
        <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</p>
       </div>
       {/* end footer */}
       </div>
     
      
      </div>
      {/* end card project */}
    </div>
        </div>
    )
}
export default Projects;