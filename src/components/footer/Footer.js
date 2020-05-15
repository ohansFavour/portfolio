import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */


export default function Footer() {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text">Favour Ohanekwu<span role="img">❤️</span> </p>
      </Fade>
    </div>
  );
}
