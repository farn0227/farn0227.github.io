import human from "../../asset/image/svg/happy.svg"
import Dashboard from "../../pages/dashboard/dashboard";
function DashHome(){
    return(
     
      <div className="lg:w-3/4 xl:w-10/12 w-full  top-28 right-0 absolute">
           <div className=" p-6 grid grid-cols-3  w-full gap-10">
        {/* <!-- card --> */}
       
      <div className="report-card bg-white  w-full h-48 bg-white border ">
  
  </div>
  {/* <!-- end card --> */}
    {/* <!-- card --> */}
       
    <div className="report-card bg-white  w-full h-48 bg-white border ">
  
  </div>
  {/* <!-- end card --> */}
    {/* <!-- card --> */}
       
    <div className="report-card bg-white  w-full h-48 bg-white border ">
  
  </div>
  {/* <!-- end card --> */}
  
  </div>
  <div className="flex gap-6 w-full px-6">
            <div className="card bg-teal-400 border-teal-100 flex items-center justify-start w-2/4 shadow-md text-white">
        <div className="card-body flex flex-row">
            
 
            <div className="img-wrapper w-40 h-40 flex justify-center items-center">
                <img src={human} alt="img title"></img>
            </div>



            <div className="py-2 ml-10">
                <h1 className="h6">Good Job, Fahmi!</h1>
                <p className="text-white text-xs">You've finished all of your tasks for this week.</p>

                <ul className="mt-4">
                    <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2"></i> Finish Dashboard Design</li>
                    <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2"></i> Fix Issue #74</li>
                    <li className="text-sm font-light"><i className="fad fa-check-double mr-2"></i> Publish version 1.0.6</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="flex gap-6 w-1/2 items-center">
    <div className="report-card bg-white  w-full h-48 bg-white border ">
  
  </div>
  <div className="report-card bg-white  w-full h-48 bg-white border ">
  
  </div>
    </div>
    </div>
<div className="px-6">
  <div className="alert bg-slate-800 px-6 py-2 text-slate-100 rounded-md mb-6 mt-6">
    "Selesaikan Apa Yang Kamu Harus Selesaikan"
</div>
</div>
    

      </div>
     
    )
}
export default DashHome;