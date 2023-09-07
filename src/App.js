import './App.css';
import React from "react";
import Hello from './components/hello/hello';
import Tabby from './components/tabby/tabby'
import Testimonials from './components/testimonials/testimonials';
import Contactus from './components/contactus/contactus';
import Footer from './components/footer/footer';
import { GiHamburgerMenu } from 'react-icons/gi'
import dp from './assets/wp4991626.webp';

function App() {

  let hamburger = () => {
    document.getElementsByClassName('hamNav')[0].style.display = 'flex';
  }

  let hamburgerClose = () => {
    document.getElementsByClassName('hamNav')[0].style.display = 'none';
  }

  return (
    <div className="App">
      <header className='header'>
        <div className='logo'>
          Ishita nahar
        </div>
        <ul className="navigation">
            <li><a className='mainOut' href="#home">HOME</a></li>
            <li><a className='mainOut' href="#tabs">PHOTOS</a></li>
            <li><a className='mainOut' href="#testimonials">TESTIMONIALS</a></li>
            <li><a className='mainOut' href="#aboutme">ABOUT</a></li>
            <li><a className='mainOut' href="#contactus">CONTACT</a></li>
        </ul>
        <div className="hamburger" onClick={() => hamburger()}>
            <i className="fa-solid fa-bars on" id="on"><GiHamburgerMenu color='white' fontSize={25}/></i>
        </div>
        <div className="hamNav">
            <ul className="navigation1">
                <li><a href="#home" className="out" onClick={() => hamburgerClose()}>HOME</a></li>
                <li><a href="#tabs" className="out" onClick={() => hamburgerClose()}>PHOTOS</a></li>
                <li><a href="#testimonials" className="out" onClick={() => hamburgerClose()}>TESTIMONIALS</a></li>
                <li><a href="#aboutme" className="out" onClick={() => hamburgerClose()}>ABOUT</a></li>
                <li><a href="#contactus" className="out" onClick={() => hamburgerClose()}>CONTACT</a></li>
            </ul>
        </div>
      </header>
      <div className='home' id='home'>
        <div className='homeBack'>
          <div className='hello'>
            < Hello />
          </div>
          {/* <div className='quoteContainer'>
            <div className='quote'>
              <span className='mainQuote'>Creativity is a wild mind and a disciplined eye</span>
            </div>
          </div> */}
        </div>
      </div>
      <Tabby />
      <div className='headingTesti'id='testimonials'>Testimonials</div>
      <div className='testimonials' >
        <Testimonials />
        <Testimonials />
        <Testimonials />
        <Testimonials />
        <Testimonials />
      </div>
      <div className='aboutme' id='aboutme'>
        <div className='headingAboutme'>About&nbsp;<span className='gradient'>Me</span></div>
        <div className='aboutmeContent'>
          <div className='aboutmeImage'><img src={dp} alt='profile pic'></img></div>
          <div className='aboutmepara'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</div>
        </div>
      </div>
      <div className='contactus' id='contactus'>
        <div className='contactUsHeading'><div>Contact <br/><span className='gradient'>Me</span></div></div>
        <Contactus />
      </div>
      <Footer />
    </div>
  );
}

export default App;