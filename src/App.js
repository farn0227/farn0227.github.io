import React , {component} from "react";
import Home from "./pages/home";
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from "jquery" ;
import Projects from "./pages/projects/projects";
import Dashboard from "./pages/dashboard/dashboard";
import { Fragment, useEffect } from "react";
import { BrowserRouter, BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import { useState } from "react";
import {Helmet} from "react-helmet";
import DashContent from "./components/dashboard/dash-content"
import NewProjects from "./components/dashboard/add-projects" ;
import ScrollToTop from "./components/ScrollToTop"
import { Link } from 'react-router-dom';
function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(()=> {
// hamburger 
$(".close-ham-list").on('click' ,function(){
  $(".hamburger").animate({left: '-100%' } );
  $(".line1").animate({left: '0'} , 100);
  $(".line2").delay(100).animate({left: '0'} , 100);
  $(".line3").delay(200).animate({left: '0'} , 100);
 
}); 
$("").on('click' ,function(){
  $(".hamburger").animate({left: '-100%' } );
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
  })
  
  useEffect(() => {
    document.title = "FARN";
  }, []);
   useEffect(() => {
      AOS.init();
    }, []) 

  return (
  <div className='text-white bg-gray-50' >
       <Helmet>
        
        <link rel="shortcut icon" href={process.env.PUBLIC_URL + './asset/image/logo/farn.png'} type="image/png" />
      </Helmet>
  <BrowserRouter>
  <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/content" element={<DashContent />} />
      <Route path="/dashboard/new-projects" element={<NewProjects />} />
 
   
    </Routes>
  </BrowserRouter>





  </div>
  
  
  

  );
}
export default App;

