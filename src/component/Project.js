import React from "react";
import "../stylesheet/Project.css";

export function Project({ url, nombre, repo, img }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
      <div className="proyecto">
        <img src={img} alt="to do"></img>
        <div className="overlay">
          <p>{nombre}</p>
          <div className="iconos-proyectos">
            <a href={repo} target={"_blank"} rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href={url} target={"_blank"} rel="noopener noreferrer">
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
