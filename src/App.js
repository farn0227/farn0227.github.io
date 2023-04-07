import logo from './logo.svg';
import Home from "./pages/home";
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from "jquery" ;
import Ham from "./components/hamburgermenu";
import Projects from "./pages/projects/projects";
import Socmed from "./components/socmed";
import MavigationBar from "./components/navbar";
import { Fragment, useEffect } from "react";
import { BrowserRouter, BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';






function App() {
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
  <div className='text-white' id="app-container">
    
         
          <BrowserRouter>
          <ScrollToTop />
          <MavigationBar />
          <Socmed />
          <Ham />
          <Routes scrollToTop>
          <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    </Routes>
          </BrowserRouter>




  </div>
  
  
  

  );
}
export default App;

