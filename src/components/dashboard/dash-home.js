import human from "../../asset/image/svg/happy.svg"
import Dashboard from "../../pages/dashboard/dashboard";
function DashHome(){
  return(
<div className="absolute right-0 top-10   w-5/6">

  {/* strat wrapper */}
  <div className="h-screen flex flex-row flex-wrap">

    {/* strat content */}
    <div className="  flex-1 p-6 md:mt-16"> 
      {/* General Report */}
      <div className="grid grid-cols-3 gap-6 xl:grid-cols-3">
         {/* card */}
         <div className="report-card w-full">
          <div className="card ">
            <div className="card-body bg-white border w-full px-5 py-5 hover:shadow-md z-10 cursor-pointer flex flex-col">
              {/* top */}
              <div className="flex flex-row  justify-between items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="teal" class="w-7 h-7 opacity-50">
  <path d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
</svg>

                <span className="rounded-full text-white p-1 flex items-center justify-center badge bg-teal-400 text-xs">
                  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clip-rule="evenodd" />
</svg>

                </span>
              </div>
              {/* end top */}
              {/* bottom */}
              <div className="mt-8">
                <h1 className="text-black  text-2xl">10</h1>
                <p className="text-gray-400">Content</p>
              </div>                
              {/* end bottom */}
            </div>
          </div>
          <div className=" bg-white p-1 mx-5 border border-t-0 rounded rounded-t-none" />
        </div>
        {/* end card */}
      {/* card */}
      <div className="report-card w-full">
          <div className="card ">
            <div className="card-body bg-white border w-full px-5 py-5 hover:shadow-md z-10 cursor-pointer flex flex-col">
              {/* top */}
              <div className="flex flex-row  justify-between items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="teal" class="w-7 h-7 opacity-50" >
  <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
</svg>


                <span className="rounded-full text-white p-1 flex items-center gap-2 justify-center badge bg-teal-400 text-xs">
    150%
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clip-rule="evenodd" />
</svg>

                </span>
              </div>
              {/* end top */}
              {/* bottom */}
              <div className="mt-8">
                <h1 className="text-black  text-2xl">10</h1>
                <p className="text-gray-400">New Visitor</p>
              </div>                
              {/* end bottom */}
            </div>
          </div>
          <div className=" bg-white p-1 mx-5 border border-t-0 rounded rounded-t-none" />
        </div>
        {/* end card */}
        {/* card */}
      <div className="report-card w-full">
          <div className="card ">
            <div className="card-body bg-white border w-full px-5 py-5 hover:shadow-md z-10 cursor-pointer flex flex-col">
              {/* top */}
              <div className="flex flex-row  justify-between items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="teal" class="w-7 h-7 opacity-50">
  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
  <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
</svg>



                <span className="rounded-full text-white p-1 flex items-center gap-2 justify-center badge bg-teal-400 text-xs">
    150%
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clip-rule="evenodd" />
</svg>

                </span>
              </div>
              {/* end top */}
              {/* bottom */}
              <div className="mt-8">
                <h1 className="text-black  text-2xl">1400</h1>
                <p className="text-gray-400">Page View</p>
              </div>                
              {/* end bottom */}
            </div>
          </div>
          <div className=" bg-white p-1 mx-5 border border-t-0 rounded rounded-t-none" />
        </div>
        {/* end card */}
       
      </div>
      {/* End General Report */}
      {/* strat Analytics */}
      <div className="mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1">
        {/* update section */}
        <div className="card bg-teal-400 border-teal-400 py-5 shadow-md text-white">
          <div className="card-body flex flex-row">
            {/* image */}
            <div className="img-wrapper w-40 h-40 flex justify-center items-center">
            <img src={human} alt="img title"></img>
            </div>
            {/* end image */}
            {/* info */}
            <div className="py-2 ml-10">
              <h1 className="h6">Good Job, Mohamed!</h1>
              <p className="text-white text-xs">You've finished all of your tasks for this week.</p>
              <ul className="mt-4">
                <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2" /> Finish Dashboard Design</li>
                <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2" /> Fix Issue #74</li>
                <li className="text-sm font-light"><i className="fad fa-check-double mr-2" /> Publish version 1.0.6</li>
              </ul>
            </div>
            {/* end info */}
          </div>
        </div>
        {/* end update section */}
      </div>
      {/* end Analytics */}
      {/* alert */}
      <div className="alert bg-gray-700 px-2 py-3 rounded-md mb-6 mt-6">
        "Selesaikan Apa Yang Kamu Harus Selesaikan"
      </div>
      {/* end alert */}
    </div>
    {/* end content */}
  </div>
  {/* end wrapper */}
  {/* script */}
  {/* end script */}
</div>
    
    )
}
export default DashHome;