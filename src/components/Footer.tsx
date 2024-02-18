import React from "react";
import { Image } from "react-bootstrap";
import Logo from "../assets/logo_hele.png";
import "../style/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Image src={Logo} className="logo-footer" alt="logo"></Image>
      <span className="year-copyright">
        <p>Vandrelyst Copyright © {year}</p>
      </span>
    </footer>
  );
};

export default Footer;
