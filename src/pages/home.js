import BgPrimary from '../asset/image/background/bg-primary.png';
import '../style.css';
import First from "../components/first";
import About from "../components/about";
import Work from "../components/work";
import Projects from "../components/project";
import Contact from "../components/contact.js";
import { Link } from 'react-scroll';
import NavigationBar from '../components/navbar';
import Socmed from '../components/socmed';
import Ham from '../components/hamburgermenu';
import { useState } from 'react';


export const Home = () => {
  return (
    <div id="home"  className='text-white home-background home-default'>
       <NavigationBar />
        <Socmed />
        <Ham />
      <div  ><First  /></div>
      <div  ><About /></div>
      <div ><Work /></div>
      <div  ><Projects /></div>
      <div id='contact'  ><Contact /></div>
    </div>
  );
}
export default Home;

