import './App.css';
import React from "react";
import Hello from './components/hello/hello';
import Tabby from './components/tabby/tabby'
import Testimonials from './components/testimonials/testimonials';
import Contactus from './components/contactus/contactus';
import Footer from './components/footer/footer';
import { GiHamburgerMenu } from 'react-icons/gi'

function App() {

  return (
    <div className="App">
      <header className='header'>
        <div className='logo'>
          Ishita nahar
        </div>
        <ul className="navigation">
            <li><a href="#banner">HOME</a></li>
            <li><a href="#shop">PHOTOS</a></li>
            <li><a href="#about">TESTIMONIALS</a></li>
            <li><a href="#review">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div className="hamburger">
            <i className="fa-solid fa-bars on" id="on"><GiHamburgerMenu color='white' fontSize={25}/></i>
        </div>
        <div className="hamNav">
            <ul className="navigation1">
                <i className='bx bxs-x-circle close'></i>
                <li><a href="#banner" className="out">HOME</a></li>
                <li><a href="#shop" className="out">PHOTOS</a></li>
                <li><a href="#about" className="out">TESTIMONIALS</a></li>
                <li><a href="#review" className="out">ABOUT</a></li>
                <li><a href="#contact" className="out">CONTACT</a></li>
            </ul>
        </div>
      </header>
      <div className='home'>
        <div className='homeBack'>
          <div className='hello'>
            < Hello />
          </div>
          <div className='quoteContainer'>
            <div className='quote'>
              <span className='mainQuote'>Creativity is a wild mind and a disciplined eye</span>
            </div>
          </div>
        </div>
      </div>
      <Tabby />
      <div className='headingTesti'>Testimonials</div>
      <div className='testimonials'>
        <Testimonials />
        <Testimonials />
        <Testimonials />
        <Testimonials />
        <Testimonials />
      </div>
      <div className='contactus'>
        <div className='contactUsHeading'><div>Contact <br/><span className='gradient'>Me</span></div></div>
        <Contactus />
      </div>
      <Footer />
    </div>
  );
}

export default App;