import DashContainer from "./dash-container";
import DashNav from "./dash-navbar";

function Projects(){
    return(
        <div className="text-black">
            <DashNav />
            <DashContainer />
            <div className="lg:w-3/4 xl:w-10/12 w-full  top-28 right-0 absolute ">
            <div className="w-full p-6">
    <div className="flex justify-between items-center">
        <h1 className="text-4xl">Projects</h1>
        <div className="">
          <a href="" className="bg-teal-500 px-5 py-2 rounded-md text-white">Add New Projects</a>
        </div>
    </div>
   
  
    <div style={{top : "10px"}} className=" z-20 mt-6 bg-white block  rounded-md  shadow-md border border-gray-300 p-2">
      <div className="flex items-center justify-between">
        <p className="text-xl text-gray-700">Category</p>
        <div className=" cursor-pointer flex items-center gap-2 ">
          <p className=" text-xl">Sort</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
      </div>
      </div>
        
        <br></br>
        <div className="flex flex-wrap gap-1">
            <div className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-400 cursor-pointer  text-white border text-center   ">All</div>
            <div className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-400 cursor-pointer  text-white border text-center   ">Online Store website</div>
            <div className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-400 cursor-pointer  text-white border text-center   ">Company Profile</div>
            <div className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-400 cursor-pointer  text-white border text-center   ">Travel Website</div>
            <div className="open-add-category rounded-full  w-10 flex items-center justify-center text-white cursor-pointer text-center   "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 bg-indigo-600 hover:bg-indigo-400 rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </div>
        </div>
        
    </div>
   
    {/* <!-- card project --> */}
    <div className=" grid xl:grid-cols-2  gap-5 mt-6 ">

  <div s name="3"  className="cursor-pointer bg-black child-card-project cursor-pointer">
    <div className="report-card ">
        <div  className="card ">
            <div  className="card-body bg-center bg-cover  relative h-96 ">
                <div style={{opacity : 60}} className="block-projects hidden absolute -z-10 w-full h-full bg-black top-0 left-0 "></div>
                {/* <!-- top --> */}
                <div style={{right : "6vh"}} className="describe-projects opacity-0  absolute   flex flex-row justify-end items-center">
                    <div className="flex flex-col gap-2">
                        <span className="py-1 px-2 rounded-full flex items-center gap-2 text-white badge btn-bs-danger text-xs">
                            Delete
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>                              
                        </span>                            <span className="py-1 px-2 rounded-full justify-center flex items-center gap-2 text-white badge bg-yellow-400 text-yellow-900 hover:bg-yellow-600 text-xs">
                            Edit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                              </svg>
                        </span>
                    </div>
                    </div>
                {/* <!-- end top --> */}

                {/* <!-- bottom --> */}
                <div   style={{bottom : "5vh" , left : "5vh"}} className="describe-projects opacity-0  flex flex-col  absolute w-10/12    left-10">
                    <h1 className="h5 text-white">Symphone</h1>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam placeat facilis voluptas blanditiis, temporibus, aspernatur excepturi voluptatibus tenetur magni recusandae non a dolores libero quis unde neque laborum? Delectus, ad!</p>
                </div>                
                {/* <!-- end bottom --> */}
    
            </div>
        </div>
      
    </div>
</div>

<div s name="3"  className="cursor-pointer bg-black child-card-project cursor-pointer">
    <div className="report-card ">
        <div  className="card ">
            <div  className="card-body bg-center bg-cover  relative h-96 ">
                <div style={{opacity : 60}} className="block-projects hidden absolute -z-10 w-full h-full bg-black top-0 left-0 "></div>
                {/* <!-- top --> */}
                <div style={{right : "6vh"}} className="describe-projects opacity-0  absolute   flex flex-row justify-end items-center">
                    <div className="flex flex-col gap-2">
                        <span className="py-1 px-2 rounded-full flex items-center gap-2 text-white badge btn-bs-danger text-xs">
                            Delete
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>                              
                        </span>                            <span className="py-1 px-2 rounded-full justify-center flex items-center gap-2 text-white badge bg-yellow-400 text-yellow-900 hover:bg-yellow-600 text-xs">
                            Edit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                              </svg>
                        </span>
                    </div>
                    </div>
                {/* <!-- end top --> */}

                {/* <!-- bottom --> */}
                <div   style={{bottom : "5vh" , left : "5vh"}} className="describe-projects opacity-0  flex flex-col  absolute w-10/12    left-10">
                    <h1 className="h5 text-white">Symphone</h1>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam placeat facilis voluptas blanditiis, temporibus, aspernatur excepturi voluptatibus tenetur magni recusandae non a dolores libero quis unde neque laborum? Delectus, ad!</p>
                </div>                
                {/* <!-- end bottom --> */}
    
            </div>
        </div>
     
    </div>
</div>

<div s name="3"  className="cursor-pointer bg-black child-card-project cursor-pointer">
    <div className="report-card ">
        <div  className="card ">
            <div  className="card-body bg-center bg-cover  relative h-96 ">
                <div style={{opacity : 60}} className="block-projects hidden absolute -z-10 w-full h-full bg-black top-0 left-0 "></div>
                {/* <!-- top --> */}
                <div style={{right : "6vh"}} className="describe-projects opacity-0  absolute   flex flex-row justify-end items-center">
                    <div className="flex flex-col gap-2">
                        <span className="py-1 px-2 rounded-full flex items-center gap-2 text-white badge btn-bs-danger text-xs">
                            Delete
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>                              
                        </span>                            <span className="py-1 px-2 rounded-full justify-center flex items-center gap-2 text-white badge bg-yellow-400 text-yellow-900 hover:bg-yellow-600 text-xs">
                            Edit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                              </svg>
                        </span>
                    </div>
                    </div>
                {/* <!-- end top --> */}

                {/* <!-- bottom --> */}
                <div   style={{bottom : "5vh" , left : "5vh"}} className="describe-projects opacity-0  flex flex-col  absolute w-10/12    left-10">
                    <h1 className="h5 text-white">Symphone</h1>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam placeat facilis voluptas blanditiis, temporibus, aspernatur excepturi voluptatibus tenetur magni recusandae non a dolores libero quis unde neque laborum? Delectus, ad!</p>
                </div>                
                {/* <!-- end bottom --> */}
    
            </div>
        </div>
 
    </div>
</div>
 

</div>
    {/* <!-- end card project --> */}


  </div>
            </div>
        </div>
    )
}
export default Projects;