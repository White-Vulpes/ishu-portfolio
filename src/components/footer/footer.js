/* eslint-disable */
import React from "react";
import "./footerStyles.css";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="border"></div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h4>Ishita nahar</h4>
          <p className="footer-links">
            <a href="#" className="link-1">Home&nbsp;|</a>
            <a href="#">&nbsp;Photos&nbsp;|</a>
            <a href="#">&nbsp;Testimonials&nbsp;|</a>
            <a href="#">&nbsp;About&nbsp;|</a>
            <a href="#">&nbsp;Contact</a>
          </p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>Vepery</span> Chennai, Tamil Nadu</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p><a href="tel:+917010741294">+917010741294</a></p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:ishujphotography@gmail.com">ishujphotography@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p style={{color: 'white'}} className="footer-company-about">
            <span>About Me</span>
            As a young and passionate photographer, I'm dedicated to capturing the world's beauty through my lens, creating art that tells stories and evokes emotions.
          </p>
          <div className="footer-icons">
            <a href="https://www.instagram.com/ishujphotography/"><i className="fa fa-instagram"><BsInstagram/></i></a>
            <a href="#"><i className="fa fa-facebook"><FaFacebookF/></i></a>
            <a href=""><i className="fa fa-twitter"><BsTwitter/></i></a>
            <a href="https://www.linkedin.com/in/ishita-nahar-9564aa224/"><i className="fa fa-linkedin"><BsLinkedin/></i></a>
            <a href="mailto:ishujphotography@gmail.com"><i className="fa fa-mail"><MdEmail /></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;