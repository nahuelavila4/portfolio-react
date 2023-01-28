import React from "react";
import "../stylesheet/Hero.css";

export function Hero() {
  return (
    <div className="hero">
      <div className="presentacion row">
        <div className="col">
          <h1>Nahuel Avila</h1>
          <h3>Web Developer</h3>
        </div>
      </div>
      <div className="iconos row">
        <div className="redes linkedin col-sm-12 col-md-6 col-lg-3">
          <a
            href="https://www.linkedin.com/in/nahuelavila-285803162/"
            target={"_blank"}
            rel="noopener noreferrer"
            // className="mx-auto"
          >
            <i className="bi bi-linkedin"></i>
            <h2>LinkedIn</h2>
          </a>
        </div>
        <div className="redes github col-sm-12 col-md-6 col-lg-3">
          <a
            href="https://github.com/nahuelavila4"
            target={"_blank"}
            rel="noopener noreferrer"
            // className="mx-auto"
          >
            <i className="bi bi-github"></i>
            <h2>Github</h2>
          </a>
        </div>
        <div className="redes mail col-sm-12 col-md-6 col-lg-3">
          <a
            href="mailto:avilanahuel99@gmail.com"
            target={"_blank"}
            rel="noopener noreferrer"
            // className="mx-auto"
          >
            <i className="bi bi-envelope-fill"></i>
            <h2>Mail</h2>
          </a>
        </div>
        <div className="redes phone col-sm-12 col-md-6 col-lg-3">
          <a
            href="tel:1126132007"
            target={"_blank"}
            rel="noopener noreferrer"
            // className="mx-auto"
          >
            <i className="bi bi-phone-fill"></i>
            <h2>Phone</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
