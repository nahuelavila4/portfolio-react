import React from "react";
import "../stylesheet/Hero.css";

export function Hero() {
  return (
    <div className="hero container">
      <div className="presentacion row">
        <div className="col">
          <h1>Nahuel Avila</h1>
          <h3>Web Developer</h3>
        </div>
      </div>
      <div className="iconos row">
        <div className="col">
          <i class="bi bi-linkedin"></i>
        </div>
        <div className="col">
          <i className="bi bi-github" aria-hidden="true"></i>
        </div>
        <div className="col">
          <i className="bi bi-envelope-fill" aria-hidden="true"></i>
        </div>
        <div className="col">
          <i className="bi bi-phone-fill" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}
