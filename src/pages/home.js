import BgPrimary from '../asset/image/background/bg-primary.png';
import '../style.css';
import First from "../components/first";
import About from "../components/about";
import Work from "../components/work";
import Projects from "../components/project";
import Contact from "../components/contact.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from "jquery"
import { Fragment, useEffect } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
function Home() {
  // hamburger 
$("#close-ham").on('click' ,function(){
  $(".hamburger").animate({left: '-100%' } );
  $(".line1").animate({left: '0'} , 100);
  $(".line2").delay(100).animate({left: '0'} , 100);
  $(".line3").delay(200).animate({left: '0'} , 100);
}); 

// clicked-list-ham
$(".clicked-list-ham").on('click' ,function(){
    $(".hamburger").animate({left: '-100%' } );
  $(".line1").animate({left: '0'} , 100);
  $(".line2").delay(100).animate({left: '0'} , 100);
  $(".line3").delay(200).animate({left: '0'} , 100);

});  
$('#toggle-hamburger').on('click', function(){
  $(".line1").animate({left: '10rem'} , 100);
  $(".line2").delay(100).animate({left: '10rem'} , 100);
  $(".line3").delay(200).animate({left: '10rem'} , 100);
  $(".hamburger").animate({left : '0px'} );
}); 
  useEffect(() => {
    document.title = "FARN";
  }, []);
   useEffect(() => {
      AOS.init();
    }, []) 
  return (

   <div  className=' text-white home-background'>
<div  style={{bottom:"40%" , left:"10%"}} className='fixed z-10 hidden xl:flex items-center   flex-col gap-5'>
      <a href='#about' className='cursor-pointer block w-3 h-3 bg-pink-600 rounded-full '></a>
      <a href='#works' className='cursor-pointer block w-2 h-2 bg-pink-900 rounded-full '></a>
      <a href='#projects' className='cursor-pointer block w-2 h-2 bg-pink-900 rounded-full '></a>
      <a href='#contact' className='cursor-pointer block w-2 h-2 bg-pink-900 rounded-full '></a>
    </div>
    {/* <First /> */}
    <About />
    <Work />
    <Projects />
    <Contact />

  
   </div>
 


  );
}
export default Home;

