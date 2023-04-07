function DashNav(){
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
          <button className="menu-btn focus:outline-none focus:shadow-outline flex flex-wrap items-center">
            <div className="w-8 h-8  bg-black rounded-full">
              wdw
            </div> 
            <div className="ml-2 capitalize flex ">
              <h1 className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none">moeSaid</h1>
              <i className="fad fa-chevron-down ml-2 text-xs text-gray-800 leading-none" />
            </div>                        
          </button>
          <button className="bg-red-200 fixed top-0 left-0 z-10  menu-overflow " />
          <div className="text-gray-500 menu  md:mt-7 md:w-40 rounded bg-white shadow-md absolute z-20 right-5 w-40 mt-5 py-2 animated faster">
            {/* item */}
            <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
              <i className="fad fa-user-edit text-xs mr-1" /> 
              edit my profile
            </a>     
            {/* end item */}
            {/* item */}
            <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
              <i className="fad fa-inbox-in text-xs mr-1" /> 
              my inbox
            </a>     
            {/* end item */}
            {/* item */}
            <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
              <i className="fad fa-badge-check text-xs mr-1" /> 
              tasks
            </a>     
            {/* end item */}
            {/* item */}
            <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
              <i className="fad fa-comment-alt-dots text-xs mr-1" /> 
              chats
            </a>     
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
        {/* end user */}
        {/* notifcation */}
        <div className="dropdown relative mr-5 md:static">
          <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
            <i className="fad fa-bells" />               
          </button>
          <button className="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow" />
          <div className="menu hidden rounded bg-white md:right-0 md:w-full shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
            {/* top */}
            <div className="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
              <h1>notifications</h1>
              <div className="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                <strong>5</strong>
              </div>
            </div>
            <hr />
            {/* end top */}
            {/* body */}
            {/* item */}
            <a className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
              <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                <i className="fad fa-birthday-cake text-sm" />
              </div>
              <div className="flex-1 flex flex-rowbg-green-100">
                <div className="flex-1">
                  <h1 className="text-sm font-semibold">poll..</h1>
                  <p className="text-xs text-gray-500">text here also</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <p>4 min ago</p>
                </div>
              </div>
            </a>
            <hr />
            {/* end item */}
            {/* item */}
            <a className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
              <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                <i className="fad fa-user-circle text-sm" />
              </div>
              <div className="flex-1 flex flex-rowbg-green-100">
                <div className="flex-1">
                  <h1 className="text-sm font-semibold">Fahmi</h1>
                  <p className="text-xs text-gray-500">text here also</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <p>78 min ago</p>
                </div>
              </div>
            </a>
            <hr />
            {/* end item */}
            {/* item */}
            <a className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
              <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                <i className="fad fa-images text-sm" />
              </div>
              <div className="flex-1 flex flex-rowbg-green-100">
                <div className="flex-1">
                  <h1 className="text-sm font-semibold">new imag..</h1>
                  <p className="text-xs text-gray-500">text here also</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <p>65 min ago</p>
                </div>
              </div>
            </a>
            <hr />
            {/* end item */}
            {/* item */}
            <a className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
              <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                <i className="fad fa-alarm-exclamation text-sm" />
              </div>
              <div className="flex-1 flex flex-rowbg-green-100">
                <div className="flex-1">
                  <h1 className="text-sm font-semibold">time is up..</h1>
                  <p className="text-xs text-gray-500">text here also</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <p>1 min ago</p>
                </div>
              </div>
            </a>
            {/* end item */}
            {/* end body */}
            {/* bottom */}
            <hr />
            <div className="px-4 py-2 mt-2">
              <a href="#" className="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500">
                view all
              </a>
            </div>
            {/* end bottom */}            
          </div>
        </div>
        {/* end notifcation */}
        {/* messages */}
        <div className="dropdown relative mr-5 md:static">
          <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
            <i className="fad fa-comments" />               
          </button>
          <button className="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow" />
          <div className="menu hidden md:w-full md:right-0 rounded bg-white shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
            {/* top */}
            <div className="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
              <h1>messages</h1>
              <div className="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                <strong>3</strong>
              </div>
            </div>
            <hr />
            {/* end top */}
            {/* body */}
            {/* item */}
            <a className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                <img className="w-full h-full object-cover" src="img/user1.jpg" alt />
              </div>
              <div className="flex-1 flex flex-rowbg-green-100">
                <div className="flex-1">
                  <h1 className="text-sm font-semibold">mohamed said</h1>
                  <p className="text-xs text-gray-500">yeah i know</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <p>4 min ago</p>
                </div>
              </div>
            </a>
            <hr />
            {/* end item */} 
            {/* item */}
            <a className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                <img className="w-full h-full object-cover" src="img/user2.jpg" alt />
              </div>
              <div className="flex-1 flex flex-rowbg-green-100">
                <div className="flex-1">
                  <h1 className="text-sm font-semibold">sull goldmen</h1>
                  <p className="text-xs text-gray-500">for sure</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <p>1 day ago</p>
                </div>
              </div>
            </a>
            <hr />
            {/* end item */}
            {/* item */}
            <a className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                <img className="w-full h-full object-cover" src="img/user3.jpg" alt />
              </div>
              <div className="flex-1 flex flex-rowbg-green-100">
                <div className="flex-1">
                  <h1 className="text-sm font-semibold">mick</h1>
                  <p className="text-xs text-gray-500">is typing ....</p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <p>31 feb</p>
                </div>
              </div>
            </a>
            {/* end item */}
            {/* end body */}
            {/* bottom */}
            <hr />
            <div className="px-4 py-2 mt-2">
              <a href="#" className="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500">
                view all
              </a>
            </div>
            {/* end bottom */}            
          </div>
        </div>
        {/* end messages */}               
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