import BgPrimary from '../asset/image/background/bg-primary.png';
import '../style.css';
import First from "../components/first";
import About from "../components/about";
import Work from "../components/work";
import Projects from "../components/project";
import Contact from "../components/contact.js";
import $ from "react";
import { Link } from 'react-router-dom';
import { Fragment, useEffect } from "react";
function Home() {
  useEffect(() => {
   

  }, []);

  return (
    <div className='text-white home-background'>
      <div style={{bottom: "40%", left: "10%"}} className='fixed  z-10 hidden xl:flex items-center flex-col gap-5'>
      <a data-scroll="about" href='#about' className='flex items-center border-2 p-2 rounded-full border-pink-600 relative justify-center'>
      <span style={{ width:"1.5vh" , height:"1.5vh" }} className='absolute origin-center  rounded-full  bg-pink-600'></span>
      </a>
      <a data-scroll="works" href='#works' className='flex items-center  p-2 rounded-full border-pink-600 relative justify-center'>
      <span style={{ width:"1.5vh" , height:"1.5vh" }} className='absolute origin-center  rounded-full  bg-pink-600'></span>
      </a>
      <a data-scroll="projects" href='#projects' className='flex items-center  p-2 rounded-full border-pink-600 relative justify-center'>
      <span style={{ width:"1.5vh" , height:"1.5vh" }} className='absolute origin-center  rounded-full  bg-pink-600'></span>
      </a>
      <a data-scroll="contact" href='#contact' className='flex items-center  p-2 rounded-full border-pink-600 relative justify-center'>
      <span style={{ width:"1.5vh" , height:"1.5vh" }} className='absolute origin-center  rounded-full  bg-pink-600'></span>
      </a>
      
       
       
      </div>
      <First />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}
export default Home;

