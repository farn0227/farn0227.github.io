import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

function DashNav(){
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    if (showElement) {
      // logika untuk menampilkan elemen
    } else {
      // logika untuk menyembunyikan elemen
    }
  }, [showElement]);
    return(
  <div className=" w-full ">
    
    {/* start navbar */}
    <div className=" md:w-full md:top-0 md:z-20 flex justify-between  items-center bg-white p-6 border-b border-gray-300">
    {/* logo */}
    <div className=" w-48 text-center">
      <strong className="capitalize ml-1 flex-1 text-gray-800">FARN DASHBOARD</strong>
   
    </div>
    {/* end logo */}   
    {/* navbar content */}
    <div id="navbar" className="animated  ">
      {/* right */}
      <div className="flex flex-row-reverse items-center"> 
        {/* user */}
        <div className="dropdown relative md:static">
          <button onClick={() => setShowElement(!showElement)} className="menu-btn focus:outline-none focus:shadow-outline mr-10 flex flex-wrap items-center">
            <div className="w-8 h-8  flex items-center justify-center rounded-full">
            <Avatar sx={{ bgcolor: deepOrange[500] , width :'2rem' , height : '2rem'
            }}>M</Avatar>
            </div> 
            <div  className="ml-2 capitalize flex items-center gap-2  ">
              <h1 className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none">moeSaid</h1>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
  <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
</svg>

            </div>                        
          </button>
          <button className="bg-red-200  fixed top-0 left-0 z-10  menu-overflow " />
          {showElement && (
        <div>
                 <div className="text-gray-500 menu z-40  md:mt-6 border-t-2 md:w-40 rounded bg-white shadow-md absolute z-20 right-5 w-40 mt-5 py-2 animated faster">
            {/* item */}
            <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
              <i className="fad fa-user-edit text-xs mr-1" /> 
              edit my profile
            </a>     
            {/* end item */}
            {/* item */}
       
            {/* end item */}
            {/* item */}    
            {/* end item */}
            {/* item */}   
            {/* end item */}
            <hr />
            {/* item */}
            <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
              <i className="fad fa-user-times text-xs mr-1" /> 
              log out
            </a>     
            {/* end item */}
          </div>
        </div>
      )}
        </div>
        {/* end user */}
   
        {/* messages */}
          
      </div>
      {/* end right */}
    </div>
    {/* en dnavbar content */}
  </div>
  {/* end navbar */}
  </div>
    )
}
export default DashNav;