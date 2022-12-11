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
        <div className="col">
          <a
            href="https://www.linkedin.com/in/nahuelavila-285803162/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="col">
          <a
            href="https://github.com/nahuelavila4"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
        <div className="col">
          <a
            href="mailto:avilanahuel99@gmail.com"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
        <div className="col">
          <a href="tel:1126132007" target={"_blank"} rel="noopener noreferrer">
            <i className="bi bi-phone-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
