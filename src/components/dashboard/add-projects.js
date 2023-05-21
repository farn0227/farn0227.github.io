import Content from "./dash-layout" ;
function NewProjects(){
  return(
<div>
<Content />
  {/* strat wrapper */}
  <div className="w-full  absolute right-10 w-4/5 p-6">
 
    {/* strat content */}
    <div className="w-full p-6 text-slate-800">
      <div className="flex justify-between items-center">
        <h1 className="text-slate-800 text-3xl">Add New Projects</h1>
      </div>
      {/* container form */}
      <div className="bg-white border w-full pb-20 rounded-md shadow-md mt-6">
        <form action method="post">
          <div className="banner px-20 mt-20 ">
            <h1 className="h5">Preview Image</h1>
            <label htmlFor="dropzone-file" className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">Payment File</h2>
              <p className="mt-2 text-gray-500 tracking-wide">Upload or darg &amp; drop your file SVG, PNG, JPG or GIF. </p>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <ul className="mt-6 flex flex-col gap-5 px-20">
            <li className="space-y-2">
              Tittle
              <br />
              <input type="text" className="px-2 py-2 w-full rounded-md bg-gray-200 focus:outline-none" />
            </li>
            <li className="space-y-2">
              Description
              <br />
              <textarea name id cols={30} rows={10} className="px-2 py-2 w-full rounded-md bg-gray-200 focus:outline-none" defaultValue={""} />
            </li>
            <li className="flex gap-2">
              <div className="space-y-2">
                Category
                <br />
                <label htmlFor="choose-cate" style={{width: '20rem'}} className="flex border   px-2 py-2 w-full rounded-md bg-gray-200 focus:outline-none items-center">
                  <select id="choose-cate " className="w-full focus:outline-none bg-gray-200">
                    <option label="Volvo">Volvo (Latin for "I roll")</option>
                    <option label="Saab">Saab (Swedish Aeroplane AB)</option>
                    <option label="Mercedes">Mercedes (Mercedes-Benz)</option>
                    <option label="Audi">Audi (Auto Union Deutschland Ingolstadt)</option>
                  </select>
                </label>
              </div>
              <div className="space-y-2">
                Date
                <br />
                <label htmlFor="date" className="flex px-2 py-2  rounded-md bg-gray-200 focus:outline-none  items-center">
                  <input type="date" name id="date" className="bg-gray-200 w-96 focus:outline-none" />
                </label>
              </div>
            </li>
            <li className="flex gap-2">
              <div className="space-y-2">
                Technology
                <br />
                <label htmlFor="choose-cate" style={{width: '20rem'}} className="flex border   px-2 py-2 w-full rounded-md bg-gray-200 focus:outline-none items-center">
                  <select id="choose-cate " className="w-full focus:outline-none bg-gray-200">
                    <option label="Volvo">Volvo (Latin for "I roll")</option>
                    <option label="Saab">Saab (Swedish Aeroplane AB)</option>
                    <option label="Mercedes">Mercedes (Mercedes-Benz)</option>
                    <option label="Audi">Audi (Auto Union Deutschland Ingolstadt)</option>
                  </select>
                </label>
              </div>
            </li>
            <li>
              <div className="space-y-2">
                Worker
                <br />
                <div className="flex gap-2 items-center">
                  <label htmlFor="team" className="px-2  block hover:bg-indigo-500 bg-indigo-500 text-white hover:text-white border border-indigo-500 rounded-md   px-2 py-1 w-auto items-center ">
                    Team
                    <input type="radio" name="team" className="hidden" id="team" />
                  </label>
                  <label htmlFor="team" className="px-2 block  hover:bg-indigo-500 hover:text-white border border-indigo-500 rounded-md text-gray-600  px-2 py-1 w-auto items-center ">
                    Im only
                    <input type="radio" name="team" className="hidden" id="team" />
                  </label>
                </div>
              </div>
            </li>
          </ul>
          <div className="banner px-20  mt-6 ">
            <div className="flex items-center justify-between py-6">
              <h1 className="h5">Preview Image</h1>
            </div>
            <label htmlFor="dropzone-file" className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">Payment File</h2>
              <p className="mt-2 text-gray-500 tracking-wide">Upload or darg &amp; drop your file SVG, PNG, JPG or GIF. </p>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <button className="text-center block w-full btn-bs-success text-lg mt-6 bg-emerald-500 hover:bg-emerald-400 text-white py-1.5 rounded-md">Submit</button>
          </div>
        </form></div>
    </div>
    {/* end container form */}
  </div>
  {/* end content */}
  {/* pop up */}
  <div id="container-add-category" style={{top: '38%', right: '35%'}} className="px-10   hidden py-10 border-2 shadow-md   rounded-md border bg-white fixed z-20 origin-center">
    <svg id xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{right: '-2vh', top: '-2vh'}} className="close-add-category w-8 h-8 btn-bs-danger p-1 cursor-pointer rounded-full absolute">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    <h1 className="h6">Add Category</h1>
    <input type="text" style={{width: 400}} placeholder="Typing.." className="border focus:outline-none text-gray-700 px-2 py-1 border-gray-400 bg-gray-200 mt-5 rounded-xl" />
    <br />
    <div className=" flex items-center justify-end">
      <button id className="close-add-category btn-bs-success  mt-5 px-5 py-2 rounded-md text-white focus:outline-none">Add</button>
    </div>
  </div>
  {/* end pop up */}
  {/* end wrapper */}
  {/* script */}
  {/* end script */}
</div>
  )
}
export default NewProjects;

