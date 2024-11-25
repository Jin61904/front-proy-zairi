import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <button className="footer-icon-btn" aria-label="Close">
          ✖
        </button>
        <button className="footer-icon-btn" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </button>
        <button className="footer-icon-btn" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </button>
        <button className="footer-icon-btn" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
