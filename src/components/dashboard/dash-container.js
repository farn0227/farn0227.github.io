import DashHome from "./dash-home";
import { Link } from 'react-router-dom';

function DashContainer(){
    return(
        <div className=" bg-red-900  w-60 absolute left-0  lg:block h-full">
        <div id="sideBar" style={{width : "15rem" , height : ""}} className="bg-white h-screen  px-5 text-slate-800  shadow-md">
        <div className="flex flex-col">

          <div className="text-right hidden md:block mb-4">
            <button id="sideBarHideBtn">
            
            </button>
          </div>

          <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">homes</p>
    
          <a href="./index.html" className="mb-3 flex items-center gap-2 capitalize font-bold text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-800">
  <path fill-rule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clip-rule="evenodd" />
</svg>
      
            Analytics dashboard
          </a>
   
    
    
          <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">apps</p>
    

          <a href="./email.html" className="mb-3 flex gap-2 items-center capitalize font-bold text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-800">
  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
</svg>

            Messege
          </a>
        
          <div className="mb-3 capitalize font-bold group text-sm hover:text-teal-600 transition ease-in-out duration-500">
            
          <div className="flex justify-between items-center">
            <div  className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-800">
                    <path fillRule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z" clipRule="evenodd" />
                </svg>
                Content
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-700 group-hover:text-gray-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
        </div>     
            <div className=" pl-10 flex flex-col gap-2 py-2">
              <Link to="/dashboard/projects" className="text-xs text-gray-800 font-semibold hover:text-teal-400">Projects</Link>
              <Link to="/dashboard/content" className="text-xs text-gray-800 font-semibold hover:text-teal-400">Component</Link>
            </div>
          </div>
        </div>
      </div>
</div>
    )
}
export default DashContainer;