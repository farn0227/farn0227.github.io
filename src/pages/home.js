import BgPrimary from '../asset/image/background/bg-primary.png';
import '../style.css';
import First from "../components/first";
import About from "../components/about";
import Work from "../components/work";
import Projects from "../components/project";
import Contact from "../components/contact.js";
import { Link as LinkScroll } from 'react-scroll';
import NavigationBar from '../components/navbar';
import Socmed from '../components/socmed';
import Ham from '../components/hamburgermenu';
import { useState } from 'react';


export const Home = () => {
  return (
    <div  className='text-white home-background home-default'>
       <NavigationBar />
        <Socmed />
        <Ham />
      <LinkScroll activeClass='active' to='first' spy={true} smooth={true} ><First  /></LinkScroll>
      <LinkScroll activeClass='active' to='about' spy={true} smooth={true} ><About /></LinkScroll>
      <LinkScroll activeClass='active' to='work' spy={true} smooth={true} ><Work /></LinkScroll>
      <LinkScroll activeClass='active' to='projects' spy={true} smooth={true} ><Projects /></LinkScroll>
      <LinkScroll activeClass='active' to='contact' spy={true} smooth={true} ><Contact /></LinkScroll>
    </div>
  );
}
export default Home;

