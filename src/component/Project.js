import React from "react";
import "../stylesheet/Project.css";
import Boxeo from "../img/boxeo-vector.jpg";
import {DiGithubBadge} from 'react-icons/di';
import {FaExternalLinkAlt} from 'react-icons/fa';
import {StyleGithub, StyleLink} from '../stylesheet/Style-Icons.js';

export function Project() {
  return (
    <div className="proyectos-recientes d-flex flex-column text-center">
      <section>
        <h1>Proyectos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          nec velit eget ipsum mattis euismod at sit amet dui. Ut et tortor et
          massa pellentesque fringilla at ac elit.
        </p>
        <div className="container proyectos-contenedor">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="proyecto">
                <img src={Boxeo} alt="boxeo"></img>
                <div className="overlay">
                  <p>Proyecto Boxeosd df ds</p>
                  <div className="iconos-proyectos">
                    <a href="https://github.com/" target={"_blank"} rel="noopener noreferrer">
                      <StyleGithub />
                    </a>
                    <a href="https://github.com/" target={"_blank"} rel="noopener noreferrer">
                      <StyleLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
