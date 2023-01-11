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
import {
  Routes,
  Route
} from "react-router-dom";
function App() {
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
  <div className='text-white'>
          <MavigationBar />
          <Socmed />
          <Ham />
          <Routes>
    <Route path="/" element={<Home/>}> </Route>
    <Route path="/projects" element={<Projects/>}> </Route>
  </Routes>
  </div>
  
  
  

  );
}
export default App;

