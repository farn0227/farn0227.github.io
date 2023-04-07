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
import logo from "./asset/image/logo/farn.png"
import Content from "./components/dashboard/dash-content"
import DashProjects from "./components/dashboard/dash-projects"
function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(()=> {
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
 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/content" element={<Content />} />
      <Route path="/dashboard/projects" element={<DashProjects />} />
   
    </Routes>
  </BrowserRouter>





  </div>
  
  
  

  );
}
export default App;

