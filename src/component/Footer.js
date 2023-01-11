import React from "react";
import "../stylesheet/Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer className="fot">
        <div className="nombre">Nahuel Avila</div>
        <div className="footer-iconos">
          <a
            href="https://github.com/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nahuelavila-285803162/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="mailto:avilanahuel99@gmail.com"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};
