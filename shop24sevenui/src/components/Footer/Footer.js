import React from "react";
import './Footer.css'

function Footer() {
  return (
    <>
      <footer className="footer-container">
      <div className="footer-inner-container">
          @ {new Date().getFullYear()} - Eyahya Khan
        </div>
        <div className="footer-inner-container">
          <a href="https://github.com/eyahya-khan">
            Github
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
